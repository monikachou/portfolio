# Monika Choudhary  -  Accounting & Finance Portfolio

The existing React 19 / TypeScript / Vite application, redesigned in warm ivory, midnight navy, and champagne gold. Uses the existing Lenis smooth-scrolling hook, Tailwind and Lucide icons, with system serif and sans-serif fonts; no new dependencies.

## Local development
Run these commands from app/:
- npm ci (only if dependencies are missing)
- npm run dev
- npm run lint
- npm run build
- npm run preview

Production output is app/dist/. TypeScript checking runs as part of the build.

## Phase 2 presentation and interactions
The supplied Monu_Logo.png is used in the header and footer, with its transparent padding handled through CSS. The original image is unchanged.
Career entries lead with context and verified impact; native details disclosures retain supporting work.
Caterpillar offers historical annual revenue inspection, eight-quarter scenario comparison, accessible tables, and downloadable source subsets.
The manufacturing explorer explains cost behavior and contribution margin without invented amounts.
The personal story includes international tennis match participation, explicitly provided by the user. No tournaments, rankings, countries, or awards are claimed. No portrait or tennis photo has been used.
Animations and Lenis respect reduced-motion preferences, including changes during the session.

## Content and privacy
Professional claims, exact titles, employers, dates, and education were checked against the updated Monika_Resume.pdf supplied by the user.
The downloadable PDF is an unmodified copy of the user-supplied Monika_Resume.pdf, including its contact details. The original file is unchanged.
Only email and LinkedIn are displayed. Email opens the visitor's email application; there is no message-sending backend.
The Caterpillar revenue chart uses the supplied project package's Historical_Annual.csv (2021–2025, USD millions converted to billions). Public source subset: public/data/caterpillar-revenue.csv.
The scenario view uses the supplied package's BI_Forecast_Final.csv (Q4 2026–Q3 2028), Revenue column divided by 1,000. The eight periods and three scenarios are reproduced without changing assumptions. Public subset: public/data/caterpillar-forecast-revenue.csv. Forecast values are model outputs, not actuals or predictions.
Caterpillar is an independent public-information case study. The manufacturing framework is conceptual; no measured financial results are claimed.
Old personal photos, project images, and resumes were moved out of public/ into ignored tmp/original-public-assets/, and are excluded from builds.
The source LICENSE is preserved.

## Deployment
Target repository: https://github.com/monikachou/portfolio
Target site: https://monikachou.github.io/portfolio/

In repository Settings > Pages, select GitHub Actions as the build source once.
The Pages workflow checks, builds and deploys pushes to main; it also supports manual runs.
The build gets its base path from GitHub Pages so logo, resume and data URLs work under /portfolio/.
Source uploads exclude installed dependencies, generated builds, local browser profiles and old personal assets. The original source license is preserved.
