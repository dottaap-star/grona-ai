# Vertical Page Template
> Routes: `/for/ecommerce`, `/for/saas` | Phase: 3 | Action: New
> Design ref: [page-design.md](../../.claude/rules/page-design.md) | Strategy ref: [website-plan.md](../website-plan.md)

## Purpose
Speak to specific industries in their language with their pain points, metrics, and workflows. Generic messaging converts poorly in paid ads. Message match between ad and landing page is the single biggest driver of paid conversion rates.

## Audience & Funnel Stage
- **Who**: Industry-specific visitors, often from paid ads
- **How they arrive**: Google Ads ("shopify conversion optimization", "saas landing page testing"), Solutions hub, homepage use case cards
- **Mindset**: "Does this work for MY type of business?"
- **Funnel**: Awareness to consideration

## Primary Conversion
- **Path**: Sandbox
- **Mechanism**: Industry-specific URL input
- **Destination**: `app.grona.ai/try/edit/newCampaign?url={encodedUrl}`
- **Secondary**: "See Pricing" >> `/pricing`

## Per-Page Content

### For E-commerce (`/for/ecommerce`)
- **Audience**: Shopify/WooCommerce owners, 10K-500K visitors, $50K-$5M rev, 1-10 team
- **Pain**: Low add-to-cart, high cart abandonment, no CRO agency budget, no developer
- **Value**: Analyze product pages, compare competitor stores, generate better headlines/CTAs, test live
- **Anchor claim**: "Up to 18% conversion lift for e-commerce"
- **H1**: "Turn more visitors into buyers"
- **Sub**: "AI-powered product page optimization for e-commerce teams. No developer needed."
- **Input placeholder**: "Paste your Shopify store URL"
- **Industry terms**: product pages, add-to-cart, checkout, AOV, cart abandonment, Shopify, WooCommerce
- **Case study tie-in**: MouthShield (DTC, +40% lift on product page) is directly relevant
- **SEO title**: "AI A/B Testing for E-commerce: Optimize Product Pages Without Code"

### For SaaS (`/for/saas`)
- **Audience**: Seed to Series B, landing pages as primary acquisition, marketing team of 1-5
- **Pain**: Low trial signup rates, high pricing page bounce, can't iterate fast, dev bandwidth goes to product
- **Value**: Analyze competitor landing pages, generate better copy, test variations without engineering
- **Anchor claim**: "25% average conversion lift for SaaS"
- **H1**: "Convert more trials without engineering tickets"
- **Sub**: "AI-powered landing page optimization for SaaS marketing teams."
- **Input placeholder**: "Paste your landing page URL"
- **Industry terms**: trial signups, pricing page, landing page, conversion rate, CAC, demo requests
- **Case study tie-in**: Industry benchmark (SaaS +25%) but no SaaS-specific case study yet
- **SEO title**: "AI A/B Testing for SaaS: Optimize Landing Pages Without Developers"

---

## Shared Section Structure

### S1: Hero
**Job**: Immediate industry recognition. Visitor should think "this is built for me" within 3 seconds.
**Spec**:
- H1: industry-specific, outcome-focused, under 8 words
- Subheadline: mentions their specific workflow
- URL input with industry-specific placeholder
**Key lines**: [per-page, see above]
**Design**: Landing page style. PPC landing pages: "match ad specificity" per page-design.md content density rules.

---

### S2: Industry Pain Points
**Job**: Name the specific problems. Create recognition ("yes, that's exactly my problem").
**Spec**:
- 3-4 pain point cards with icons:
  - E-commerce: low add-to-cart, cart abandonment, no CRO budget, no dev
  - SaaS: low trial signup, pricing page bounce, slow iteration, dev bottleneck
- Each card: icon, pain headline, 1-2 sentences
**Key lines**:
- E-commerce: "Your product page converts at 2%. Your competitor's converts at 5%. You don't know why."
- SaaS: "Your landing page hasn't changed in 3 months because engineering is shipping product."

---

### S3: How Grona Solves Them
**Job**: Map Grona capabilities to their specific workflow.
**Spec**:
- 3-4 solution cards mapped to the pain points above:
  1. Research: Analyze your [store/landing pages] and competitors
  2. Recommend: AI identifies what to change and why
  3. Edit: Chat to make changes, no code
  4. Test: Deploy A/B test, track [add-to-cart/trial signups]
- Each card has BrowserMockup showing relevant view
**Mockup**: `<BrowserMockup variant="split" />` for editing, `<BrowserMockup variant="dashboard" />` for analysis
**Design**: Two-column: solution + screenshot, alternating sides.

---

### S4: Industry Metrics
**Job**: Quantify expected results with industry-specific numbers.
**Spec**:
- Industry benchmark as hero metric
- Supporting stats (if available)
- Case study link (E-commerce: MouthShield directly; SaaS: industry benchmark with "case study coming soon" or link to general proof)
**Key lines**:
- E-commerce: "Up to 18% conversion lift for e-commerce. MouthShield saw 40% on their product page."
- SaaS: "25% average conversion lift for SaaS landing pages."

---

### S5: Use Cases Within Vertical
**Job**: Get specific about what they can optimize.
**Spec**:
- 3-4 specific use cases as cards:
  - E-commerce: Product page headlines, CTA buttons, checkout flow, hero images
  - SaaS: Homepage hero, pricing page layout, trial signup form, feature comparison
**Design**: Card grid. Short, scannable.

---

### S6: CTA
**Job**: Convert with an industry-specific prompt.
**Spec**:
- URL input with industry placeholder
- CTA reinforces "no risk, no code"
**Key lines**:
- E-commerce headline: "Start optimizing your store"
- SaaS headline: "Start optimizing your landing pages"
- Sub (both): "Free to start. No code required. Live test in minutes."
- Secondary: "See pricing" >> `/pricing`
**Destination**: `app.grona.ai/try/edit/newCampaign?url={encodedUrl}`

---

## Content Repetition Checklist
- [x] Research + Execution >> S3: "Research your competitors' [stores/pages], then optimize yours"
- [x] Free to start >> S6 CTA: "Free to start"
- [x] 40% lift >> S4 metrics (E-commerce: direct reference, SaaS: industry benchmark)
- [x] No code >> S1 hero sub, S3 editing card, S6 CTA
- [x] Competitor pricing >> S3 or S6: "Traditional [e-commerce CRO agencies/SaaS consultants] charge $3K-$10K/mo"
- [x] ChatGPT differentiation >> Implicit: showing execution, not advice
- [x] Works with any CMS >> E-commerce: "Works with Shopify" in S3. SaaS: general platform support.

## Cross-Links
| Visitor might ask... | Link to |
|---|---|
| "Prove it" | `/case-studies/mouthshield` (E-commerce) or `/case-studies` (SaaS) |
| "How does it work?" | `/how-it-works` |
| "My platform?" | `/integrations` |
| "How much?" | `/pricing` |

## SEO
- **Title**: [per-page, see above]
- **Description**: [per-page, industry-specific with primary claim]
- **Structured data**: SoftwareApplication, FAQPage (if FAQ added)

## Design Notes (from page-design.md)
- PPC landing page rules: match ad specificity, minimize navigation distractions
- Top-of-funnel/awareness pages: "fewer, punchier sections" per content density rules
- URL input placeholder must be industry-specific (increases engagement)
- `<BrowserMockup>` showing industry-relevant content (e-commerce product page, SaaS landing page)
- Mobile: single-column, CTA visible without scrolling, touch targets 44-48px
