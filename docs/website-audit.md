# Grona Website Audit Playbook

> Reusable audit for grona-ai (Next.js static export). Run against the codebase to produce actionable findings.
> Updated: 2026-03-02

## How to Use

Run this audit by reading this file and executing each section in order. For each item:
- **Check**: what to inspect (file, config, or URL)
- **Pass condition**: what "done" looks like
- **Output**: if not passing, produce a specific action item with file path and what to do

Produce a final report grouped by category with status (PASS / FAIL / PARTIAL) and action items.

---

## Audit Scope

**Repo**: `grona-ai/` (Next.js 16, static export)
**Domain**: grona.ai
**Pages in scope** (19):

| # | Page | Route | Phase |
|---|------|-------|-------|
| 1 | Homepage | `/` | 1 |
| 2 | Features | `/features` | 1 |
| 3 | Pricing | `/pricing` | 1 |
| 4 | Grona vs VWO | `/compare/vwo` | 2 |
| 5 | Grona vs Optimizely | `/compare/optimizely` | 2 |
| 6 | Google Optimize Alternative | `/compare/google-optimize` | 2 |
| 7 | For E-commerce | `/for/ecommerce` | 3 |
| 8 | For SaaS | `/for/saas` | 3 |
| 9 | Solutions Hub | `/solutions` | 3 |
| 10 | Case Study (hub) | `/case-studies` | 4 |
| 11 | Case Study (single) | `/case-studies/[slug]` | 4 |
| 12 | How It Works | `/how-it-works` | 4 |
| 13 | Blog (hub) | `/blog` | 5 |
| 14 | Blog (posts) | `/blog/[slug]` | 5 |
| 15 | Integrations | `/integrations` | 5 |
| 16 | Book a Demo | `/demo` | 6 |
| 17 | Changelog | `/changelog` | 6 |
| 18 | FAQ | `/faq` | 6 |
| 19 | About Us | `/about-us` | 6 |

**Supporting pages** (not in 19, but audit them):
- `/privacy`, `/terms` (legal)
- `/contact`
- 404 page (`not-found.tsx`)

---

## 1. Pages: Content & Structure

For each page in the 19-page scope:

### 1.1 Page exists
- **Check**: `src/app/{route}/page.tsx` exists
- **Pass**: file exists and renders without build errors
- **How**: `ls src/app/{route}/page.tsx` for each route, then `npx next build`

### 1.2 No template artifacts
- **Check**: grep each content file for placeholder content
- **How**: `grep -ri "untitled\|lorem\|placeholder\|4,000\|acme\|example\.com" src/app/`
- **Pass**: zero matches in production content files (ignore node_modules, examples/)

### 1.3 Page composition pattern
- **Check**: each page.tsx follows the standard pattern (Header + Content + Footer)
- **How**: read each page.tsx, confirm it imports Header, Content component, and FooterLarge01
- **Pass**: all pages use consistent layout wrapper

### 1.4 Content-data separation
- **Check**: content files define data as typed arrays/objects, not hardcoded inline
- **How**: read each content file, check for data-driven patterns (arrays mapped in JSX)
- **Pass**: repeating content (feature cards, FAQ items, pricing tiers) uses map pattern

---

## 2. SEO: Files & Indexing

### 2.1 robots.txt
- **Check**: `src/app/robots.ts` or `public/robots.txt` exists
- **Pass**: file exists, allows crawling of all public routes, disallows `/api/` and any private routes, includes sitemap reference
- **Action if missing**: create `src/app/robots.ts` using Next.js metadata API:
  ```ts
  // src/app/robots.ts
  import type { MetadataRoute } from "next";
  export default function robots(): MetadataRoute.Robots {
      return {
          rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
          sitemap: "https://grona.ai/sitemap.xml",
      };
  }
  ```

### 2.2 sitemap.xml
- **Check**: `src/app/sitemap.ts` or `public/sitemap.xml` exists
- **Pass**: lists all 19 pages + supporting pages with lastModified dates, correct priorities
- **Note**: Next.js static export can generate sitemap via `src/app/sitemap.ts` metadata API. All routes must be explicitly listed since there's no dynamic generation at runtime.

