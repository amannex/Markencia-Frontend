# Markencia Frontend

Welcome to the frontend repository for **Markencia**, a premium, data-driven marketing and growth agency platform. This project is built using modern web technologies to deliver a fast, dynamic, SEO-optimized, and visually stunning user experience.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack) + [React 19](https://react.dev/)
- **CMS Integration**: Headless WordPress REST API (`/wp-json/wp/v2`)
- **Styling**: Vanilla CSS (CSS Modules) & [Tailwind CSS v4](https://tailwindcss.com/) with modern design principles (Glassmorphism, CSS micro-animations)
- **Routing & SEO**: Next.js App Router with page-level Metadata API, auto-generated `sitemap.xml`, and `robots.txt`
- **Deployment**: Configured for [Vercel](https://vercel.com/) (`vercel.json` with Next.js preset)

---

## ✨ Key Features

- **Next.js 16 App Router**: Server-Side Rendering (SSR) and Static Site Generation (SSG) for lightning-fast page loads and maximum SEO performance.
- **Headless WordPress Blog & Insights**:
  - Dynamically fetches posts, categories, comments, and keyword-matched FAQs from a headless WordPress CMS.
  - Offline & network-resilient API integration (`wpFetch`) with graceful empty fallbacks that never break UI rendering.
- **Premium UI/UX**: Custom-designed interfaces with fluid micro-animations, glowing gradients, and glassmorphic elements.
- **Our Works Portfolio**: A showcase of past case studies and client successes.
- **Responsive & Performance Focused**: Fully optimized for mobile, tablet, and desktop devices with Turbopack fast refreshing in development.

---

## 🛠️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v20 or higher recommended)
- npm, yarn, pnpm, or bun
- (Optional) Local or remote WordPress CMS running with REST API enabled

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/amannex/Markencia-Frontend.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd Markencia-Frontend
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Configure environment variables:**  
   Create an `.env` (or `.env.local`) file in the root directory and set your headless WordPress API URL:
   ```env
   NEXT_PUBLIC_WP_API_URL=http://localhost:8888/wp-json
   ```
5. **Start the development server:**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the port indicated in your terminal) to view the application in your browser.

---

## 📦 Build & Deployment

To verify the production build locally:

```sh
npm run build
```

### Deploying to Vercel
1. Import your project repository into Vercel.
2. In **Project Settings → Build & Development Settings**:
   - **Framework Preset**: `Next.js`
   - **Build Command**: `next build` (Default)
   - **Output Directory**: Leave **default / blank** (do not set to `dist`)
3. Add your environment variable `NEXT_PUBLIC_WP_API_URL` under **Settings → Environment Variables**.

---

## 📂 Project Structure

- `/src/app` - Next.js App Router pages (`layout.jsx`, static & dynamic page routes, custom 404 `_not-found/page.jsx`)
- `/src/components` - Reusable UI & section components (buttons, cards, headers, blog sections)
- `/src/pages` - Page view components imported into App Router routes
- `/src/services/blog` - Headless WordPress CMS REST API integration (`wordpress.js`)
- `/src/styles` - Global CSS styles, design tokens, and CSS modules
- `/src/data` - Static placeholder and navigation data

---

## 📝 License

Distributed under the MIT License.
