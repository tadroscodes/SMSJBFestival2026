# Coptic Festival Landing Page

A React + Vite landing page for your church's Coptic festival: hero with date/time/location, history blurb, activities, church tour schedule, sponsor thank-yous, and a footer with social links.

## 1. Run it locally

You'll need [Node.js](https://nodejs.org) (v18+) installed.

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

## 2. Edit your content

Almost everything text-based lives in **`src/content.js`** — church name, festival name, date/time/location, history blurb, activities, tour schedule, sponsors, and social links. Edit that file; you shouldn't need to touch the component files (`src/components/*.jsx`) unless you want to change layout or structure.

## 3. Add your images

Drop your own images into `public/images/`:

| File | Used for |
|---|---|
| `public/images/church-photo.jpg` | Photo next to the "Our Story" section |
| `public/images/sponsors/*.svg` (or `.png`/`.jpg`) | Sponsor logos — filenames should match what you set in `src/content.js` under `sponsors.tiers[].names[].logo` |
| `public/images/favicon.svg` | Browser tab icon (a placeholder is already there) |

If an image file is missing, that image will simply not render (no broken-image icon), so the page won't break while you're still gathering assets.

## 4. Deploy to GitHub Pages

**Create a GitHub repo** (e.g. `coptic-festival`) and push this project:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/coptic-festival.git
git push -u origin main
```

**Set the base path.** Open `vite.config.js` and make sure `base` matches your repo name:

```js
base: '/coptic-festival/',   // replace with '/<your-repo-name>/'
```

If your repo is named exactly `<your-username>.github.io` (a "root" Pages site), set `base: '/'` instead.

**Install the deploy helper and publish:**

```bash
npm install
npm run build
npm run deploy
```

This pushes the built site to a `gh-pages` branch. Then, in your GitHub repo:

1. Go to **Settings → Pages**
2. Under "Build and deployment," set **Source** to "Deploy from a branch"
3. Set **Branch** to `gh-pages` / `root`
4. Save — your site will be live at `https://<your-username>.github.io/coptic-festival/` within a minute or two

Whenever you update content, just run `npm run deploy` again to republish.

## 5. Custom domain (optional)

If your church has its own domain (e.g. `festival.yourchurch.org`), add a `public/CNAME` file containing just that domain, set `base: '/'` in `vite.config.js`, and point your DNS at GitHub Pages per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Design notes

The visual language draws on Coptic art: deep Byzantine blue and antique gold, with a repeating interlace/knotwork pattern (common in Coptic textiles and manuscript borders) used as the section dividers throughout. Fonts are Cinzel (headings) and Cormorant Garamond / EB Garamond (body and accents), loaded from Google Fonts in `index.html`.