### 2.3 llms.txt
- **Check**: `public/llms.txt` exists
- **Pass**: file describes Grona for AI crawlers. Contains: product description, key pages, contact info. Follows llms.txt spec.

### 2.4 Canonical URLs
- **Check**: each page has a canonical URL via metadata or link tag
- **How**: check metadata exports for `alternates.canonical` field
- **Pass**: every page has a canonical pointing to its own URL. No duplicates (especially /solutions vs /features).

---

## 3. SEO: Metadata

For EVERY page (19 + supporting):

### 3.1 Title tag
- **Check**: `export const metadata` in page.tsx includes `title`
- **Pass**: unique, under 60 chars, includes brand ("| Grona" suffix), action/benefit-focused
- **Pattern**: `{Page-specific title} | Grona`

### 3.2 Meta description
- **Check**: metadata includes `description`
- **Pass**: unique per page, 140-160 chars, includes primary keyword, has a call-to-action or value prop

### 3.3 Open Graph tags
- **Check**: metadata includes `openGraph` object
- **Pass**: has `title`, `description`, `type` (website or article), `url`, `images` (1200x630), `siteName: "Grona"`
- **Note**: OG image should exist at the specified path in `public/`

### 3.4 Twitter card tags
- **Check**: metadata includes `twitter` object
- **Pass**: has `card: "summary_large_image"`, `title`, `description`, `images`

### 3.5 Keywords (blog posts only)
- **Check**: blog post metadata includes `keywords` array
- **Pass**: 5-10 relevant keywords per post

---

## 4. Structured Data (Schema.org JSON-LD)

### 4.1 Organization schema (site-wide)
- **Check**: layout.tsx or a shared component includes Organization JSON-LD
- **Pass**: includes `name`, `url`, `logo`, `sameAs` (social links), `contactPoint`

### 4.2 WebSite schema (homepage)
- **Check**: homepage includes WebSite JSON-LD
- **Pass**: includes `name`, `url`, `potentialAction` (SearchAction for URL input)

### 4.3 SoftwareApplication schema (homepage, features, pricing)
- **Check**: product pages include SoftwareApplication JSON-LD
- **Pass**: includes `name`, `applicationCategory`, `offers` (with pricing tiers), `operatingSystem: "Web"`

### 4.4 FAQPage schema (pages with FAQ sections)
- **Check**: pages with FAQ sections include FAQPage JSON-LD
- **Pass**: each Q&A pair is a `Question` entity with `acceptedAnswer`
- **Pages**: homepage, pricing, standalone FAQ, features (if FAQ added)

### 4.5 HowTo schema (/how-it-works)
- **Check**: how-it-works page includes HowTo JSON-LD
- **Pass**: steps match the page content, includes `name`, `step[]` with `text` and optional `image`

### 4.6 Article schema (blog posts)
- **Check**: blog posts include Article or BlogPosting JSON-LD
- **Pass**: includes `headline`, `author`, `datePublished`, `dateModified`, `image`, `publisher`

### 4.7 BreadcrumbList schema (all inner pages)
- **Check**: inner pages include BreadcrumbList JSON-LD
- **Pass**: reflects actual page hierarchy (Home > Features, Home > Blog > Post Title, etc.)

---

## 5. Performance

### 5.1 Core Web Vitals baseline
- **Check**: run Lighthouse on built output for homepage, features, pricing
- **How**: `npx next build && npx serve out` then Lighthouse audit, or use PageSpeed Insights on live site
- **Pass**: LCP < 2.5s, CLS < 0.1, INP < 200ms, Performance score > 90

### 5.2 Image optimization
- **Check**: all images use Next.js Image component or are properly optimized
- **How**: grep for `<img` tags (should be `<Image` from next/image). Check image formats (WebP/AVIF preferred). Check for explicit width/height or fill.
- **Pass**: no raw `<img>` tags in production components, all images have dimensions, lazy loading on below-fold images
- **Note**: next.config has `images.unoptimized: true` for static export. Images must be pre-optimized.

