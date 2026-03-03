# Features
> Route: `/features` | Phase: 1 | Action: Rebuild
> Design ref: [page-design.md](../../.claude/rules/page-design.md) | Strategy ref: [website-plan.md](../website-plan.md) | Detail: [features-page-plan.md](../features-page-plan.md)

## Purpose
Convert curiosity into product confidence. The "show me everything" page. Homepage sells the concept, Features sells the product.

## Audience & Funnel Stage
- **Who**: Visitors who clicked "Features" from homepage or nav. Already interested, want depth.
- **How they arrive**: Homepage >> Features (primary), Comparison page >> Features (for depth), direct nav
- **Mindset**: "Show me what it actually does."
- **Funnel**: Consideration

## Primary Conversion
- **Path**: Sandbox
- **Mechanism**: URL input at bottom of page
- **Destination**: `app.grona.ai/try/edit/newCampaign?url={encodedUrl}`
- **Secondary**: "See Pricing" link >> `/pricing`

## Objections This Page Handles
| Objection | Where handled |
|---|---|
| "What can it do?" | 7 feature cards with specifics |
| "Can it do what I need?" | Research (4 capabilities) + Optimize (3 capabilities) |
| "How is this different?" | Bottom CTA with competitor price anchoring |
| "Is the research useful?" | "What a $2K-$5K CRO audit would find, in minutes" |

---

## Sections

### S1: Hero
**Job**: Set expectations for the page. Reinforce the dual nature (research + execution).
**Spec**:
- H1: capability-focused but concise
- Subheadline framing the two layers
- No CTA in hero (the page IS the CTA buildup)
**Key lines**:
- H1: "Everything you need to optimize"
- Sub: "Research what to change. Then change it. All from one chat interface."
**Design**: Feature page hero per page-design.md: "Progressive disclosure, overview first, then detail."

---

### S2: Research Layer (4 capabilities)
**Job**: Demonstrate the research half. Show capabilities competitors don't have.
**Spec**:
- 4 feature cards, each with:
  - Icon
  - Feature name
  - 2-3 sentence description with specific details
  - Screenshot or BrowserMockup
- Capabilities:
  1. **Competitive Research**: Analyze competitor websites, messaging, offers, CTAs
  2. **Traffic & Ad Intelligence**: SimilarWeb data, Google Ads spend, keyword strategies
  3. **Projected Heatmaps**: AI-generated attention maps showing where visitors look
  4. **Business Analysis**: Industry benchmarks, conversion rate context, recommendations
**Key lines**:
- Section head: "Understand your market"
- Research sub: "What a $2K-$5K CRO audit would find, in minutes"
**Mockup**: `<BrowserMockup variant="dashboard" />` for each capability
**CTA**: "Try it on your site" URL input or "See how it works" >> `/how-it-works`
**Design**: Two-column layout: benefit text + screenshot, alternating sides per page-design.md feature page rules.

---

### S3: Optimize Layer (3 capabilities)
**Job**: Demonstrate the execution half. Show the chat-to-live-test workflow.
**Spec**:
- 3 feature cards:
  1. **Chat-Based Live Editor**: Edit your website through conversation. See changes in real time.
  2. **Variation Creation**: Create headline, CTA, and layout variations via chat or by selecting elements directly in the browser
  3. **A/B Testing & Tracking**: Deploy split tests, track conversions, get statistical confidence
**Key lines**:
- Section head: "Act on what you learn"
- Editor sub: "Edit through conversation or point-and-click. No code."
**Mockup**: `<BrowserMockup variant="split" />` for editor, `<BrowserMockup variant="dashboard" />` for tracking
**CTA**: "See it in action" URL input
**Design**: Same two-column alternating layout as S2.

---

