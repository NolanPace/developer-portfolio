# Developer Portfolio — Static, Accessible, Responsive

A professional, filterable, dark/light engineering portfolio requiring **no frameworks, npm, or build step**. Project cards, filters, and presentation are built with standard HTML, CSS and JavaScript; links are configured for the `NolanPace` GitHub account.

## Preview
Open `index.html` directly, or run:
```bash
python -m http.server 8000
# http://localhost:8000
```

## Customize before launch
1. Update the About section and replace the template biography with approved wording.
2. Edit `projects.js` to reflect published repositories, accurate completion status, and preferred links.
3. Update the name/initials, contact method, résumé link and social links.
4. Add real screenshots, project demos, and measurable results after they exist.

## Deploy to GitHub Pages
Visit Settings → Pages → Deploy from a branch → `main` / root. A URL is issued by GitHub Pages after deployment. For a personal domain, configure a DNS record and Pages custom domain afterward.

The design is responsive, includes skip navigation, semantic sections, keyboard-accessible filter buttons and links, reduced frontend dependencies, and no tracking scripts. The optional Google Fonts import falls back to system fonts when offline. MIT licensed.