### 5.3 Font loading
- **Check**: all brand fonts loaded with proper strategy
- **How**: read layout.tsx, check font imports and `display` strategy
- **Pass**: fonts use `display: "swap"`, subset to "latin", loaded via next/font. Check which fonts are actually used vs declared in brand guidelines (Poppins, Inter, JetBrains Mono).
- **Note**: only load fonts actually used. Don't load all three if only one or two appear in the CSS.

### 5.4 Bundle analysis
- **Check**: no unnecessarily large client bundles
- **How**: `npx next build` and check output sizes. Look for pages over 200KB first-load JS.
- **Pass**: all pages under 200KB first-load JS

### 5.5 Static export verification
- **Check**: `npx next build` completes without errors, `out/` directory contains all expected HTML files
- **How**: `ls out/` after build, verify each route has an `index.html`
- **Pass**: all 19 pages + supporting pages generate static HTML

---

## 6. Favicon & App Manifest

### 6.1 Favicon set
- **Check**: favicon files exist locally (not remote URLs)
- **Pass**: `src/app/` contains `icon.svg` (or `favicon.ico`), `apple-icon.png` (180x180) using Next.js metadata file convention. Layout.tsx references local paths, not `https://grona.ai/...`
- **Rationale**: remote favicon URLs break in dev, cause extra DNS lookups in prod, and fail if CDN is down

### 6.2 Web app manifest
- **Check**: `src/app/manifest.ts` or `public/manifest.json` exists
- **Pass**: includes `name`, `short_name`, `icons` (192x192 + 512x512), `theme_color`, `background_color`, `display`

---

## 7. Tracking & Analytics (GTM-managed)

All tracking scripts are managed through GTM (`GTM-NXBH5J6M`). The audit checks that GTM is properly loaded and that required tags/triggers are documented.

### 7.1 GTM container loaded
- **Check**: layout.tsx includes `<GoogleTagManager>` component
- **Pass**: GTM ID is present, loaded on all pages via root layout
- **Current**: PASSING (GTM-NXBH5J6M in layout.tsx)

### 7.2 GTM tag inventory (external check)
The following tags should be configured in GTM. This is NOT checked in the codebase, it is verified in the GTM dashboard.

| Tag | Purpose | Trigger |
|-----|---------|---------|
| GA4 | Analytics | All pages |
| Google Ads Conversion | Ad conversion tracking | Signup/purchase events |
| Google Ads Remarketing | Audience building | All pages |
| Microsoft Clarity | Heatmaps + session replay | All pages |
| Facebook Pixel | FB/IG ad tracking + audiences | All pages + conversion events |
| LinkedIn Insight Tag | LinkedIn ad tracking + audiences | All pages + conversion events |

### 7.3 Dataayer events
- **Check**: key conversion points push events to GTM dataLayer
- **How**: grep for `dataLayer.push` or GTM event helpers in the codebase
- **Events required**:

| Event Name | Trigger Point | Purpose |
|------------|--------------|---------|
| `url_input_submit` | Homepage hero URL input | Primary conversion event |
| `cta_click` | Any CTA button | Track which CTAs convert |
| `pricing_tier_click` | Pricing page tier buttons | Track tier interest |
| `demo_booking_initiated` | Demo page form/calendar | Sales pipeline entry |
| `demo_booking_completed` | Cal.com confirmation | Sales pipeline conversion |
| `contact_form_submit` | Contact page form | Lead capture |
| `newsletter_signup` | Newsletter forms | Email list growth |
| `faq_expand` | FAQ accordion clicks | Content engagement |
| `blog_scroll_depth` | Blog posts (25/50/75/100%) | Content quality signal |
| `outbound_click` | Links to app.grona.ai | App handoff tracking |
| `comparison_table_view` | Comparison pages | Intent signal |

### 7.4 UTM parameter handling
- **Check**: UTM parameters are preserved through navigation and passed to app.grona.ai on handoff
- **How**: check if URL input or CTA links append UTM params from the current page URL
- **Pass**: UTMs from landing are forwarded to app.grona.ai signup

---

## 8. Conversion Tools

### 8.1 Cal.com integration
- **Check**: `/demo` page embeds Cal.com widget or links to booking page
- **Pass**: calendar loads, booking completes, confirmation is shown. Cal.com webhook or integration sends lead data somewhere trackable.

