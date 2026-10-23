# Umair Rathore's engineering portfolio

Personal portfolio focused on PHP/Laravel, backend systems, full-stack SaaS delivery, and production engineering.

Live site: https://umairrathore.github.io/PortFolio/

## Run locally

From the repository root, using Python 3:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://localhost:8765/index.html. Use an HTTP server rather than opening a filesystem URL.

## Structure and stack

- `index.html`: homepage, project data, filters, project modals, theme controls, and structured data.
- `case-studies/`: Wooma, SalaryLeaks, and Translation case studies.
- `css/portfolio-polish.css`: homepage refinements; the three project stylesheets support case studies and featured cards.
- `js/wooma.js`: shared case-study theme behavior.
- `img/`: screenshots and social preview image.
- `portfolio/*.html` and `portfolio_final.html`: redirects preserving old draft URLs.
- `lib/`, `scss/`, `css/style.css`, and `js/main.js`: retained template assets, not loaded by active pages. Kept pending a complete historical usage inventory.

This is a static HTML/CSS/JavaScript site. Bootstrap 5.3.3 loads from a CDN; Inter loads from Google Fonts. There is no package manifest, lockfile, installation step, framework compiler, or configured build/lint/unit-test suite.

## Validation

Check JavaScript execution, project filters, modal closing and focus restoration, theme switching, keyboard navigation, assets and anchors, social metadata, and layouts at 1440px, 768px, and 390px. Check both themes and reduced-motion behavior. Run `git diff --check` before publishing. External availability can change; verify destination links separately.

## Content accuracy

Wooma: 250,000+ PDF reports imported across tenants. Approximately 12.5M associated assets is a derived estimate (250,000 × average 50); the largest tenant had approximately 104,000 reports and an estimated 5.2M associated assets. Approximately two weeks refers only to the largest tenant. One production worker and one active migration were deliberate constraints.

SalaryLeaks is a financial data platform, not SaaS. Sole engineering responsibility does not imply business ownership. Translation uses locally hosted CPU inference. BCM describes integration support and troubleshooting without claiming ownership of its bidding engine.

The four open-source PRs linked on the homepage were verified as merged and authored by `UmairRathore` on October 23, 2026. Employment dates follow the owner's current corrections; SalaryLeaks is a separate continuing part-time engagement. No generic public résumé is provided by design.

## GitHub Pages and repository metadata

The source supports publishing static files from `main` at the repository root using GitHub Pages. No custom build or deployment workflow is required. Confirm the publishing source in Settings > Pages before deployment. Preserve relative asset paths and canonical URLs under `/PortFolio/`.

Suggested GitHub About description: `PHP/Laravel software engineer portfolio: backend systems, full-stack SaaS, production migrations, and verified open-source contributions.`

Suggested About website: `https://umairrathore.github.io/PortFolio/`

Available connected tools do not expose repository About editing; apply these two fields manually. No repository settings were changed during this audit.

Keep credentials, private client data, and environment files out of the repository. Preserve `LICENSE.txt` and inherited template attribution requirements.
