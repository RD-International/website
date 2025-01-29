<div align="center">

<img src="public/project.png" alt="Screenshot" />

<hr/>

</div>

## 📌 Table Of Contents

1. [CMS](#-Tina-CMS)
2. [Features](#-Features)
3. [Roadmap](#-Roadmap)
4. [Stack](#-Stack)
5. [Running locally](#-Running-Locally)
6. [Configure](#-Configure)
7. [Categories](#-Adding-a-category)
8. [Tours](#-Adding-a-tour)
9. [Draft](#-Activating-draft-mode)
10. [FrontMatter](#-Frontmatter)
11. [CLI](#-Commands)
12. [Contributors](#-Contributors)

## 🦙 Tina CMS

By default, this template comes pre-configured with Tina CMS.

Now you can create your tours directly from the CMS without the need to do it manually.

The documentation for Tina CMS can be found [here](https://tina.io/docs/)

> Tina is completely optional, and you can remove it, and it will still function in the same way.

## 💪 Features:

<p align="center">
  <a href="https://pagespeed.web.dev/analysis/https-blog-template-gray-vercel-app/7ovjfewos9?form_factor=mobile">
    <img width="510" alt="openblog Lighthouse Score" src="public/openblog-lighthouse-score.svg">
  <a>
</p>
    
- ✅ Minimal styling
- ✅ Mobile responsive
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support
- ✅ Syntax highlighting
- ✅ Image optimization
- ✅ Table of contents
- ✅ Dark mode
- ✅ Reading Time
- ✅ [Pagefind](https://pagefind.app/) static search library integration
- ✅ Related tours
- ✅ Share tours (Linkedin, twitter)
- ✅ Draft mode
- ✅ Copy code block
- ✅ CMS in the repository (Tina CMS)
- ✅ Pagination
- ✅ ViewTransition (new)
- ✅ Disqus comments (new)

## ⚙️ Stack

- [**ASTRO** + **Typescript**](https://astro.build/) - Astro is the all-in-one web framework designed for speed.
- [**Tailwind CSS** + **Tailwind-Merge** + **clsx**](https://tailwindcss.com/) - Tailwind CSS is a utility-first CSS framework.
- [**Eslint**](https://eslint.org/) - ESLint is an open source project that helps you find and fix problems.
- [**Prettier**](https://prettier.io/) - Code formatter.
- [**Search Library**](https://pagefind.app/) - Static search library integration.
- [**Motion**](https://motion.dev/) - Motion One is the smallest fully-featured animation library for the web.
- [**Tina CMS**](https://tina.io/) - CMS.

## 👨🏻‍💻 Running Locally

**Recommended extensions for VSCode:**

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).
- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode).

1. Clone or [fork](https://github.com/danielcgilibert/blog-template/fork) the repository:

```bash
git@github.com:danielcgilibert/blog-template.git
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

## 📐 Configure

- Edit the configuration file **src/data/site.config.ts** for the basic blog metadata.
- Modify the files in the **/public** folder:
  - favicon
  - robots.txt -> update the Sitemap url to your own domain
  - open-graph -> the open-graph is the image that will be displayed when sharing the blog link. For tours, the preview image is the tour cover.

## 🗂️ Adding a category

To add a new category to your blog, simply go to the src/data/categories.ts file and add it to the array.

Example:

```ts
export  const  CATEGORIES  =  [
'JavaScript',
'React',
'new category here'  <---
]  as  const
```

> 🚨 Zod checks whether the category is not correctly written or does not exist in the properties of the markdown document. **It will throw an error when building the application.** 🚨

## 📄 Adding a tour

Adding a tour is as simple as adding a .md or .mdx file to the blog folder at the path **src/content/blog**. The filename will be used to create the slug/URL of the page.

For example, if you have a file named **jsx-and-react.md**, it will be transformed into: **http://yourdomain.com/tour/jsx-and-react/**

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                                                                                                           |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm install`          | Installs dependencies                                                                                                            |
| `pnpm run dev`          | Starts local dev server at `localhost:3000`                                                                                      |
| `pnpm run build`        | Build your production site to `./dist/`                                                                                          |
| `pnpm run preview`      | Preview your build locally, before deploying                                                                                     |
| `pnpm run format:check` | Check code format with Prettier                                                                                                  |
| `pnpm run format`       | Format codes with Prettier                                                                                                       |
| `pnpm run sync`         | Generates TypeScript types for all Astro modules. [Learn more](https://docs.astro.build/en/reference/cli-reference/#astro-sync). |
| `pnpm run lint`         | Lint with ESLint                                                                                                                 |

# Roadmap

- [x] About Page with Google Maps and Social Link (Web3Forms)
- [x] Add Husky
- [x] Add tsc in package.json
- [x] Fix Drawer
- [x] video covers the whole page on small breakpoints
- [x] fix the text on small breakpints
- [x] host on github pages
- [x] Remove unneeded package
- [x] Make langkwai thing optional
- [x] Hide dialog at medium breakpoints
- [x] Finalize Tina CMS
- [x] Astro Optimizations
- [x] Flesh out country page + add country card
- [x] Add specific page for each city
- [ ] Web3Forms for Contact Forms
- [ ] navigation Links: home, about us, tours, contact
- [ ] put all countries under tours
- [ ] put all countries under tours
- [ ] Fix Get in Touch Section
- [ ] Redo README
- [ ] Fix hosting issues
- [ ] Setup organization
- [ ] Change sign in color
- [ ] Finalize Github Organization
- [ ] Finalize Readme and Git Repo Details
- [ ] Fix view on large breakpoints
- [ ] Fix github page mappings at paths
