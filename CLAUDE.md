# Grona AI — Website & Dashboard
> Updated: 2026-02-28

Part of the Grona monorepo. For full system context, read `../CLAUDE.md`.
For API endpoints and backend integration, read `../grona-product/grona-backend/CLAUDE.md`.

@../.claude/rules/brand.md

---

## Page Brief Format

A page brief (MD file, pasted text, or file path) should include: page name, route, goal, audience, sections in order with key content for each, and any assets needed. If incomplete, infer from `grona-product.md` and existing pages. Only ask the user if the goal or audience is unclear.

---

## Page Build Workflow (follow in order)

### Step 1: Read memory (not explore)

Before exploring the codebase or searching MCP tools, ALWAYS read:

1. **`~/.claude/projects/.../memory/grona-ai-components.md`** — Complete catalog of:
   - 20 example landing pages with section-by-section breakdowns
   - 120+ example pages (dashboards, about, blog, contact, FAQ, pricing, team, 404, legal)
   - All production pages (routes, content files, descriptions)
   - Every marketing component category with variant counts and naming patterns
   - How to compose pages from building blocks

2. **`~/.claude/projects/.../memory/grona-product.md`** — Product spec, features, tech stack, pricing, audience

3. **Any page-specific plan files** in `~/.claude/projects/.../memory/` (e.g., `features-page-plan.md`)

4. **The page brief** — the MD file or content provided by the user

**Skip exploration** for page composition tasks — the catalog has everything. Only explore if the task involves files/patterns NOT in memory (e.g., backend integration, build config).

### Step 2: Pick a reference example page

Match the page brief to the closest example in the catalog (e.g., landing-page-02 for hero→features→integrations→metrics→CTA). Read that example file (`src/examples/<name>.tsx`) to see its full section structure and copy section code directly instead of writing from scratch.

### Step 3: Create a page plan (before writing code)

Output a section-by-section plan showing: each section's purpose, the UntitledUI component chosen for it, background color, and any assets needed. Include which components need installing vs already exist in `src/components/marketing/`. Show the plan to the user before proceeding.

### Step 4: Pick and install components

For each section in the plan, prefer installed components (check `src/components/marketing/` first). If a component is needed but not installed, use `mcp__untitledui__get_component` to get the install command — that's the only valid use of the MCP tool.

### Step 5: Build the content file

- Use the page composition pattern (below) for `page.tsx`
- Put all section logic in a `{route}-content.tsx` file, marked `"use client"`
- **Separate content from layout**: define section data as typed arrays/objects at the top of the file, then map over them in JSX. Never hardcode repeating content inline.
- Follow `.claude/rules/page-design.md` for visual rhythm, pacing, and structure

### Step 6: Source images and logos

- **Check existing assets first**: look in `public/assets/images/` before downloading anything
- **Source SVG logos automatically**: use Simple Icons CDN (`https://cdn.simpleicons.org/{name}`) for brand/platform logos. If a logo isn't available there, create a clean SVG manually or search other sources.
- **Process for brand consistency**: if monochrome/grey logos are needed, strip `fill` attributes from SVGs and replace with `currentColor` so they inherit from CSS. Run this conversion automatically — don't ask the user.
- **Save to**: `public/assets/images/{category}/` (e.g., `integrations/`, `clients/`, `partners/`)

### Step 7: Verify

- Run `npx next build` or check the dev server
- Confirm the page renders without errors
- Check that no template artifacts remain (search for "Untitled", placeholder company names, fake stats)

---

## Tech Stack (don't re-discover)

- Next.js 16 + React 19 + TypeScript 5.9
- Tailwind CSS v4 (CSS-first, tokens in `theme.css`)
- React Aria Components for accessibility
- Static export (`output: 'export'`)
- **@untitledui/icons for ALL icons** — never use Lucide, Heroicons, or other icon libraries. Search @untitledui/icons first. Verify icon exists with: `node -e "console.log(require('@untitledui/icons').IconName ? 'OK' : 'MISSING')"`

## Page Composition Pattern

Every page follows:

```tsx
// src/app/{route}/page.tsx
import Content from "./{route}-content";
import { FooterLarge01 } from "@/app/home-screen";
import { HeaderWithNavigation as Header } from "@/components/marketing/header-navigation/header-with-navigation";

export default function Page() {
    return (
        <div className="bg-primary">
            <Header isFloating />
            <Content />
            <FooterLarge01 />
        </div>
    );
}
```

Content components are in the same route directory, marked `"use client"`.

## Section Layout Pattern

```tsx
<section className="bg-primary py-16 md:py-24">
    <div className="mx-auto w-full max-w-container px-4 md:px-8">
        {/* Section intro */}
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
            <span className="text-sm font-semibold text-brand-secondary md:text-md">Badge</span>
            <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Heading</h2>
            <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Subtext</p>
        </div>
    </div>
</section>
```

Background alternation between sections: `bg-primary` → `bg-secondary` → `bg-primary` (use `SectionDivider` between major groups).

## Content Data Pattern

Always separate repeating content from layout:

```tsx
// Define data at file top
const features = [
    {
        icon: FileSearch02,
        title: "...",
        description: "...",
        bullets: ["...", "..."],
        prompts: ["...", "..."],   // for chat-style products
    },
];

// Map in JSX
{features.map((feature, index) => (
    <FeatureCard key={feature.title} {...feature} reversed={index % 2 !== 0} />
))}
```

## Reusable Sub-Components (already exist in codebase)

Before creating new helper components, check if these exist in the target page or shared files:

- `ChatBubble` / `ChatExamples` — prompt pill display (features-content.tsx)
- `CheckItemText` — bullet lists with check icons (features-content.tsx, pricing-tier-card.tsx)
- `AlternateImageMockup` — screenshot frame wrapper (features-content.tsx, features-alternating-layout-01.tsx)
- `FeaturedIcon` — icon badges (`@/components/foundations/featured-icon/`)
- `SectionDivider` — visual separator (`@/components/shared-assets/section-divider`)
- `Button` — all CTAs (`@/components/base/buttons/button`)
- `Badge` / `BadgeGroup` — announcement pills (`@/components/base/badges/`)

## Brand Rules

Loaded via `@import` from `../.claude/rules/brand.md`. Page-specific addition:
- Only use pre-approved claims (see `features-page-plan.md` or `grona-product.md` in memory)
- No template artifacts — search for "Untitled", placeholder company names, fake stats

## Existing Assets

Check before creating/downloading:
- `public/assets/images/homepage/` — client logos (aruhma.svg, growthrocks.svg)
- `public/assets/images/integrations/` — platform logos (shopify, wordpress, webflow, wix, woocommerce, elementor, gtm, ga4, clarity, hubspot, google-ads, facebook-ads)
- `public/assets/images/blogs/` — blog post images
- `src/components/foundations/logo/` — Grona logo component
- `src/components/foundations/social-icons/` — social platform icons (X, LinkedIn, Facebook, GitHub, etc.)
