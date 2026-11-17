# Portfolio security review — 2026-11-17

## Scope and result

Reviewed the current published source at commit 6b08e04ed32110d0ac68c1b9bb5846d95f8f95d1, the public asset inventory, client-side input/sinks, and GitHub Pages deployment. This is a static React/Vite portfolio: no application server, login, database, payment flow or contact submission endpoint. Contact uses mailto and LinkedIn. The public resume intentionally contains professional contact details.

Used the Strix repository's code-review, penetration-testing and remediation guidance. No Strix engine scan was run: Docker's engine was unavailable, Strix was not installed, and no Strix cloud credentials were configured. Manual review, npm's live advisory database, build checks and artifact tests are separate checks, not a Strix pentest or a claim of complete coverage.

## Changes

- Refreshed the lockfile to patch available dependency advisories, including Vite 7.3.8. Removed the unused development inspection plugin. Updated minimatch to its patched major with an explicit override; lint and production build verify current usage.
- Added a browser Content Security Policy: local scripts only; no inline script handlers, eval, network connections, embedded frames, objects, workers, base URL changes or form submissions. Inline styles remain allowed because React uses style attributes for the charts and scroll indicator. All visible content and assets retain their existing behavior. The policy is removed only during local development for Vite HMR.
- Disabled production source maps explicitly, kept the development and preview servers on loopback, and disabled development cross-origin access.
- Pinned deployment actions to commit SHAs. Build jobs have read permissions; only the deployment job has Pages and OIDC write access. Dependency installation suppresses lifecycle scripts.
- Added deployment and PR checks for dependency advisories and the built artifact. The artifact allowlist prevents accidental publication of extra public files, source maps and recognizable credential formats. These checks are not exhaustive secret scanning.
- Added weekly Dependabot update requests for npm and GitHub Actions, and weekly security checks.

## Remaining limitations

- npm reports GHSA-fc5q-39xc-vjpf in picomatch, a build-time glob matcher; no fixed npm release was available at review time. Multiple dependency entries inherit this one advisory. No browser production dependency was flagged by npm audit --omit=dev. The audit gate allows only this exact advisory, only while no fix is available and every affected picomatch installation is marked development-only in the lockfile. All other direct advisories fail the gate. Repository-owned glob patterns are the input; visitors cannot supply patterns to the build. Remove the exception once a fix is published.
- GitHub Pages does not provide application-controlled custom response headers here. HTML meta CSP cannot enforce frame-ancestors, and does not apply to direct PDF/image requests or GitHub's generated error pages. No frame-ancestors or X-Frame-Options protection is claimed. Full header controls need a hosting/CDN configuration supporting them.
- Branch main was unprotected at review time. Account MFA/passkeys, recovery settings, collaborator permissions and branch rules were not changed or fully audited. Protect main with required checks and enable GitHub secret scanning/push protection where available.
- Public professional information and the resume can be downloaded or scraped. Browser hardening does not prevent that, nor guarantee that GitHub accounts or dependencies can never be compromised.

## Verification

Run in app/: npm ci --ignore-scripts; npm run audit:security; npm audit --omit=dev; npm run lint; VITE_BASE_PATH=/portfolio/ npm run build; npm run test:security.

Security tests verify that the production CSP survives bundling, executable scripts remain local/external files, and only reviewed public assets and compiled JS/CSS are shipped. No SQL injection, authentication or server-side tests apply to this static application. No denial-of-service or shared GitHub infrastructure testing was performed.
