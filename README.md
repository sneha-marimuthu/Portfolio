# OriginalPortfolio (Hero Section)

This repository contains a Vite + React scaffold implementing a responsive hero section with:

- Transparent, hide-on-scroll navbar (reappears on upward scroll and stays visible for 7s)
- Hero layout with left profile (desktop) and right content
- Typewriter animation
- Social & Resume buttons
- Tailwind CSS + Framer Motion + React Icons

Run locally:

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

GitHub Pages deployment:

- The site is configured for `https://sneha-marimuthu.github.io/Portfolio`.
- `vite.config.mjs` uses `base: '/Portfolio/'`, so built assets load from the correct GitHub Pages project path.
- Push to `main` and the GitHub Actions workflow in `.github/workflows/deploy.yml` will build and deploy the `dist` folder.
- In the repository settings, set Pages source to `GitHub Actions`.
- For manual deployment from your machine, run `npm run deploy`.

Files to inspect:
- [src/components/Navbar.jsx](src/components/Navbar.jsx)
- [src/components/Hero.jsx](src/components/Hero.jsx)
- [src/components/Typewriter.jsx](src/components/Typewriter.jsx)
- [src/hooks/useScrollDirection.js](src/hooks/useScrollDirection.js)

Replace the placeholder `src/assets/profile.svg` with an actual profile photo `src/assets/profile.jpg` and update the markup in `Hero.jsx` if needed.
