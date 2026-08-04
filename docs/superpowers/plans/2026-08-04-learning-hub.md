# Learning Hub Implementation Plan

> **For agentic workers:** Implement task-by-task. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Ship an Astro static Learning Hub that renders existing track Markdown, with progress + search, deployed to GitHub Pages; skills ensure new tracks auto-appear.

**Architecture:** `site/` Astro app globs `../*/*.md` (track folders only). Auto-discover tracks via `README.md` + optional `track.json`. Pages: home, track docs, progress. Pagefind after build. Actions deploy `/learning/`.

**Tech Stack:** Astro 5, markdown, Pagefind, GitHub Actions Pages

## Global Constraints

- Base path `/learning/`; site URL `https://cody1991.github.io/learning/`
- Studio aesthetic (paper bg, ink text, deep teal accent); no purple AI slop
- Content truth remains track `.md` files; no duplicate copy
- New tracks: top-level folder + `README.md` (+ `track.json`) → appear without editing site code
- Do not commit unless user asked — except design/plan commits already done; for this build commit when logical chunks work if user previously ok — user said 开工, will commit site when working

---

### Task 1: Skills + track.json convention

**Files:**
- Modify: `.cursor/skills/learning-resource-recommend/SKILL.md`
- Modify: `.cursor/skills/learning-resource-recommend/folder-template.md`
- Create: `*/track.json` for existing five tracks

- [ ] Document: every new track needs `README.md`, `comparison.md`, `track.json` (`title`, `summary`, `order`, `firstCourse`)
- [ ] Site auto-discovers folders with `README.md` + `track.json`
- [ ] Add `track.json` to all five tracks

### Task 2: Scaffold Astro site

**Files:** `site/package.json`, `astro.config.mjs`, `src/**`

- [ ] Create Astro project in `site/` with base `/learning/`
- [ ] Global CSS (studio), BaseLayout, home page listing tracks
- [ ] Utils: discoverTracks(), loadMarkdown(), parseCheckboxes()

### Task 3: Routes + progress + search

- [ ] `/tracks/[slug]/` and `/tracks/[slug]/[...doc]/`
- [ ] `/progress`
- [ ] Pagefind postbuild + search UI in header

### Task 4: CI + root README

- [ ] `.github/workflows/pages.yml`
- [ ] Root `README.md` with site URL and how to add a track

### Task 5: Verify

- [ ] `npm run build` in `site/` succeeds
- [ ] Spot-check routes exist in `dist/`
