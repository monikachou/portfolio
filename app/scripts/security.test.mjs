import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

const root = new URL('../', import.meta.url);
const read = file => readFile(new URL(file, root), 'utf8');
async function files(dir) {
  const entries = await readdir(new URL(dir, root), { withFileTypes: true });
  return (await Promise.all(entries.map(entry => {
    const file = path.posix.join(dir, entry.name);
    return entry.isDirectory() ? files(file) : [file];
  }))).flat();
}

test('built HTML restricts script execution, connections, objects and forms', async () => {
  const html = await read('dist/index.html');
  const policy = html.match(/http-equiv="Content-Security-Policy" content="([^"]+)"/i)?.[1];
  assert.ok(policy, 'CSP must survive the production build');
  for (const directive of ["default-src 'none'", "script-src 'self'", "script-src-attr 'none'", "connect-src 'none'", "object-src 'none'", "base-uri 'none'", "form-action 'none'", "frame-src 'none'"]) {
    assert.ok(policy.split(';').map(value => value.trim()).includes(directive), directive);
  }
  assert.doesNotMatch(policy, /unsafe-eval|script-src[^;]*unsafe-inline/);
  assert.match(html, /name="referrer" content="no-referrer"/);
  const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
  assert.ok(scripts.length > 0);
  for (const [, attrs, body] of scripts) {
    const src = attrs.match(/src="([^"]+)"/)?.[1];
    assert.ok(src?.startsWith('/') && !src.startsWith('//'), 'Only local script files');
    assert.equal(body.trim(), '', 'No inline executable script');
  }
});

test('only approved public files and compiled assets ship', async () => {
  const approved = new Set(['index.html', 'Monu_Logo.png', 'monika-portrait.jpeg', 'data/caterpillar-revenue.csv', 'data/caterpillar-forecast-revenue.csv', 'resume/Monika-Choudhary-Resume.pdf']);
  for (const file of await files('dist')) {
    const relative = file.slice('dist/'.length);
    assert.ok(approved.has(relative) || /^assets\/[\w-]+\.(js|css)$/.test(relative), `Unreviewed public file: ${relative}`);
    assert.doesNotMatch(relative, /(?:^|\/)\.|\.map$|\.pem$|\.key$|\.env|node_modules|package-lock|src\//i);
  }
  for (const file of await files('dist/assets')) {
    if (!file.endsWith('.js')) continue;
    const source = await read(file);
    assert.doesNotMatch(source, /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|\b(?:ghp|github_pat)_[A-Za-z0-9_]{20,}|\bAKIA[A-Z0-9]{16}\b/);
    assert.doesNotMatch(source, /sourceMappingURL=|@vite\/client|react-refresh/);
  }
});
