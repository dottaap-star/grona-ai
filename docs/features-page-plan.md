# Features Page Rebuild Plan

> Saved from planning session, Feb 2026. Source brief: `grona-features-page-instructions.md`

## Goal
Replace the template-artifact-filled features page with a 7-section page that converts homepage curiosity into product confidence. Full rewrite of `grona-ai/src/app/features/features-content.tsx`.

---

## Current → New Section Mapping

| Current Section | Problem | New Section |
|---|---|---|
| `HeroScreenMockup01` — "Your AI research team" | Wrong positioning, Untitled mockup | Hero — "From research to live A/B test. All through chat." + real split-screen screenshot |
| `SocialProofFullWidthMasked` — "Trusted by 4,000+" | Fake claim | **Remove** |
| `FeaturesAlternatingLayout01` — 4 alternating cards | Untitled mockup images, needs restructure | Section 1: Grona Research (4 cards) + Section 2: Grona Optimize (3 cards) |
| `FeaturesIntegrationsIcons02` — 16 fake integrations | Fabricated | Section 4: Real integrations only (2 rows) |
| `MetricsSimpleCenteredText` — 400+/600%/10k | Fake stats | Section 5: Real 40% lift metric + benchmark table |
| `TestimonialSimpleCentered03` — 5 fake reviews | Template placeholders | **Remove** |
| `CTAScreenMockup01` — "Join 4,000+ startups" | Template text | Bottom CTA with competitor price anchoring |
| `FooterLarge02` (inline) | Duplicate | **Remove** — page.tsx already uses `FooterLarge01` |

**New:** Section 3: The Full Loop (8-step workflow, must custom build)

---

## Component Mapping

### Reuse from current features-content.tsx
- `ChatBubble` / `ChatExamples` (lines 214-228) — prompt pill components, load-bearing
- `CheckItemText` (lines 605-670) — bullet lists with check icons
- `AlternateImageMockup` (lines 197-212) — screenshot frame wrapper
- `FeaturedIcon` from `@/components/foundations/featured-icon/`

### Untitled UI patterns to leverage
- **features-alternating-layout** pattern → Section 1 & 2 card layouts
- **metrics-card-brand-dark** pattern → Section 5 hero metric
- **cta-simple-centered** pattern → Bottom CTA (simplified, add price anchoring)
- **header-centered-brand** pattern → section intro headers

### Must custom build
- **The Full Loop** (Section 3) — 8-step connected workflow with loop-back
- **Benchmark table** (Section 5) — 6-row industry comparison
- **Price anchoring list** (Bottom CTA) — 4 competitor prices
- **Integration logo grid** — 2 labeled rows with real platform logos

---

## Section-by-Section Spec Summary

### Hero
- Headline: "From research to live A/B test. All through chat."
- Subhead: per instructions doc
- CTA: "Get started free"
- Visual: real split-screen screenshot (placeholder until ready)
- Clean — no logo ticker, no trust badges

### Section 1: Grona Research (4 cards)
Badge "Research" + heading "Know What to Change"
1. **Website Analysis** — AI audits structure/copy/CTAs, "$2K-$5K CRO audit in minutes"
2. **Competitor Intelligence** — analyze any competitor's site
3. **Traffic Intelligence** — SimilarWeb-powered data
4. **Ads Intelligence** — Google Ads + Facebook Ads analysis

Each card: FeaturedIcon + heading + description + CheckItemText bullets + ChatExamples + screenshot

### Section 2: Grona Optimize (3 cards)
Badge "Optimize" + heading "Fix It in Minutes"
1. **Chat + Live Editor** — split-screen, editable through conversation (MOST IMPORTANT screenshot)
2. **AI Variation Generation** — AI writes new copy variants
3. **A/B Testing & Deployment** — traffic splitting, statistical significance

### Section 3: The Full Loop
"Research. Edit. Test. Learn. Repeat." — 8 numbered steps, step 8 loops to step 2-3

### Section 4: Integrations
"One script. Any website. No lock-in."
- Row 1 CMS: Shopify, WordPress, Webflow, Wix, WooCommerce, Elementor, GTM
- Row 2 Analytics: GA4, Clarity, HubSpot, Google Ads, Facebook Ads

### Section 5: Proof
- Hero metric: "40% lift on product page conversions"
- Benchmark table: SaaS +25%, B2B +25%, Travel +24%, Health +20%, E-commerce +18%, Financial +16%
- Qualifier text per instructions

### Bottom CTA
- "Your competitors are already optimizing. Start free."
- Price anchoring: VWO $199/mo, Optimizely $36K/yr, agencies $3K-$10K/mo, Grona free

---

## Screenshots Needed (7)
1. Hero: Split-screen interface
2. Website analysis output
3. Competitor comparison output
4. Traffic data output
5. Ads analysis output
6. Split-screen editor with visible change (most important)
7. Test results dashboard

## Content Rules
- Voice: Warm-Confident, Sage + Challenger
- Banned: "revolutionary", "game-changing", "cutting-edge", "disrupt", "powerful", "seamless", "robust"
- Villain = conditions (static websites, dev gatekeeping), never competitors
- Only pre-approved claims (see instructions doc)
- No roadmap features as live
