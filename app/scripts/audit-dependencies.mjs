import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const npmCli = process.env.npm_execpath || process.argv[2];
if (!npmCli) throw new Error('Run this check with npm run audit:security');
const result = spawnSync(process.execPath, [npmCli, 'audit', '--json'], {
  encoding: 'utf8', timeout: 120000, maxBuffer: 8 * 1024 * 1024,
});
if (result.error) throw result.error;
const report = JSON.parse(result.stdout);
if (report.error || !report.metadata || !report.vulnerabilities) {
  throw new Error('Dependency audit did not complete; refusing to treat it as clean');
}
const lock = JSON.parse(readFileSync(new URL('../package-lock.json', import.meta.url), 'utf8'));
let rejected = false;
for (const [name, vulnerability] of Object.entries(report.vulnerabilities)) {
  for (const advisory of vulnerability.via.filter(value => typeof value === 'object')) {
    // No patched release exists as of 2026-11-17. These glob matchers run only
    // on repository-owned build patterns, never visitor input. Do not allow this
    // exception to follow picomatch into production dependencies.
    const accepted = name === 'picomatch'
      && advisory.url === 'https://github.com/advisories/GHSA-fc5q-39xc-vjpf'
      && vulnerability.fixAvailable === false
      && vulnerability.nodes.length > 0
      && vulnerability.nodes.every(node => lock.packages[node]?.dev === true);
    console.log(`${accepted ? 'KNOWN BUILD-ONLY LIMITATION' : 'BLOCKED'}: ${name}: ${advisory.title} (${advisory.url})`);
    if (!accepted) rejected = true;
  }
}
console.log('Audit totals:', report.metadata.vulnerabilities);
process.exitCode = rejected ? 1 : 0;