### 8.2 Website chatbot
- **Check**: chatbot widget loads on all pages (or specified pages)
- **Pass**: widget renders, doesn't block page interaction, doesn't hurt LCP, has Grona branding
- **Note**: document which chatbot solution is used and how it's loaded (GTM tag vs direct script vs component)

### 8.3 Newsletter signup
- **Check**: newsletter forms exist on blog and relevant pages
- **Pass**: form submits to an email platform (Resend, ConvertKit, etc.), confirmation shown to user
- **Note**: document which email platform is used. Forms must connect to something, not dead-end.

### 8.4 Contact form pipeline
- **Check**: contact form submissions go somewhere actionable
- **Pass**: submissions arrive in a CRM, shared inbox, or structured system. Not just a personal email.

---

## 9. GEO & AEO Readiness

### 9.1 Content structure for AI extraction
- **Check**: key pages use clear heading hierarchy (h1 > h2 > h3), structured lists, and definitive statements
- **How**: read each content file, verify heading levels are semantic (not just styled)
- **Pass**: each page has exactly one h1, logical h2/h3 hierarchy, key claims in scannable format

### 9.2 FAQ content for featured snippets
- **Check**: FAQ sections use question-answer format with clear, direct first sentences
- **Pass**: each answer starts with the direct answer (not a preamble), then elaborates. This is what Google and AI engines extract.

### 9.3 llms.txt (covered in 2.3)

### 9.4 Structured data (covered in section 4)
- **Note**: structured data is the technical foundation that makes GEO/AEO work. Sections 4.1-4.7 are prerequisites for GEO/AEO effectiveness.

---

## 10. Accessibility

### 10.1 Heading hierarchy
- **Check**: each page has one h1, logical h2/h3 flow
- **How**: grep for heading tags in each content file
- **Pass**: no skipped levels (h1 > h3 without h2), no multiple h1s

### 10.2 Image alt text
- **Check**: all images have descriptive alt text
- **How**: grep for Image or img components, check alt prop
- **Pass**: every image has alt text that describes the content (not "image" or empty string). Decorative images use `alt=""`  with `aria-hidden`.

### 10.3 Color contrast
- **Check**: text on brand backgrounds meets WCAG AA
- **How**: test primary text colors against bg-primary, bg-secondary, brand gradient backgrounds
- **Pass**: 4.5:1 ratio for normal text, 3:1 for large text

### 10.4 Keyboard navigation
- **Check**: full conversion flow works with keyboard only
- **How**: tab through homepage > features > pricing > CTA without mouse
- **Pass**: all interactive elements focusable, focus visible, no keyboard traps

---

## 11. 404 Recovery

### 11.1 Custom 404 content
- **Check**: `src/app/not-found.tsx` provides recovery paths
- **Pass**: includes search or popular links to core funnel pages (homepage, features, pricing), not just "go back" and "go home". Optionally includes URL input CTA.

---

## 12. Cross-Page Consistency

### 12.1 Header navigation
- **Check**: nav links are consistent and include all major pages
- **How**: read the Header component, check nav items
- **Pass**: nav includes at minimum: Features, Pricing, Blog, and a primary CTA. Dropdown or mega menu for Compare/For pages if those exist.

### 12.2 Footer links
- **Check**: footer includes comprehensive site links
- **How**: read FooterLarge01 component
- **Pass**: footer links organized by category (Product, Compare, Resources, Company, Legal). All 19 pages reachable from footer.

### 12.3 Internal linking
- **Check**: each page links to 2-4 related pages (not just via nav/footer)
- **How**: read content files, check for cross-page links in body content and CTAs
- **Pass**: contextual links within page content (e.g., features page links to how-it-works, comparison pages link to pricing)

---

## Output Format

After running all checks, produce a report in this format:

```
# Website Audit Report — grona.ai
> Date: {date}

## Summary
- Total checks: {n}
- Passing: {n}
- Failing: {n}
- Partial: {n}

## Action Items (Priority Order)

### Critical (blocks launch)
1. {action item with specific file path and what to do}

### High (affects SEO/conversion)
1. {action item}

### Medium (affects quality)
1. {action item}

### Low (polish)
1. {action item}

## Detailed Results
{per-section pass/fail with specifics}
```
