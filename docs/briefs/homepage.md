# Homepage
> Route: `/` | Phase: 1 | Action: Full rewrite
> Design ref: [page-design.md](../../.claude/rules/page-design.md) | Strategy ref: [website-plan.md](../website-plan.md)

## Purpose
First impression hub. Answer "what is this" in under 5 seconds. Give a zero-friction entry point (URL input). Every channel feeds here: paid ads, organic, referrals, direct, social.

## Audience & Funnel Stage
- **Who**: All visitor types. First-time visitors from any channel.
- **How they arrive**: Google Ads, organic search, referrals, social, direct
- **Mindset**: "What is this? Is it worth 60 seconds of my time?"
- **Funnel**: Awareness to consideration

## Primary Conversion
- **Path**: Sandbox (product-led)
- **Mechanism**: URL input field in hero
- **Destination**: `app.grona.ai/try/edit/newCampaign?url={encodedUrl}`
- **Secondary**: "Start Free" button in final CTA section >> `app.grona.ai/signup`

## Objections This Page Handles
| Objection | Where handled |
|---|---|
| "What is this?" | Hero headline + Two Pillars |
| "Why not just use ChatGPT?" | Product Demo (visual), FAQ (explicit) |
| "Does it work?" | Metrics bar + Case Study |
| "Worth my time?" | URL input in hero (paste and go, no signup) |

---

## Sections

### S1: Header
**Job**: Global navigation. Route visitors to any page in 1 click.
**Spec**: Expanded nav with dropdowns covering all 19 pages. "Book a Demo" as secondary CTA for enterprise visitors. Sticky, floating glass-morphism style (existing pattern).
**Key lines**:
- Primary CTA: "Start Free"
- Secondary CTA: "Book a Demo"
**Design**: Floating header with `isFloating` prop. See shared header component.

---

### S2: Hero
**Job**: Communicate the value prop in under 5 seconds and give an immediate action.
**Spec**:
- Badge announcing latest feature (e.g., "Screenshot-to-chat is live")
- H1: outcome-focused, under 8 words
- Subheadline: 1-2 sentences clarifying mechanism + audience
- URL input field with typewriter placeholder ("https://yourwebsite.com")
- Product screenshot below input showing chat + live editor split-screen
**Key lines**:
- H1: "From research to live A/B test. Just by chatting."
- Sub: "Paste your URL. Get competitor intel, AI-powered suggestions, and a live experiment on your site in minutes."
- Input placeholder: "https://yourwebsite.com" (typewriter animation)
**Mockup**: `<BrowserMockup variant="split" />`
**Design**: Full viewport height. Animated shimmer gradient background (existing). H1 line-height 1.1-1.2. Centered layout, max-w-4xl.

---

### S3: Social Proof
**Job**: Establish credibility immediately after the hero.
**Spec**:
- Logo bar of real clients/partners, or a single metric ("Trusted by X teams")
- If logos aren't available yet, use a metric bar: "X websites optimized" or "avg X% conversion lift"
**Key lines**:
- Label: "Trusted by growth teams at"
**Design**: Compact strip. Gray/muted logos. Tight spacing, no extra section padding. Page-design.md: "Logo bar immediately below the hero."

---

### S4: Two Pillars (Research + Optimize)
**Job**: Make the product concrete. Show Grona is TWO tools in one: research + execution.
**Spec**:
- Visual split: Research (left) and Optimize (right)
- Research side: competitor analysis, traffic data, projected heatmaps, ad intelligence
- Optimize side: chat-based editing, AI variations, live A/B testing
- Each pillar has 3-4 capability bullets with icons
**Key lines**:
- Section head: "Research what to change. Then change it."
- Research label: "Understand"
- Optimize label: "Act"
**Mockup**: Two `<BrowserMockup>` side by side. Research: `variant="dashboard"`. Optimize: `variant="split"`.
**CTA**: URL input or "See all features" >> `/features`
**Design**: Two-column on desktop, stacked on mobile. Alternating background to break from hero.

---

### S5: Product Demo
**Job**: Show the actual product. End the "is this real?" question.
**Spec**:
- Real product screenshots or animated GIF showing: paste URL >> research competitors >> chat or click to edit >> preview variation
- Alternatively, a short autoplay video (muted)
- Caption explaining what the visitor is seeing
**Key lines**:
- Section head: "See it in action"
- Caption: "Paste a URL. Research your market. Chat or click to create variations."
**Mockup**: `<BrowserMockup variant="split" />` (full width, larger than hero version)
**Design**: Full-width with generous whitespace above/below. This is the visual anchor of the page.

---

### S6: How It Works
**Job**: Make the process tangible. 4 sequential steps.
**Spec**:
- 4 steps with icons/numbers:
  1. Paste your URL
  2. Research your site + competitors
  3. Chat or click to create variations
  4. Preview, go live, and track results
- Abbreviated version linking to full `/how-it-works` page
**Key lines**:
- Section head: "Live A/B test in 5 minutes"
- Step 1: "Paste your URL"
- Step 2: "Research your market"
- Step 3: "Chat or click to create variations"
- Step 4: "Preview, go live, and track results"
- Link: "See the full walkthrough" >> `/how-it-works`
**Design**: Horizontal steps on desktop (numbered), vertical stack on mobile. Icons from @untitledui/icons.

---

### S7: Metrics Bar
**Job**: Quantify results. Shift from "sounds good" to "these are the numbers."
**Spec**:
- 3-4 key metrics in a horizontal bar
- Use real numbers with qualifiers ("avg" or "up to")
**Key lines**:
- "Up to 40% conversion lift"
- "Live test in 5 minutes"
- "Zero code required"
- "Works with any CMS"
**Design**: Full-width accent band. Large numbers, small labels. Tight section, no extra copy. Existing component likely reusable.

