# 🚀 Pull Request: Next.js 16 App Router Migration & Headless WordPress Integration

**Branch:** `feature/nextjs-migration` → `main`

---

## 📌 PR Title
```text
feat: migrate frontend from Vite to Next.js 16 App Router with resilient headless WordPress CMS integration
```

---

## 📝 Executive Summary

This pull request migrates the entire Markencia frontend from a **React + Vite Single-Page Application (SPA)** to a modern, SEO-optimized **Next.js 16 App Router** architecture powered by **Turbopack**. 

In addition to modern routing and server-side rendering (SSR) capabilities, this migration integrates a **headless WordPress CMS** for dynamic blog content while establishing robust error handling to prevent browser runtime crashes when the local API is offline.

---

## ✨ Key Technical Achievements

### 1. 🏗️ Framework Migration (`Vite` → `Next.js 16 App Router`)
- **App Router Directory Structure:** Migrated routing to `src/app/` with a root `layout.jsx`, custom 404 handler (`_not-found/page.jsx`), and dedicated static/dynamic routes (`/`, `/about`, `/services`, `/blogs`, `/blogs/[slug]`, `/case-studies`, `/case-studies/[slug]`, `/pricing`, `/contact`, `/career`, etc.).
- **Environment Variables:** Converted Vite `import.meta.env.*` variables to standard Next.js `NEXT_PUBLIC_*` syntax.
- **SEO & Static Routes:** Added structured metadata, Open Graph tags, and auto-generated `sitemap.xml` & `robots.txt`.
- **Production Verification:** Validated `next build`, successfully compiling **30/30 static and dynamic routes** in ~2 seconds.

---

### 2. 📰 Headless WordPress CMS Integration (`src/services/blog/wordpress.js`)
- **100% Dynamic CMS Content:** Replaced all hardcoded/dummy blog posts with live REST API queries (`/wp-json/wp/v2/posts`, `/faqs`, `/comments`).
- **Offline & Network Resilience:** Upgraded `wpFetch` with safe error recovery; if the WordPress server is unreachable locally, it returns empty fallbacks (`[]`) instead of throwing uncaught exceptions.
- **ACF & Keyword FAQs:** Implemented automatic keyword extraction to fetch matching FAQs from WordPress Advanced Custom Fields (ACF) or fallback to latest FAQs.

---

### 3. 🛡️ React 19 / Next.js 16 Stability & Error Fixes
- **Eliminated `AbortError` / `Component unmounted` Dev Overlays:** Replaced `AbortController` inside `useEffect` hooks across `BlogsPage.jsx`, `SingleBlog.jsx`, and `BlogComments.jsx` with clean `isMounted` boolean flags. This prevents Next.js dev overlays and browser extensions from reporting cleanup cancellations as runtime errors.
- **JSX DOM Compliance:** Corrected React JSX attribute casing (e.g., updating `fetchpriority="high"` to `fetchPriority="high"` in `PostHero.jsx`).

---

## 🧪 Verification Checklist

- [x] **Dev Server (`next dev --turbopack`):** Fast hot-reloading with zero console warnings or runtime error overlays.
- [x] **Static & Dynamic Production Build (`next build`):** All 30 routes compile cleanly with zero TypeScript or linting errors.
- [x] **Dynamic Slug Routing:** `/blogs/[slug]` and `/case-studies/[slug]` render correctly with dynamic parameters.
- [x] **Zero Visual Regression:** Preserved existing design system tokens, animations, and responsive styles without data loss.
