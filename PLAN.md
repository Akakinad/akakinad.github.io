# Implementation Blueprint – Personalized Portfolio

**Goal**: Deliver a production‑ready, dark‑theme, single‑page portfolio hosted on GitHub Pages, built with plain HTML/CSS/JS and powered by a static `projects.json` file.

---

## High‑Level Milestones
| Milestone | Description | Approx. Effort |
|-----------|-------------|----------------|
| **M0 – Repo Setup** | Initialise Git repo, folder skeleton, basic README. | 1 h |
| **M1 – Core Layout** | Static HTML structure (hero, about, skills, projects, education, contact) with placeholder content. | 2 h |
| **M2 – Styling Foundations** | Dark theme CSS variables, global typography, responsive grid, navigation bar. | 3 h |
| **M3 – Navigation & Smooth Scroll** | Fixed header, anchor links, JavaScript smooth‑scroll implementation. | 1 h |
| **M4 – Skills Section** | Add skill categories, embed SVG icons, basic CSS styling. | 2 h |
| **M5 – Projects JSON & Rendering** | Create `data/projects.json`, write JS to fetch & render project cards. | 3 h |
| **M6 – Animations** | Intersection Observer‑based fade‑in‑up animations for sections & cards. | 2 h |
| **M7 – Education & Contact** | Static markup for education timeline, contact icons/links, CV download. | 1 h |
| **M8 – SEO & Metadata** | Add proper `<title>`, meta description, Open Graph/Twitter tags, alt text. | 1 h |
| **M9 – Accessibility & Lint** | Verify contrast, focus outlines, add `lang` attribute, run Lighthouse audit. | 2 h |
| **M10 – Deployment** | Configure GitHub Pages, push to `main` (or `docs/`), test live site. | 1 h |
| **M11 – Polish & Docs** | Final README, update PRD/PLAN links, optional future‑enhancement notes. | 1 h |

_Total estimated time: ~20 hours (can be split across days)._ 

---

## Incremental Chunk Breakdown
Each chunk is a **self‑contained, testable unit** that can be committed independently.

### Chunk 1 – Repository & Skeleton
1. `git init` and create a **README.md** with a brief project description.
2. Create folder layout:
   - `assets/css/`
   - `assets/js/`
   - `assets/img/`
   - `data/`
   - `resume/`
3. Add a placeholder `index.html` containing only a minimal `<html>` skeleton with a `<head>` (linking `styles.css` & `main.js`).
4. Commit and push to GitHub.

### Chunk 2 – Static Page Structure
1. In `index.html`, add semantic sections with IDs:
   - `hero`
   - `about`
   - `skills`
   - `projects`
   - `education`
   - `contact`
2. Insert placeholder text for each section (e.g., "[Hero placeholder]").
3. Add a basic `<header>` with navigation links (`<a href="#hero">Home</a>` etc.).
4. Verify that clicking a nav link jumps to the section.
5. Commit.

### Chunk 3 – Global Styling & Dark Theme
1. Create `assets/css/styles.css`:
   - Define CSS variables for **background**, **text**, **accent**, **font‑family**, **spacing**.
   - Apply dark background (`#121212`) and light text globally.
   - Set `font-family: "Inter", -apple-system, Helvetica, Arial, sans-serif;`.
2. Style the header (fixed, semi‑transparent, flex layout). 
3. Add a simple responsive grid utility (`.grid { display: grid; gap: 1rem; }`).
4. Include a media query for mobile breakpoints (≤ 600 px).
5. Verify visual changes in the browser.
6. Commit.

### Chunk 4 – Smooth‑Scroll JavaScript
1. Create `assets/js/main.js` with:
   - Event listeners on navigation links that call `element.scrollIntoView({behavior: 'smooth'});`.
   - Optional active‑link highlighting based on scroll position.
2. Test navigation on desktop and mobile viewports.
3. Commit.

### Chunk 5 – Skills Section – Icons & Layout
1. Gather SVG icons for each skill (download from **simple‑icons** or Feather). Store in `assets/img/skills/`.
2. In `index.html`, create four skill groups (Programming Languages, ML/AI, Tools & DevOps, Web) using `<section id="skills">`.
3. For each skill, use `<img src="assets/img/skills/python.svg" alt="Python" class="skill-icon">` and a label.
4. CSS: style icons (size ~24 px), flex‑wrap container, consistent spacing.
5. Verify that all icons render and are accessible (alt text). 
6. Commit.