---

### S8: Use Cases
**Job**: Help visitors self-identify. "This is for people like me."
**Spec**:
- 3-4 use case cards: E-commerce, SaaS, Agency, Marketing Team
- Each card: icon, headline, 1-sentence description, link to vertical/solutions page
**Key lines**:
- Section head: "Built for teams that convert"
- E-commerce: "Optimize product pages and checkout flows"
- SaaS: "Test landing pages and pricing pages"
- Agency: "Run CRO for multiple clients"
**CTA**: Each card links to `/for/ecommerce`, `/for/saas`, or `/solutions`
**Design**: Card grid (2x2 or 1x4). Cards, not paragraphs. Icons to anchor attention.

---

### S9: Case Study / Testimonial
**Job**: Real proof with real numbers. Transform claim into evidence.
**Spec**:
- MouthShield case study data:
  - Client: MouthShield (DTC Oral Care)
  - Partner: King Edward First (SEO agency)
  - Result: +40% conversion lift (4.69% >> 6.6%)
  - Timeline: 10 days
  - Changes: Clearer CTA, fewer distractions, improved messaging
- Quote from Peter Lavelle, Co-director SEO, King Edward First
- Link to full case study
**Key lines**:
- Metric: "+40% conversion lift in 10 days"
- Quote: "We saw real, actionable results and I wouldn't hesitate to work with them again."
- Attribution: "Peter Lavelle, Co-director SEO, King Edward First"
- Link: "Read the full story" >> `/case-studies/mouthshield`
**Design**: Testimonial with real name, title, company. Page-design.md: "Testimonials after feature sections, with real names, photos, specific results."

---

### S10: ROI Calculator
**Job**: Make the value personal. Visitor calculates their own projected return.
**Spec**:
- Inputs: monthly visitors, current conversion rate, average order value (or lead value)
- Outputs: projected additional revenue with Grona's avg lift
- CTA button below calculator
**Key lines**:
- Section head: "Calculate your ROI"
- CTA: "Start your free optimization" >> `app.grona.ai/signup`
**Design**: Interactive component. Existing implementation. Add CTA button below results.

---

### S11: FAQ
**Job**: Handle remaining objections. Catch visitors who scroll past everything but still have doubts.
**Spec**:
- 5-7 questions covering:
  - "How does it work?" (link to /how-it-works)
  - "Is it really free?" (link to /pricing)
  - "Do I need a developer?" (no)
  - "Can't I just use ChatGPT?" (explicit differentiation)
  - "Will it slow down my site?" (no)
  - "What platforms does it work with?" (link to /integrations)
- Each answer links to relevant deep page
**Key lines**:
- ChatGPT answer: "ChatGPT gives advice. Grona executes: competitor research, live editing, A/B testing, and tracking. All from one chat."
**Design**: Accordion pattern. Page-design.md: "FAQ for objection handling."

---

### S12: Final CTA
**Job**: Last conversion opportunity. Catch visitors who scrolled the full page.
**Spec**:
- Strong headline reinforcing value
- "Start Free" button >> `app.grona.ai/signup`
- No URL input here (decision-stage visitors who scrolled this far are ready for signup, not sandbox)
**Key lines**:
- Headline: "Your website is leaving money on the table"
- Sub: "Find out how much. Start free, no credit card required."
- CTA: "Start Free" >> `app.grona.ai/signup`
**Design**: Extra breathing room. Brand accent on CTA. Contrasting background from preceding section.

---

### S13: Footer
**Job**: Site-wide navigation. Legal links. Trust signals.
**Spec**: Expanded footer with columns covering all 19 pages. See shared footer component.

---

## Content Repetition Checklist
- [x] Research + Execution >> Two Pillars section (S4), How It Works (S6)
- [x] Free to start >> Hero URL input (no signup), Final CTA ("no credit card")
- [x] 40% lift >> Metrics bar (S7), Case Study (S9)
- [x] No code >> Metrics bar (S7), How It Works (S6), FAQ (S11)
- [x] Competitor pricing >> Not on homepage (hits on Features/Pricing instead)
- [x] ChatGPT differentiation >> Product Demo implicit (S5), FAQ explicit (S11)
- [x] Works with any CMS >> Metrics bar (S7), FAQ (S11)

## Cross-Links
| Visitor might ask... | Link to |
|---|---|
| "More about features" | `/features` |
| "How much?" | `/pricing` |
| "Does it work?" | `/case-studies/mouthshield` |
| "How exactly?" | `/how-it-works` |
| "Want to talk" | `/demo` |
| "My industry?" | `/for/ecommerce` or `/for/saas` |

## SEO
- **Title**: "Grona: AI-Powered A/B Testing and CRO Platform"
- **Description**: "Paste your URL, get competitor research and AI suggestions, deploy a live A/B test in minutes. No code required. Start free."
- **Structured data**: Organization, WebSite, SoftwareApplication

## Design Notes (from page-design.md)
- H1 under 8 words, outcome-focused
- One primary CTA (URL input) visible above the fold
- `<BrowserMockup variant="split">` for product screenshots until real images provided
- Social proof immediately below hero
- Page flow: Problem (hero) >> Solution (Two Pillars + Demo) >> Proof (Metrics + Case Study) >> Action (CTA)
- Mobile: single-column stack, CTA visible without scrolling, 16px min body text
- No more than 3 content-heavy sections without a visual break (Metrics bar and Use Cases serve as breaks)
