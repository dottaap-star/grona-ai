# Website Build Framework
> A reusable playbook for building a 15-25 page SaaS marketing website from scratch.
> Extracted from the Grona build (19 + 4 pages, Next.js static export, 1-week timeline).

---

## How This Framework Works

This framework produces a set of markdown documents that fully specify a website before a single line of code is written. The documents form a strict hierarchy: each layer depends on the one above it.

```
0. Product & Brand Knowledge Base → What we're selling, to whom, against whom (the raw material)
1. Brand Voice        → How we sound (tone, banned words, claims policy)
2. Website Strategy   → What we're building (pages, conversion model, content repetition)
3. Page Design Rules  → How pages look (visual hierarchy, component system, page type rules)
4. Page Briefs        → What each page contains (section-by-section specs)
5. Website Audit      → How we verify it's correct (12-category checklist)
```

Phase 0 is the input. Phases 1-5 are the output. Phase 0 captures everything the founders already know about the product, market, and brand. Phases 1-5 translate that knowledge into a website spec.

The output: a `docs/` folder that any developer (or AI) can pick up and build from without ambiguity.

---

## Phase 0: Product & Brand Knowledge Base

**File:** `docs/brand-knowledge.md` (or a skill file with reference sub-files)
**When:** Before anything else. This is the raw material that every other phase draws from.
**Time:** 8-20 hours (the most front-loaded investment, but it already exists in founders' heads).

### Why this phase exists

Every SaaS website project starts with the same problem: the people who know the product, market, and brand aren't the ones writing the page specs. Phase 0 captures that knowledge in structured reference files so that Phases 1-5 can be written by anyone (including AI) without constant founder input.

If you skip this phase, you'll spend Phases 1-4 asking the same questions repeatedly: "Who are we selling to?", "What do competitors charge?", "What's our positioning?", "What claims can we make?"

### What to produce

Phase 0 produces a knowledge base organized into reference files by domain. A main index file maps tasks to the relevant reference files.

| Reference file | What it captures | Used by |
|----------------|-----------------|---------|
| **Product features** | Architecture, capabilities (live vs. roadmap), full workflow, USPs, pricing tiers, integrations, proven results, what the product is NOT | Phase 2 (conversion model, page map), Phase 4 (feature sections, pricing page, how-it-works) |
| **Target audiences** | 3-5 segments with profile, pain, trigger moments, core message, messaging angle | Phase 1 (tone by context), Phase 2 (content repetition), Phase 4 (every page brief) |
| **Brand strategy** | Vision, mission, values, brand story, archetype, market position, personality, messaging framework (by awareness level), voice and tone rules, humor rules | Phase 1 (brand voice is extracted from this), Phase 4 (copy tone per page) |
| **Competitive landscape** | Competitor matrix (pricing, key weakness), competitive messaging angles, naming guidance by channel | Phase 2 (comparison pages), Phase 4 (comparison briefs, pricing anchoring) |
| **Visual identity** | Color palette (tokens + hex), gradients, typography (headings/body/code), logo rules | Phase 3 (design rules reference this directly) |
| **User journey** | Broad flow, step-by-step workflow, example flows (first-time user, full research-to-test cycle) | Phase 2 (user journey section), Phase 4 (how-it-works, demo page) |
| **Investor narrative** (optional) | Pitch arc, metrics framing, defensibility/MOAT, GTM strategy, use of funds, investor profiles, outreach templates, objection handling | Not directly used by website phases, but informs about-us, pricing confidence, and proof points |

### Template: Main index file

```markdown
# {Product} — Brand & Product Knowledge Base

## Quick Reference
- **What it is:** {one sentence}
- **Positioning:** {one sentence}
- **One-liner:** {one sentence}
- **Tagline:** {2-4 words}
- **Category:** {market category}
- **Core tension:** {the fundamental problem, 1-2 sentences}

## Reference Files
| Task | Read |
|------|------|
| Writing copy | brand-strategy + audiences |
| Product questions | product-features |
| User flows | user-journey |
| Competitive comparisons | competitors |
| Design assets | visual-identity |

## Pre-Approved Claims
{List every stat/claim that can be used in marketing, with qualifiers}

## Voice Guardrails
{Banned words, villain framing, hero framing, humor rules — always active}
```

### Template: Audiences file

```markdown
# Target Audiences

## Segment 1: {Name} (Primary)
- **Profile:** {who they are, company size, tools they use}
- **Pain:** {what frustrates them, 1-2 sentences}
- **Trigger moments:** {when they start looking for a solution}
- **Message:** {the one line that speaks to this segment}
- **Messaging angle:** {how to frame the pitch for this audience}

## Segment 2: {Name}
...

## Geographic Focus
{Primary markets, language, localization notes}
```

### Template: Brand strategy file

```markdown
# Brand Strategy

## Vision
{Where the world is heading, 1-2 sentences}

## Mission
{What the company does to get there, 1-2 sentences}

## Values
### 1. {Value name}
{What it means and how it governs decisions, 2-3 sentences}

## Brand Story
{The narrative arc: problem > insight > founding moment > solution, 4-6 paragraphs}

## Brand Identity
- **Archetype:** {primary + secondary}
- **Market position:** {challenger/innovator/leader + where each framing is used}
- **Personality:** {2-3 traits with explanation}
- **Brand relationship:** {how the product relates to the user}

## Messaging Framework
### Core tension
{Surface in every piece, 1-2 sentences}

### By awareness level
{3-6 messaging angles, each with: the hook, when to use it, which audience segments}

## Voice & Tone
- **Writing rules:** {DO list + DON'T list}
- **Humor rules:** {when/how humor is used}
- **Tone by context:** {table: channel → tone description}
```

### Template: Competitors file

```markdown
# Competitive Landscape

## Competitor Overview
| Competitor | Pricing | Key Weakness |
|------------|---------|--------------|
| {name} | {price} | {vs your product} |

## Competitive Messaging Angles
{Per-competitor or per-category: the one-line framing to use}

## Why {Product} Wins
{The structural advantage, not feature-by-feature, 1 paragraph}

## Naming Guidance
| Channel | Name directly? | Guidance |
|---------|---------------|----------|
| Comparison pages | Yes | {why} |
| Paid social | No | {why} |
```

### Template: Product features file

```markdown
# Product Features

## Architecture
{High-level: what layers/modules exist, 2-3 sentences}

## {Layer 1 Name}
### {Feature}
- {What it does}
- **Status:** Live / Roadmap / In pipeline

## The Full Workflow
{Numbered steps from entry to outcome}

## USPs
{3-7 unique selling propositions, each: headline + 1-2 sentences}

## Pricing
| Tier | Price | Limits |
|------|-------|--------|

## Integrations
{Platforms, analytics, CRM, etc.}

## What {Product} Is NOT
{5-6 clarifying statements}
```

### How Phase 0 feeds into later phases

- **Phase 1 (Brand Voice)** is a compact extraction of the brand strategy file's voice section + the guardrails from the main index. Phase 0 is the full context; Phase 1 is the enforced subset.
- **Phase 2 (Website Strategy)** uses audiences (to decide page map and funnel stages), product features (to decide conversion paths), and competitors (to plan comparison pages).
- **Phase 3 (Page Design Rules)** uses visual identity for color/typography constraints.
- **Phase 4 (Page Briefs)** draws from all Phase 0 files: audiences determine which pain points each page addresses, product features provide the content for feature/how-it-works sections, competitors feed comparison pages, and the messaging framework shapes every headline.
- **Phase 5 (Website Audit)** validates that claims match the pre-approved list and that brand voice rules are followed.

---

## Phase 1: Brand Voice

**File:** `.claude/rules/brand.md` (or `docs/brand.md`)
**When:** First. Everything else references this.
**Time:** 1-2 hours.

### What to define

| Section | What it captures | Example |
|---------|-----------------|---------|
| Voice archetype | 1-2 archetypes that define personality | Sage + Challenger |
| Adjectives | 4-6 words that describe the voice | Direct, data-backed, conversational, specific |
| Active/passive | Voice preference | Active voice always |
| Hero framing | Who is the hero of the copy | The user, not the product |
| Villain framing | What we're fighting against | Conditions (expensive tools, dev gatekeeping), never competitors |
| Banned words | Words that are off-limits | "revolutionary", "game-changing", "seamless", "robust", "leverage" |
| Style rules | Formatting constraints | No em-dashes. Use commas, periods, or colons instead. |
| Claims policy | How to handle stats and superlatives | Always qualify: "avg" or "up to". Never unsubstantiated superlatives. |
| Tone by context | How voice shifts by page type | Product UI: crisp. Marketing: confident. Blog: educational. Ads: direct. |

### Template

```markdown
# Brand Rules

## Voice
[Archetype]. [Adjectives].
- [Trait 1]
- [Trait 2]
- Make the user the hero, not the product
- The villain is [conditions], never competitors

## Banned Words
Never use: [list]

## Claims Policy
- Always qualify stats: "avg" or "up to"
- Never make unsubstantiated superlatives
- Reference source data when available
- No roadmap features presented as live

## Tone by Context
| Context | Tone |
|---------|------|
| Product UI | [adjectives] |
| Marketing | [adjectives] |
| Blog/SEO | [adjectives] |
| Ads | [adjectives] |
```

---

## Phase 2: Website Strategy

**File:** `docs/website-plan.md`
**When:** After brand voice. This is the master strategic document.
**Time:** 4-8 hours (the most important document).

### What to define

#### 2a. Conversion Model

Define every path a visitor can take to become a user. Most SaaS sites have 2-3 paths.

```markdown
## Conversion Model

| Path | Entry point | Gate | Who it's for | Risk |
|------|-------------|------|-------------- |------|
| Product-led (sandbox) | URL input / free trial | Gated after N actions | Curious visitors | Feature may break |
| Signup | CTA button | Registration form | Decided visitors | Friction |
| Sales-assisted | Demo booking | Calendar embed | Enterprise/agency | Slow |
```

**Critical decision:** Which pages use which conversion path? This depends on funnel stage:

| Funnel stage | CTA type | Example pages |
|--------------|----------|---------------|
| Awareness | Soft link (to deeper content) | Blog, changelog, about |
| Consideration | Product-led (sandbox/trial) | Homepage, features, comparison, vertical, how-it-works |
| Decision | Signup / purchase | Pricing, FAQ, case study |
| Enterprise | Sales-assisted (demo) | Demo page, enterprise pricing |

#### 2b. Page Map

List every page with its route, phase, funnel stage, and CTA type.

```markdown
## Page Map

| # | Page | Route | Phase | Funnel | CTA Type |
|---|------|-------|-------|--------|----------|
| 1 | Homepage | / | 1 | Consideration | Sandbox |
| 2 | Features | /features | 1 | Consideration | Sandbox |
| 3 | Pricing | /pricing | 1 | Decision | Signup |
| ... | ... | ... | ... | ... | ... |
```

**Phasing strategy:** Group pages by priority, not build order. Phase 1 = core funnel. Phase 2+ = supporting content.

#### 2c. Content Repetition Strategy

Identify 5-7 core messages that must appear across multiple pages. This is how visitors who hit 3-5 pages internalize your value prop.

```markdown
## Core Messages

| # | Message | Homepage | Features | Pricing | Comparison | Vertical |
|---|---------|----------|----------|---------|------------|----------|
| 1 | Research + execution in one tool | Hero | S2-S3 | - | S3 | S3 |
| 2 | Free to start | S7 | S7 | S1 | S6 | S1 |
| 3 | [Proof stat] conversion lift | S9 | S5 | S4 | S2 | S4 |
| 4 | No code / no developers | S7 | S4 | - | S3 | S3 |
| 5 | Competitor price anchoring | - | S7 | S1 | S2 | - |
| 6 | [Differentiation from alternative] | S11 | - | S5 | - | - |
| 7 | Works with any [platform] | S7 | S6 | - | S2 | S3 |
```

#### 2d. Cross-Linking Map

Define how pages reference each other. Every page should link to 2-4 other pages contextually.

```markdown
## Cross-Linking Map

| If visitor is on... | And wonders... | Link to... |
|---------------------|---------------|------------|
| Homepage | "Show me everything" | /features |
| Homepage | "How much?" | /pricing |
| Features | "Does it work with Shopify?" | /integrations |
| Comparison | "Show me proof" | /case-studies |
```

#### 2e. User Journey

Write 1-2 example journeys showing how a real visitor moves through the site over multiple sessions.

#### 2f. Homepage Section Plan

The homepage gets a detailed section-by-section plan because it's the hub of the site.

---

## Phase 3: Page Design Rules

**File:** `.claude/rules/page-design.md`
**When:** After website strategy. Defines visual patterns referenced by all page briefs.
**Time:** 2-3 hours.

### What to define

| Section | What it captures |
|---------|-----------------|
| Above the fold | H1 rules (word count, focus), CTA rules, hero visual (screenshot component), social proof placement |
| Page flow | Standard section order: Problem > Solution > Proof > Action |
| Visual hierarchy | Max font sizes, body text size, line heights, max reading width, accent color usage |
| Trust signals | Logo bar placement, testimonial rules (real names/photos/results), security badges |
| Scannability | Paragraph length, bullet/card preference, subheading frequency, bold key phrases |
| Whitespace | Section spacing, hero breathing room, related item grouping |
| Mobile | Column behavior, touch targets (44-48px), min text size (16px), headline max lines |
| Content density by page type | Awareness = punchy, comparison = detailed, PPC = match ad, blog = reading width |
| Page type rules | Landing (1 CTA, no nav), pricing (max tiers, highlight recommended), features (progressive disclosure), blog (reading width, inline CTAs) |
| Screenshot component | Variants with aspect ratios and use cases |
| Don'ts | No stock photos, no "Submit" buttons, no competing CTAs in one viewport |

### Template structure

```markdown
# Page Design Guidelines

## Above the Fold
- H1: under 8 words, outcome-focused
- 1-2 sentence subheadline
- One primary CTA with action verb
- Product screenshot using [component]
- Social proof snippet

## Page Flow
Problem → Solution → Proof → Action

## Visual Hierarchy
[rules]

## Page Type Rules
| Type | Rules |
|------|-------|
| Landing | [rules] |
| Pricing | [rules] |
| Features | [rules] |
| Blog | [rules] |

## [Screenshot Component] Variants
| Variant | Use case | Aspect ratio |
|---------|----------|--------------|
```

---

## Phase 4: Page Briefs

**Files:** `docs/briefs/{page-name}.md` and `docs/briefs/_{template-name}.md`
**When:** After strategy + design rules. The bulk of the writing work.
**Time:** 1-2 hours per brief. Templates cover multiple pages.

### Brief Schema (universal fields)

Every brief follows the same header structure:

```markdown
# {Page Name} Brief

| Field | Value |
|-------|-------|
| Route | /{route} |
| Phase | {1-6} |
| Status | New / Revise / Rebuild |
| Purpose | {1 sentence: what this page does} |
| Audience | {who visits, from where, funnel stage} |
| Primary conversion | {CTA type} via {mechanism} → {destination URL} |
| Secondary conversion | {fallback CTA} |
| Objections handled | {2-4 visitor questions this page answers} |
```

### Brief Schema (section spec)

Each section gets:

```markdown
## S{N}: {Section Name}

- **Component pattern:** {layout type: hero, card grid, alternating, metrics bar, etc.}
- **Heading:** "{exact copy}"
- **Subheading:** "{exact copy}" (if applicable)
- **Content:** {what goes here: N cards, N steps, comparison table, etc.}
- **Visual:** {screenshot variant, icon set, or "none"}
- **CTA:** {button text → destination} (if applicable)
```

### Brief Schema (footer fields)

```markdown
## Content Repetition Checklist
| Message | Section |
|---------|---------|
| {message 1} | S{N} |
| {message 2} | S{N} |

## Cross-Links
{page} → {page} (context)

## SEO
- Title: "{title}" (under 60 chars, "| {Brand}" suffix)
- Description: "{description}" (140-160 chars)
- Structured data: {types}
```

### Individual briefs vs. templates

- **Individual briefs** (homepage, features, pricing, FAQ, about, demo, changelog, integrations, solutions-hub, blog-hub, how-it-works): unique pages that each get their own brief file.
- **Templates** (prefixed with `_`): shared briefs for page types that have multiple instances. Each template defines the shared section structure and per-instance content variables.

| Template | Instances | Variable content |
|----------|-----------|-----------------|
| `_comparison-template.md` | /compare/vwo, /compare/optimizely, /compare/google-optimize | H1, competitor name, pricing, honest advantages, feature comparison rows |
| `_vertical-template.md` | /for/ecommerce, /for/saas, /for/agencies | H1, industry terms, pain points, solutions, metrics, use cases, URL placeholder |
| `_blog-template.md` | /blog/[slug] | Title, target keywords, content outline, Grona connection |
| `_case-study-template.md` | /case-studies/[slug] | Client name, industry, challenge, solution, results table, quote |

---

## Phase 5: Website Audit Playbook

**File:** `docs/website-audit.md`
**When:** After all briefs are written. Used during and after build.
**Time:** 2-3 hours.

### Audit Categories

| # | Category | What it checks | # of checks |
|---|----------|---------------|-------------|
| 1 | Pages | All routes exist, no placeholder content, page composition pattern, data separation | 4 |
| 2 | SEO Files | robots.txt, sitemap.xml, llms.txt, canonical URLs | 4 |
| 3 | SEO Metadata | Title, description, OG tags, Twitter card, keywords (per page) | 5 |
| 4 | Structured Data | Organization, WebSite, SoftwareApplication, FAQPage, HowTo, Article, Breadcrumbs | 7 |
| 5 | Performance | Core Web Vitals, image optimization, font loading, bundle size, static export | 5 |
| 6 | Favicon & Manifest | Favicon set, web app manifest | 2 |
| 7 | Tracking | Tag manager, tag inventory, dataLayer events, UTM handling | 4 |
| 8 | Conversion Tools | Calendar embed, chatbot, newsletter, contact form | 4 |
| 9 | GEO/AEO | Content structure for AI, FAQ for snippets, llms.txt, structured data | 4 |
| 10 | Accessibility | Heading hierarchy, alt text, color contrast, keyboard nav | 4 |
| 11 | 404 Recovery | Custom 404 with recovery paths | 1 |
| 12 | Cross-Page Consistency | Header nav, footer links, internal linking | 3 |

### Check format

Each check follows this structure:

```markdown
### {N.M}: {Check Name}
- **Check:** {what to inspect}
- **Pass:** {definition of done}
- **How:** {tool or command to verify}
- **Action if failing:** {specific fix}
```

---

## Implementation: From Docs to Code

Once the docs are complete, the codebase follows a strict architecture pattern. But before writing any page code, you need a design system with pre-built components and a catalog that maps them to page sections. This is what makes the build fast: you're assembling pages from validated building blocks, not designing from scratch.

### Setting up the design system

The Grona build used UntitledUI as the component library. The key insight: pull in all available example pages and marketing section components up front, then build a catalog file that indexes everything. This catalog becomes the single reference for page composition.

**What to pull in:**

1. **Example pages** (full page templates): Landing pages, about, blog, contact, FAQ, pricing, team, 404, legal. These show complete composition patterns: which sections in what order, with what spacing and background alternation.

2. **Marketing section components** (building blocks): Hero sections, feature sections, CTA sections, testimonials, pricing, FAQ, social proof, metrics, footers, newsletter CTAs, banners, content sections, team sections, career sections, contact sections, blog sections.

3. **Base UI components**: Buttons, inputs, checkboxes, forms, badges, dropdowns, tooltips, toggles, avatars, tags, progress indicators, etc.

**How many components:**

For reference, the Grona build had access to:
- 128 example pages across 10 page types
- 400+ marketing section variants across 15 categories
- 24 base UI component categories

You don't need this many. The minimum viable set:
- 3-5 example pages that match your most common page types
- Hero, features, CTA, testimonials, pricing, FAQ, footer sections (2-3 variants each)
- Buttons, inputs, forms, badges, icons

### The component catalog (split into two files)

The catalog is split across two files to preserve context window focus. One file is the inventory (what exists), the other is the workflow (how to use it). Loading both into a single file would create ~22KB competing for attention. Splitting them means the workflow instructions stay crisp and the inventory stays comprehensive.

**File 1: Component Inventory** (e.g., `grona-ai-components.md`, ~17KB)
**Purpose:** Complete index of every available building block. Read this to pick components.

Contents:
- Every example page with its section-by-section composition
- Every marketing section component with layout type, variant count, and naming pattern
- Every production page with its route, content file, and which example it was based on
- Naming conventions (e.g., "-brand" suffix = brand-colored background)

```markdown
# Component Catalog

## Example Pages
### Landing Pages — `src/examples/landing-page-XX`
- **01** — Hero(centered, screen mockup) → SocialProof → Features(3-col) → Testimonial → FAQ → Footer
- **02** — Hero(centered) → SocialProof → Features(alternating) → Integrations → Metrics → CTA → Footer
...

## Marketing Section Components (building blocks)
### Hero Sections — `src/components/marketing/header-section/`
{count} variants. Visual types: screen-mockup, card-mockup, split-image, simple-text, etc.

### Feature Sections — `src/components/marketing/features/`
{count} variants. Layouts: simple-icons, icon-cards, alternating-layout, tabs-mockup, etc.
...

## Production Pages
| Route | Content file | Based on |
|-------|-------------|----------|
| / | home-screen | Custom (landing-page-02 pattern) |
| /features | features-content | Custom |
| /pricing | pricing-content | pricing-page-05, heavily customized |
```

**File 2: Build Workflow** (e.g., `CLAUDE.md` at project root, ~5KB)
**Purpose:** How to build a page from the inventory. Read this to follow the process.

Contents:
- The 7-step page build workflow (read memory → pick reference → plan → install → build → source assets → verify)
- Page composition pattern (page.tsx wrapper code)
- Section layout pattern (container + centered intro code)
- Content data separation pattern (typed objects → JSX mapping)
- Reusable sub-components already in the codebase (ChatBubble, CheckItemText, FeaturedIcon, etc.)
- Tech stack (so it's not re-discovered each session)
- Existing assets directory listing
- Image sourcing rules

**Why the split matters for AI-assisted builds:** The inventory file is consulted during Step 1 (read spec docs) and Step 2 (pick reference example). The workflow file is consulted during Steps 3-7. Separating them means the AI loads only the relevant context for the current step, reducing confusion and hallucination.

**Key convention:** The "-brand" suffix on any component means it uses a brand-colored background. Numbered variants differ in layout density and visual elements.

### File structure per page

```
src/app/
├── {route}/
│   ├── page.tsx              # Thin wrapper: metadata + Header + Content + Footer
│   └── {route}-content.tsx   # Client component with sections and data
```

### File structure for templated pages (verticals, comparisons)

```
src/app/
├── for/
│   ├── vertical-content.tsx  # Shared component + interface (VerticalPageData)
│   ├── ecommerce/
│   │   ├── page.tsx          # Wrapper with metadata
│   │   └── data.ts           # Content implementing VerticalPageData
│   ├── saas/
│   │   ├── page.tsx
│   │   └── data.ts
│   └── agencies/
│       ├── page.tsx
│       └── data.ts
```

### Central navigation config

```
src/lib/
└── navigation.ts             # headerNav[] + footerNav[] — single source of truth
```

### Page composition pattern

Every page follows the same wrapper structure:

```tsx
// src/app/{route}/page.tsx
import Content from "./{route}-content";
import { FooterSection } from "@/app/homepage/footer-section";
import { HeaderWithNavigation as Header } from "@/components/marketing/header-navigation/header-with-navigation";

export const metadata = { title: "...", description: "..." };

export default function Page() {
    return (
        <div className="bg-primary">
            <Header isFloating />
            <Content />
            <FooterSection />
        </div>
    );
}
```

### Section layout pattern

Every section follows the same container structure:

```tsx
<section className="bg-primary py-16 md:py-24">
    <div className="mx-auto w-full max-w-container px-4 md:px-8">
        {/* Section intro (centered) */}
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
            <span className="text-sm font-semibold text-brand-secondary">Badge</span>
            <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Heading</h2>
            <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Subtext</p>
        </div>
        {/* Section content */}
    </div>
</section>
```

Background alternation between sections: `bg-primary` → `bg-secondary` → `bg-primary`. This creates visual pacing without explicit dividers.

### Content data separation pattern

Always separate repeating content from layout. Define data as typed arrays/objects at the top of the file, then map over them in JSX. Never hardcode repeating content inline.

```tsx
// Define data at file top
const features = [
    { icon: FileSearch02, title: "...", description: "..." },
    { icon: BarChart07, title: "...", description: "..." },
];

// Map in JSX
{features.map((feature) => (
    <FeatureCard key={feature.title} {...feature} />
))}
```

This separation makes content reviewable without reading JSX, and enables templated pages where the shared component stays the same but data files differ per instance.

---

## The 7-Step Page Build Workflow

This is the execution process for building each page. Every page follows these steps in order. The workflow enforces that no code is written until the plan is validated.

### Step 1: Read the spec documents

Before touching code, read (in this order):
1. The **component catalog** — know what building blocks exist
2. The **product knowledge base** (Phase 0) — know the product, audiences, claims
3. Any **page-specific brief** from `docs/briefs/`
4. The **page design rules** — know the visual constraints

Do not explore the codebase or search for components. The catalog has everything. Only explore if the task involves patterns not covered by the catalog.

### Step 2: Pick a reference example page

Match the page brief to the closest example page in the catalog. For instance:
- Homepage → `landing-page-02` (hero → social proof → features → integrations → metrics → CTA)
- Pricing → `pricing-page-05` (tier cards + comparison table)
- About → `about-page-10` (team-focused + recruiting)
- Contact → `contact-page-01` (form + sidebar)

Read that example file to see its full section structure. Copy section code directly instead of writing from scratch.

### Step 3: Create a section-by-section plan

Before writing any code, output a plan showing:

```markdown
| # | Section purpose | Component chosen | Background | Assets needed |
|---|----------------|-----------------|------------|---------------|
| S1 | Hero | header-centered-buttons | bg-primary | BrowserMockup(split) |
| S2 | Social proof | social-proof-full-width | bg-primary | Client logos |
| S3 | Features | features-tabs-mockup-01 | bg-secondary | Icon set |
| S4 | CTA | cta-simple-centered | bg-primary | None |
```

Note which components need installing vs. already exist. **Validate this plan against the brief** before proceeding. The brief says what goes on the page. The plan says how it maps to components.

### Step 4: Install missing components

For each section in the plan:
1. Check `src/components/marketing/` for existing components first
2. If a component is needed but not installed, install it from the design system
3. Only install what the plan requires. Do not install speculatively.

### Step 5: Build the content file

With the plan validated and components installed:
1. Create `page.tsx` using the page composition pattern
2. Create `{route}-content.tsx` marked `"use client"`
3. Define all content data as typed objects at the top of the file
4. Map content data into section components
5. Follow page-design.md for visual rhythm, spacing, and pacing
6. Check every heading, description, and CTA against the Phase 0 knowledge base for accuracy

### Step 6: Source images and assets

- Check existing assets (`public/assets/images/`) before downloading anything
- Use CDN sources for brand logos (e.g., Simple Icons) when available
- For product screenshots, use placeholder/mockup components until real images are ready
- Save new assets to `public/assets/images/{category}/`
- Process logos for brand consistency (strip fills, use currentColor)

### Step 7: Verify

1. **Build check:** Run the build command to confirm the page compiles without errors
2. **Template artifact check:** Search for placeholder text from the design system (template company names, fake stats, lorem ipsum)
3. **Brief compliance check:** Walk through each section in the brief and confirm it's implemented
4. **Cross-link check:** Verify the page is linked from navigation (header + footer) and from related pages
5. **Claims check:** Verify every stat and claim matches the pre-approved list from Phase 0

### Validation methodology: MD file integrity

The entire system depends on the integrity of the markdown spec files. If a brief has wrong content, the built page will have wrong content. If the brand rules have a gap, every page will have that gap.

**How validation was enforced in the Grona build:**

1. **Phase 0 was written first and validated independently.** Product features, audiences, brand strategy, and competitors were reviewed before any website planning began.

2. **Each phase was validated before the next started.** Brand voice was reviewed before writing the website strategy. The website strategy was reviewed before writing page briefs. Briefs were reviewed before building pages.

3. **Briefs were validated against the content repetition matrix.** Each brief's footer includes a "Content Repetition Checklist" showing which core messages appear in which sections. This was cross-checked against the master matrix in website-plan.md.

4. **Claims were validated against the pre-approved list.** Every stat, benchmark, and superlative in a brief was checked against the Phase 0 knowledge base. If a claim wasn't pre-approved, it was either added to the approved list with a source or removed.

5. **Built pages were validated against their briefs.** After building each page, the brief was walked through section by section to confirm nothing was missed, changed, or invented.

6. **Post-deployment phase audits caught drift.** After each phase of pages was deployed (e.g., Phase 1: homepage, features, pricing), a formal audit was run comparing every built page against three reference documents:
   - **website-plan.md** — Did the page follow the conversion model? Are the cross-links correct? Is the content repetition matrix honored?
   - **page-design.md** — Does the page follow the visual hierarchy rules? Is the page flow correct (Problem → Solution → Proof → Action)? Are page-type-specific rules met?
   - **The page's brief** — Is every section implemented? Is every heading, CTA, and content block present? Were any sections skipped, reworded, or invented?

   This audit consistently found issues: sections that were simplified during build, CTAs that linked to the wrong destination, cross-links that were promised in the brief but never wired, content that drifted from the approved copy. Each finding was corrected before moving to the next phase.

   **This is not optional.** Without post-phase audits, errors compound. A skipped section in Phase 1 becomes a missing cross-link in Phase 2 and a broken user journey by Phase 3. The audit-and-correct cycle between phases is what keeps the build on spec.

7. **Cross-page consistency was audited after the full build.** Navigation links, footer links, cross-links between pages, and content repetition across pages were all checked as a batch.

**The principle:** Errors caught in markdown are cheap. Errors caught in code are expensive. Errors caught after launch are very expensive. Push validation as early as possible in the pipeline.

---

## Document Creation Order (step by step)

This is the exact sequence to follow when starting from scratch.

### Pre-Week / Week 0: Product & Brand Knowledge Base

```
0. Build the knowledge base (Phase 0)
   - Product features: architecture, capabilities, workflow, USPs, pricing, integrations
   - Target audiences: 3-5 segments with profiles, pains, triggers, messages
   - Brand strategy: vision, mission, values, brand story, archetype, messaging framework, voice
   - Competitive landscape: competitor matrix, messaging angles, naming guidance
   - Visual identity: colors, typography, logo rules
   - User journey: broad flow, example flows
   - (Optional) Investor narrative: pitch arc, metrics, MOAT, GTM

   This can be a single document or a set of reference files.
   If the founders have already written this, collect and structure it.
   If not, interview them and produce it. This is the most important input.
```

### Week 1, Day 1: Design system setup

```
1. Select and install a component library (or build your own)
   - Pull in example pages for every page type you'll need
   - Pull in marketing section components (hero, features, CTA, testimonials, pricing, FAQ, footer, etc.)
   - Pull in base UI components (buttons, inputs, forms, badges, icons)

2. Build the component catalog (split across two files)
   - File 1 (inventory): Index every example page, marketing section, and base component
   - File 2 (workflow): 7-step build process, page/section/data patterns, reusable sub-components, tech stack
   - The split keeps AI context focused: inventory for picking components, workflow for assembling them
```

### Week 1, Day 1-2: Foundation docs

```
3. Write brand.md (extract from Phase 0 brand strategy)
   - Voice, banned words, claims policy, tone by context

4. Write website-plan.md (informed by Phase 0 audiences, product, competitors)
   - Conversion model (2-3 paths)
   - Page map (15-25 pages with routes, phases, funnel stages, CTA types)
   - Content repetition strategy (5-7 core messages)
   - Cross-linking map
   - 1-2 user journey examples
   - Homepage section plan
```

### Week 1, Day 2-3: Design rules + briefs start

```
5. Write page-design.md
   - Above the fold rules
   - Page flow pattern (Problem → Solution → Proof → Action)
   - Visual hierarchy
   - Page type rules (reference component catalog for available layouts)
   - Screenshot/mockup component variants
   - Mobile rules
   - Don'ts

6. Write brief templates (cover multiple pages each):
   - _comparison-template.md (with per-competitor variables)
   - _vertical-template.md (with per-industry variables)
   - _blog-template.md (with content priority list)
   - _case-study-template.md (with per-client variables)
```

### Week 1, Day 3-5: Page briefs

```
7. Write individual briefs (highest-traffic pages first):
   - homepage.md
   - features.md
   - pricing.md
   - how-it-works.md
   - faq.md
   - integrations.md
   - demo.md
   - about-us.md
   - solutions-hub.md
   - blog-hub.md
   - changelog.md

   Validate each brief against:
   - Content repetition matrix (are core messages placed correctly?)
   - Pre-approved claims list (are all stats sourced?)
   - Cross-linking map (does the brief reference the right related pages?)
```

### Week 1, Day 5: Quality framework

```
8. Write website-audit.md
   - 12 categories, 47 checks
   - Pass conditions for each
   - Specific actions if failing
```

### Week 2: Build (with audit gates between phases)

```
9. Build pages in phases, with an audit gate after each phase.

   PHASE 1 — Core funnel: homepage, features, pricing, how-it-works
   For each page: follow the 7-step workflow
      a. Read spec docs (catalog, Phase 0, brief, design rules)
      b. Pick reference example page
      c. Create section plan, validate against brief
      d. Install missing components
      e. Build content file with data separation
      f. Source images and assets
      g. Verify (build, template artifacts, brief compliance, cross-links, claims)

   >>> AUDIT GATE 1: Audit Phase 1 pages against website-plan.md, page-design.md, and each page's brief.
       Walk through every section of every brief. Flag anything skipped, changed, or invented.
       Fix all findings before proceeding.

   PHASE 2 — Comparison pages, verticals, FAQ, integrations
   For each page: follow the 7-step workflow (same steps a-g)

   >>> AUDIT GATE 2: Audit Phase 2 pages against specs.
       Additionally, check cross-links between Phase 1 and Phase 2 pages (e.g., features → integrations, pricing → FAQ).
       Fix all findings before proceeding.

   PHASE 3 — About, demo, blog, case studies, changelog, solutions hub
   For each page: follow the 7-step workflow (same steps a-g)

   >>> AUDIT GATE 3: Audit Phase 3 pages. Check content repetition matrix: are all 5-7 core messages
       placed in the correct sections across all pages?
       Fix all findings before proceeding.

   PHASE 4 — Supporting pages: contact, 404, privacy, terms
   For each page: follow the 7-step workflow (same steps a-g)

   Central navigation config from day 1 — add every route as it's built.
   Run build after every 2-3 pages to catch errors early.

10. Run full site audit
    - Execute website-audit.md against the complete site (all 12 categories, 47 checks)
    - Fix all critical/high items before launch
    - Cross-page consistency check: nav, footer, internal links, content repetition
    - This is on top of the per-phase audits — it catches issues that only appear when all pages exist together
```

**What the audit gates catch (from the Grona build):**

Common issues found during post-phase audits:
- Sections simplified or condensed during build (e.g., 4-card grid reduced to 3)
- CTAs linking to wrong destinations or using wrong CTA type for the funnel stage
- Cross-links promised in the brief but never wired (e.g., "See pricing →" without an actual link)
- Copy that drifted from approved brief text (paraphrased headings, missing qualifiers on stats)
- Content repetition gaps (a core message that should appear on 4 pages but only appears on 2)
- Navigation not updated (page built but not added to header dropdown or footer)
- Template artifacts surviving in customized sections (placeholder names, fake stats)

### Pattern: Adding a new page (post-launch)

1. Write a brief following the brief schema
2. Follow the 7-step build workflow
3. Add route to `navigation.ts` (header dropdown + footer column)
4. Add route to sitemap
5. Update related pages (hub pages, homepage sections) if applicable
6. Run audit checklist against the new page

### Pattern: Adding a new templated page (e.g., new vertical)

1. Write a data file implementing the shared interface (e.g., `VerticalPageData`)
2. Create a thin `page.tsx` wrapper with metadata
3. Import data in the shared content component, add to the data map
4. Add to `navigation.ts` (header dropdown + footer column)
5. Add card to the relevant hub page
6. Update homepage section if applicable

---

## Grona Build: What Was Produced

For reference, the Grona build produced the following document set:

```
Phase 0 — Product & Brand Knowledge Base (written by founders):
├── skill.md (main index)       # Quick reference, workflows, claims, guardrails, content length, output examples, founders
├── audiences.md                # 5 segments: E-commerce, SaaS, Performance Marketers, Agencies, SMB Owners
├── brand-strategy.md           # Vision, mission, values, brand story, archetype, messaging framework, voice & tone
├── competitors.md              # 8 competitors, messaging angles, naming guidance by channel
├── investor-narrative.md       # Pitch arc, metrics, MOAT, GTM, use of funds, investor profiles, outreach, objections
├── product-features.md         # Architecture, research/execution layers, workflow, USPs, pricing, integrations, roadmap
├── visual-identity.md          # Color palette, gradients, typography, logo rules
└── user-journey.md             # Broad flow, first-time user example, full research-to-test cycle

Phase 1-5 — Website Spec (produced from Phase 0):
.claude/rules/
├── brand.md                    # Voice, banned words, claims, tone (extracted from brand-strategy.md)
└── page-design.md              # Visual hierarchy, components, page type rules

docs/
├── website-plan.md             # 695 lines: conversion model, 19-page map, content repetition, cross-links, user journeys, homepage plan
├── website-audit.md            # 385 lines: 12 categories, 47 checks with pass conditions
├── features-page-plan.md       # Page-specific rebuild plan (current → new mapping)
└── briefs/
    ├── homepage.md             # 13 sections (S1-S13)
    ├── features.md             # 7 sections
    ├── pricing.md              # 6 sections
    ├── how-it-works.md         # 5 sections
    ├── faq.md                  # 3 sections
    ├── integrations.md         # 5 sections
    ├── demo.md                 # 4 sections
    ├── about-us.md             # 5 sections
    ├── solutions-hub.md        # 3 sections
    ├── blog-hub.md             # 4 sections
    ├── case-studies-hub.md     # 3 sections
    ├── changelog.md            # 3 sections
    ├── _comparison-template.md # 6 sections, 3 instances (VWO, Optimizely, Google Optimize)
    ├── _vertical-template.md   # 6 sections, 3 instances (E-commerce, SaaS, Agencies)
    ├── _blog-template.md       # 6 sections, 8 planned posts
    └── _case-study-template.md # 7 sections, 1 live instance (MouthShield)
```

Design system (UntitledUI):
├── src/examples/                       # 128 example pages (10 page types × 10-20 variants)
├── src/components/marketing/           # 400+ marketing section components across 15 categories
└── src/components/base/                # 24 base UI component categories

Component catalog (split into two files for context window management):
├── grona-ai-components.md (inventory)  # 17KB — what exists: all examples, sections, production pages, naming conventions
└── CLAUDE.md (workflow)                # 5KB — how to build: 7-step process, patterns, sub-components, tech stack, assets

Design rules:
└── .claude/rules/page-design.md        # Visual hierarchy, page flow, page type rules, mockup variants
```

**Result:** 19 pages + 4 supporting pages (privacy, terms, contact, 404), fully cross-linked, with centralized navigation, templated architecture for repeating page types, and a reusable audit checklist. All built from a Phase 0 knowledge base that the founders had already written, using a pre-cataloged design system with 128 example pages and 400+ section components as building blocks.
