# Pricing
> Route: `/pricing` | Phase: 1 | Action: Revise
> Design ref: [page-design.md](../../.claude/rules/page-design.md) | Strategy ref: [website-plan.md](../website-plan.md)

## Purpose
Convert interest into action. Frame the purchase as an obvious decision. Job isn't just to show prices: make the free tier feel like a no-brainer and paid tiers feel like bargains against competitors.

## Audience & Funnel Stage
- **Who**: Visitors already sold on the concept, evaluating cost. Every visitor arrives here eventually.
- **How they arrive**: Features >> Pricing (primary), Homepage >> Pricing, Comparison >> Pricing
- **Mindset**: "How much does this cost? Is it worth it?"
- **Funnel**: Decision

## Primary Conversion
- **Path**: Signup
- **Mechanism**: Per-tier CTA buttons
- **Destination**: `app.grona.ai/signup` (all tiers except Enterprise)
- **Secondary**: "Try it first" URL input >> sandbox. Enterprise: "Talk to Sales" >> `/demo`

## Objections This Page Handles
| Objection | Where handled |
|---|---|
| "How much?" | Tier table |
| "Free tier?" | Starter: 1 campaign, 1,000 pageviews, free forever, no credit card |
| "Am I locked in?" | Free tier proves no commitment |
| "Worth $25/mo?" | Competitor price framing |
| "What if I outgrow it?" | Scale + Enterprise tiers |

---

## Sections

### S1: Hero
**Job**: Frame pricing as a value equation, not a cost table.
**Spec**:
- H1 that reframes the pricing conversation
- Subheadline with competitor price anchoring (so visitor arrives at cards pre-anchored)
- Toggle: monthly / annual pricing
**Key lines**:
- H1: "Start free. Scale when you're ready."
- Sub: "VWO starts at $199/mo. Optimizely at $36K/yr. Grona starts at $0."
**Design**: Pricing page per page-design.md: "Highlight one recommended tier."

---

### S2: Pricing Tiers
**Job**: Present options clearly. Drive toward Growth as the recommended tier.
**Spec**:
- 4 tiers:

| Tier | Monthly | Annual (2 months free) | Campaigns | Pageviews | CTA |
|---|---|---|---|---|---|
| Starter | Free | Free | 1 | 1,000 | "Start Free" >> signup |
| Growth (recommended) | $25/mo | $20.83/mo | 3 | 15,000 | "Start Free" >> signup |
| Scale | $40/mo | $33.33/mo | 10 | 30,000 | "Start Free" >> signup |
| Enterprise | Custom | Custom | Unlimited | Unlimited | "Talk to Sales" >> /demo |

- Growth tier visually highlighted as "Recommended"
- Each tier lists included features
- "No credit card required" under free tier
**Key lines**:
- Starter CTA: "Start Free"
- Growth CTA: "Start Free" (same, upgrades in-app)
- Enterprise CTA: "Talk to Sales"
- Under Starter: "No credit card. No time limit."
**Design**: Max 3-4 tiers per page-design.md. Growth highlighted with brand accent border/badge. Cards with consistent height.

---

### S3: Feature Comparison Table
**Job**: Detailed comparison for thorough buyers who want to see exactly what each tier includes.
**Spec**:
- Full feature comparison grid
- Categories: Research capabilities, Editing, Testing, Reporting, Support
- Checkmarks/limits per tier
**Design**: Scrollable on mobile. Sticky tier headers. Per page-design.md: "Feature comparison table below cards."

---

### S4: ROI Framing
**Job**: Reframe the price as an investment, not a cost.
**Spec**:
- Simple ROI math: "$25/mo for a tool that produced 40% conversion lift for an e-commerce brand"
- Link to case study
- Optional: mini calculator or "Calculate your ROI" link to homepage section
**Key lines**:
- "MouthShield saw a 40% conversion lift in 10 days. Their investment: one Grona subscription."
- Link: "Read the case study" >> `/case-studies/mouthshield`
**Design**: Callout/highlight box within the page, not a full section.

---

### S5: FAQ
**Job**: Handle pricing-specific objections.
**Spec**:
- 5-7 questions:
  - "Is the free tier really free?" (Yes. No credit card. No time limit.)
  - "Can I cancel anytime?" (Yes)
  - "What happens when I hit pageview limits?" (Test pauses, data preserved)
  - "Do I need to upgrade to see results?" (No, free tier includes full tracking)
  - "What's included in Enterprise?" (Unlimited everything + dedicated support)
  - "How does Grona compare to VWO pricing?" (link to /compare/vwo)
**Design**: Accordion. Per page-design.md: "FAQ for objection handling" on pricing pages.

---

### S6: Final CTA
**Job**: Last chance for visitors who scrolled past tiers.
**Spec**:
- "Try it first" URL input for visitors not ready to commit to signup
- Framed as low-risk alternative to choosing a tier
**Key lines**:
- Headline: "Not sure yet? Try it on your site first."
- Input placeholder: "Enter your website URL"
- Sub: "No signup required. See what Grona finds on your site in 2 minutes."
**Destination**: `app.grona.ai/try/edit/newCampaign?url={encodedUrl}`
**Design**: Softer CTA section. This is the safety net for visitors who stalled at tier selection.

---

## Content Repetition Checklist
- [x] Research + Execution >> Implied in feature comparison table (research + optimize features listed)
- [x] Free to start >> Starter tier, "no credit card, no time limit", hero sub
- [x] 40% lift >> ROI framing section (S4)
- [x] No code >> Feature comparison table row
- [x] Competitor pricing >> Hero subheadline, FAQ
- [ ] ChatGPT differentiation >> Not on this page (handled on Features/Homepage)
- [ ] Works with any CMS >> Not on this page (handled on Integrations/Features)

## Cross-Links
| Visitor might ask... | Link to |
|---|---|
| "What do I get?" | `/features` |
| "Show me proof" | `/case-studies/mouthshield` |
| "Want to talk" | `/demo` |
| "How does it compare to VWO?" | `/compare/vwo` |

## SEO
- **Title**: "Grona Pricing: Free A/B Testing, Paid Plans from $25/mo"
- **Description**: "Start free with 1 campaign and 1,000 pageviews. Upgrade to Growth for $25/mo ($20.83/mo annual). Compare against VWO ($199/mo) and Optimizely ($36K/yr)."
- **Structured data**: SoftwareApplication (offers/pricing)

## Design Notes (from page-design.md)
- Pricing page: highlight one recommended tier (Growth), max 3-4 tiers, feature comparison below cards, FAQ for objection handling
- Toggle for monthly/annual pricing
- Per-tier CTAs, not one CTA for all
- Competitor anchoring in hero sub so visitor sees cards pre-anchored
- Mobile: cards stack vertically, recommended tier first
