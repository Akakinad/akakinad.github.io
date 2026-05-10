# Personalized Portfolio – Requirements Document

---

## 1. Overview
A single‑page, dark‑theme portfolio that showcases your ML and software engineering work to attract recruiters for **ML Engineer**, **Backend Engineer**, and **Software Engineer** roles in Berlin. Hosted on GitHub Pages, built with plain HTML/CSS/JS and driven by a static JSON file for project data.

---

## 2. Target Audience
- Hiring managers / recruiters for senior‑level technical roles
- Technical peers reviewing your ML and backend expertise

---

## 3. Functional Requirements

| # | Feature | Description | Acceptance Criteria |
|---|---------|-------------|----------------------|
| 1 | **Hero Section** | Full‑width top banner with name, headline, and a call‑to‑action button to download the CV. | Name and headline visible over dark background; button initiates CV download. |
| 2 | **About Me** | One‑to‑two‑sentence paragraph under the hero. | Text displayed, limited to ~2 lines on desktop, collapses gracefully on mobile. |
| 3 | **Skills Section** | Grouped skill icons by category (Programming Languages, ML/AI, Tools & DevOps, Web). | All listed skills appear with appropriate icons; no proficiency bars. |
| 4 | **Projects Section** | Grid/list of 7 ML projects with thumbnail, title, short description, tech tags, live demo & GitHub links. | Data populated from `projects.json`; each card shows required fields; clicking links opens new tab. |
| 5 | **Education Section** | Chronological list of institutions (42 Berlin, Masterschool, University of Ibadan). | Institution name, program, dates displayed; optional logo. |
| 6 | **Contact Section** | Icons/links to LinkedIn and GitHub, plus a “Download CV” button. | Links open respective profiles; CV download works. |
| 7 | **Smooth Scrolling Navigation** | Fixed header with anchor links to each page section. | Clicking a nav item scrolls smoothly to target section; active link highlighted. |
| 8 | **Responsive Layout** | Mobile‑first design that degrades gracefully on tablets and desktops. | No horizontal overflow, readable text, touch‑friendly navigation. |
| 9 | **Dark Theme + Accent** | Dark background (`#121212`) with electric‑blue/cyan accents (`#00dfff`). | All UI respects dark background; hover/focus states use accent color. |
|10| **Scrolling Animations** | Fade‑in / slide‑up animations as sections enter viewport. | Animations trigger only once per section; do not hinder performance. |
|11| **SEO Metadata** | Proper `<title>`, `<meta name="description">`, Open Graph, Twitter cards, canonical URL. | Search engines display correct title/description; preview cards show hero image. |
|12| **GitHub Pages Deployment** | Repository structure ready for `gh-pages` branch or `docs/` folder deployment. | After pushing, site is accessible at `https://<username>.github.io/<repo>/`. |
|13| **Static JSON Data** | `projects.json` containing an array of project objects. | Site loads and renders all 7 projects correctly from the file. |
|14| **Accessibility** | Semantic HTML, alt text for images, focus outlines, sufficient color contrast. | Passes Lighthouse accessibility audit ≥ 90 %. |

---

## 4. Data Model – `projects.json`
```json
[
  {
    "title": "Project Title",
    "shortDescription": "One‑sentence overview of the project.",
    "technologies": ["Python", "TensorFlow", "Docker"],
    "category": "Machine Learning",            // e.g., "NLP", "Computer Vision"
    "liveDemoUrl": "https://example.com/demo",
    "repoUrl": "https://github.com/user/repo",
    "thumbnail": "assets/img/project-thumb-1.png"
  }
  // … repeat for remaining 6 projects
]
```
**Schema**
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `title` | string | ✓ | Human‑readable project name |
| `shortDescription` | string | ✓ | ≤ 120 characters, displayed on card |
| `technologies` | array[string] | ✓ | Shown as badges or inline list |
| `category` | string | ✓ | Used for optional filtering/tag display |
| `liveDemoUrl` | string (URL) | ✓ | `target="_blank"` |
| `repoUrl` | string (URL) | ✓ | `target="_blank"` |
| `thumbnail` | string (relative path) | ✓ | Web‑optimised image (WebP/PNG, ≤ 300 KB) |

---

## 5. UI/UX Specification
### 5.1 Layout & Navigation
- **Header**: Fixed, semi‑transparent dark bar, contains logo (your name) and navigation links (`#hero`, `#about`, `#skills`, `#projects`, `#education`, `#contact`).
- **Hero**: 100 vh height, centered vertical stack: large name (`h1`), headline (`h2`), primary CTA button (“Download CV”). Background can be a subtle gradient or dark texture.
- **Section Spacing**: 80 px vertical padding on desktop, 40 px on mobile.

### 5.2 Colors & Typography
| Element | Color | Usage |
|---------|-------|-------|
| Background | `#121212` | Whole page |
| Primary Text | `#e0e0e0` | Body |
| Accent (links, hover, icons) | `#00dfff` | Interactive elements |
| Card Background | `#1e1e1e` | Project cards |
| Card Hover | `#262626` | Slightly lighter dark |
| Font Family | `"Inter", -apple-system, Helvetica, Arial, sans-serif` | Headings & body |
| Font Weights | 400 (regular), 600 (semi‑bold for headings) | Visual hierarchy |