### Chunk 6 – Projects JSON & Rendering Logic
1. Create `data/projects.json` with a **single** example project (use placeholder URLs and images).
2. In `main.js`, implement a function `loadProjects()`:
   ```js
   fetch('./data/projects.json')
     .then(r => r.json())
     .then(projects => {
        const container = document.querySelector('#projects .grid');
        projects.forEach(p => {
          const card = document.createElement('div');
          card.className = 'project-card';
          /* build inner HTML with thumbnail, title, description, tech badges, demo & repo links */
          container.appendChild(card);
        });
     });
   ```
3. Add minimal CSS for `.project-card` (background `#1e1e1e`, hover `#262626`, padding, border‑radius). 
4. Confirm that the example project appears correctly.
5. Commit.

### Chunk 7 – Populate Full Projects Data
1. Replace the placeholder entry with **all 7 real projects** (titles, short descriptions, tech arrays, category, live demo URL, repo URL, thumbnail path). Use realistic thumbnail filenames (e.g., `project-ml‑1.webp`).
2. Add the thumbnail images to `assets/img/projects/`.
3. Refresh the page; verify each card displays correct data and links open in new tabs.
4. Commit.

### Chunk 8 – Section‑Level Animations
1. In `styles.css`, define the animation class:
   ```css
   .fade-in-up { opacity: 0; transform: translateY(20px); transition: opacity .4s ease, transform .4s ease; }
   .fade-in-up.visible { opacity: 1; transform: none; }
   ```
2. Add the `fade-in-up` class to each top‑level section (`hero`, `about`, `skills`, etc.).
3. In `main.js`, instantiate an **IntersectionObserver** that toggles the `visible` class when a section enters the viewport.
4. Test that sections animate once on first scroll.
5. Commit.

### Chunk 9 – Education & Contact Sections
1. Add static markup for education entries (list each institution with program name and dates). Optionally include small logos placed in `assets/img/education/`.
2. In the contact section, embed LinkedIn and GitHub SVG icons linked to your profiles.
3. Add a **Download CV** button that points to `resume/John_Doe_CV.pdf` with `download` attribute.
4. Style the contact area to match the accent color for icons and links.
5. Commit.

### Chunk 10 – SEO & Metadata
1. Update `<head>` in `index.html` with the full set of meta tags (title, description, canonical, Open Graph, Twitter cards) as defined in the PRD.
2. Add `lang="en"` to the `<html>` tag.
3. Ensure every `<img>` includes a meaningful `alt` attribute.
4. Commit.

### Chunk 11 – Accessibility & Linting
1. Run a **Lighthouse** audit (Chrome DevTools) on the live preview.
2. Address any issues:
   - Contrast ratio (adjust accent or text color if needed).
   - Focus outlines for interactive elements (add `:focus-visible` style).
   - Verify that navigation is keyboard‑operable.
3. Optionally run **HTML validator** (`npx html-validate`) and fix warnings.
4. Commit.

### Chunk 12 – GitHub Pages Deployment
1. In the GitHub repo settings, enable **Pages** from the `main` branch (or `docs/` folder). 
2. If using `docs/`, move all site assets into that folder and adjust paths accordingly.
3. Push the final commit; verify the live URL loads without errors.
4. Test on a real device (mobile) to confirm responsiveness and download functionality.
5. Commit a final version noting “Deployment ready”.

### Chunk 13 – Polish & Documentation
1. Update **README.md** with:
   - Project description.
   - Build‑free usage instructions.
   - Link to live site.
   - Brief contribution guidelines.
2. Add a **link** to `PRD.md` and `PLAN.md` at the bottom of the README for future reference.
3. Optionally add a **GitHub Actions** workflow that runs `npm i -g htmlhint && htmlhint .` and `stylelint` (if you later add a linter). 
4. Commit.

---

## Risk Mitigation & Safe Practices
- **Never commit secrets** – CV, GitHub token, etc., stay local.
- **Incremental commits** – each chunk ends with a commit, making rollback trivial.
- **Static assets only** – no external API calls, ensuring GitHub Pages works offline.
- **Responsive testing** – use Chrome DevTools device toolbar after each layout change.
- **Accessibility first** – alt text and focus handling added early (Chunk 5‑11).

---

## Next Action
Proceed with **Chunk 1** (repo initialization and skeleton creation). Let me know if you would like any adjustments to the plan before I start committing code.