### S4: The Full Loop
**Job**: Show Grona isn't a point solution but a continuous optimization cycle.
**Spec**:
- 5-step workflow visualization: Paste URL >> Research >> Create Variation >> Preview >> Go Live >> Repeat
- Emphasizes the loop (not linear, cyclical)
- This justifies ongoing subscription vs one-time use
**Key lines**:
- Section head: "The full optimization loop"
- Sub: "Not a one-time audit. A continuous cycle that compounds."
**Design**: Circular or looping diagram. Steps as connected nodes. Horizontal scroll on mobile if needed.

---

### S5: Results & Benchmarks
**Job**: Prove the features deliver outcomes.
**Spec**:
- Hero metric: "Up to 40% conversion lift"
- Benchmark table by industry: SaaS +25%, B2B Lead Gen +25%, Travel +24%, E-commerce +18%
- Link to case study for proof
**Key lines**:
- Metric: "Up to 40% conversion lift"
- Sub: "Real results from real businesses"
- Link: "See the MouthShield case study" >> `/case-studies/mouthshield`
**Design**: Large number as visual anchor (size contrast). Table or card grid for benchmarks.

---

### S6: Integrations Preview
**Job**: Remove "does it work with my stack" objection.
**Spec**:
- Platform logo grid: Shopify, WordPress, Webflow, Wix, GA4, GTM, etc.
- One line: "One snippet. Any platform."
- Link to full integrations page
**Key lines**:
- Label: "Works with your stack"
- Link: "See all integrations" >> `/integrations`
**Design**: Compact logo bar. Not a full section, more of a trust strip.

---

### S7: Final CTA with Price Anchoring
**Job**: Convert after the feature showcase. Use competitor pricing to make Grona feel like a no-brainer.
**Spec**:
- Competitor price anchoring:
  - VWO: $199/mo
  - Optimizely: $36K/yr
  - CRO agencies: $3K-$10K/mo
  - Grona: Free to start
- URL input field for sandbox
- Secondary: "See Pricing" link
**Key lines**:
- Headline: "All of this. Free to start."
- Price anchoring: "VWO costs $199/mo. Optimizely starts at $36K/yr. Agencies charge $3K-$10K/mo."
- CTA input placeholder: "Enter your website URL"
- Secondary: "See pricing plans" >> `/pricing`
**Design**: Contrasting background. URL input prominent. Price comparison as small text above or below the input, not competing with it.

---

## Content Repetition Checklist
- [x] Research + Execution >> Entire page structure: S2 = Research, S3 = Optimize, S4 = Full Loop
- [x] Free to start >> Final CTA "Free to start" (S7)
- [x] 40% lift >> Results section hero metric (S5)
- [x] No code >> Chat-Based Editor card: "Edit through conversation, not code" (S3)
- [x] Competitor pricing >> Final CTA price anchoring (S7)
- [x] ChatGPT differentiation >> Implicit: screenshots show capabilities ChatGPT can't do
- [x] Works with any CMS >> Integrations preview (S6)

## Cross-Links
| Visitor might ask... | Link to |
|---|---|
| "How much?" | `/pricing` |
| "Walk me through it" | `/how-it-works` |
| "vs VWO specifically?" | `/compare/vwo` |
| "What platforms?" | `/integrations` |
| "Prove it works" | `/case-studies/mouthshield` |

## SEO
- **Title**: "Grona Features: AI Research, Live Editing, and A/B Testing"
- **Description**: "Competitive research, projected heatmaps, chat-based editing, and automated A/B testing. Everything you need to optimize your website, in one platform."
- **Structured data**: SoftwareApplication (features list)

## Design Notes (from page-design.md)
- Feature page: progressive disclosure, overview first, then detail
- Two-column: benefit + screenshot, alternating sides
- End each feature section with a relevant CTA
- `<BrowserMockup>` variants: `dashboard` for research capabilities, `split` for editor/chat views
- Max 4 font sizes. Body 16-18px, line-height 1.5-1.6
- Repeat CTA after each major persuasion section (after Research, after Optimize, final)