### 5.3 Animations
- Use **Intersection Observer** to add a `fade-in-up` CSS class when a section enters the viewport.
- Duration: 400 ms, easing: `cubic-bezier(0.4, 0, 0.2, 1)`.

### 5.4 Responsiveness
| Breakpoint | Width | Adjustments |
|------------|-------|-------------|
| Mobile | ≤ 600 px | Single‑column layout, stacked nav (hamburger optional), smaller font sizes. |
| Tablet | 601‑1024 px | Two‑column project cards, slightly larger margins. |
| Desktop | ≥ 1025 px | Three‑column project grid, full navigation bar. |

### 5.5 Icons
- Use a lightweight icon set (e.g., Feather Icons or SVGs from **simple‑icons**).
- Each skill badge includes the corresponding SVG (Python, Docker, etc.).

---

## 6. Technical Architecture
| Layer | Technology | Reason |
|-------|------------|--------|
| **Markup** | HTML5 | Semantic structure, SEO‑friendly |
| **Styling** | CSS (custom + CSS variables) | No external framework, easy theming |
| **Interactivity** | Vanilla JavaScript (ES6) | Load JSON, build project cards, handle smooth scroll, animate on scroll |
| **Data** | `projects.json` (static) | Simple, no build step required |
| **Hosting** | GitHub Pages (root or `docs/` folder) | Free, integrates with repo |
| **Build/Deploy** | Optional GitHub Actions to lint CSS/HTML | Automated checks, not mandatory |

---

## 7. SEO & Metadata
```html
<title>John Doe – ML Engineer & Software Developer Portfolio</title>
<meta name="description" content="ML Engineer & Software Developer based in Berlin, showcasing 7 end‑to‑end machine‑learning projects, technical skills, education, and contact information.">
<link rel="canonical" href="https://<username>.github.io/<repo>/">
<!-- Open Graph -->
<meta property="og:title" content="John Doe – ML Engineer & Software Developer">
<meta property="og:description" content="Portfolio of ML and backend projects for senior engineering roles in Berlin.">
<meta property="og:image" content="assets/img/og-image.png">
<meta property="og:url" content="https://<username>.github.io/<repo>/">
<meta property="og:type" content="website">
<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="John Doe – ML Engineer & Software Developer">
<meta name="twitter:description" content="Portfolio of ML and backend projects for senior engineering roles in Berlin.">
<meta name="twitter:image" content="assets/img/og-image.png">
```
- Add `lang="en"` to `<html>`.
- Descriptive `alt` attributes on all images (thumbnails, icons).

---

## 8. File & Folder Structure
```
portfolio/
├─ index.html
├─ assets/
│  ├─ css/
│  │   └─ styles.css
│  ├─ js/
│  │   └─ main.js
│  └─ img/
│      ├─ project-thumb-1.webp
│      ├─ project-thumb-2.webp
│      └─ og-image.png
├─ data/
│   └─ projects.json
└─ resume/
    └─ John_Doe_CV.pdf
```
- `index.html` imports `styles.css` and `main.js`.
- `projects.json` resides in `data/` and is fetched via `fetch('./data/projects.json')`.

---

## 9. Development Checklist
1. **Set up repo** – `git init`, add `README.md` with project description.
2. **Create folder skeleton** as above.
3. **Add HTML scaffolding** with semantic sections & IDs.
4. **Insert CSS variables** for colors, fonts, spacing.
5. **Implement JavaScript**: 
   - Load JSON data, generate project cards.
   - Smooth‑scroll handler for nav links (`scrollIntoView({behavior:'smooth'})`).
   - Intersection Observer for animations.
6. **Add skill icons** – download SVGs, inline them or reference via `<img>` with `alt`.
7. **Populate `projects.json`** with the 7 projects (title, description, tech list, URLs, thumbnail path, category).
8. **Add CV PDF** to `resume/` and link from hero & contact sections.
9. **Write SEO meta tags** in `<head>`.
10. **Test responsiveness** (Chrome DevTools, mobile simulators).
11. **Run Lighthouse** – aim for ≥ 90 % performance, accessibility, best practices, SEO.
12. **Commit & push** to GitHub.
13. **Enable GitHub Pages** (choose `main` branch or `docs/` folder deployment).
14. **Verify live site** – check all links, animations, PDF download.

---

## 10. Future Enhancements (Optional)
- **Theme toggle** (light/dark) with `prefers-color-scheme`.
- **Project filtering** by `category` tags.
- **Analytics** (Google Analytics or Plausible) via async script.
- **Contact form** powered by Formspree or Netlify Functions.

---

### Acceptance Summary
The portfolio will be a clean, dark‑themed, single‑page site that instantly communicates your expertise through a hero headline, concise bio, grouped skill icons, dynamically rendered project cards from a static JSON file, education timeline, and easy contact links, all optimized for SEO and mobile devices, and hosted on GitHub Pages.

---

*Next step*: If you approve this PRD, I will create a detailed implementation blueprint (PLAN.md).