# Case Studies Hub
> Route: `/case-studies` | Phase: 4 | Action: New
> Design ref: [page-design.md](../../.claude/rules/page-design.md) | Strategy ref: [website-plan.md](../website-plan.md)

## Purpose
Index page for all case studies. Signals "we do this regularly" even with one entry. Hub exists to give structure and scalability. Design should work well with 1-3 entries and scale to more.

## Audience & Funnel Stage
- **Who**: Visitors looking for proof. Arrived from homepage testimonial, comparison pages, vertical pages, or nav.
- **How they arrive**: Cross-links from homepage, features, comparison, vertical pages
- **Mindset**: "Show me this works for real businesses."
- **Funnel**: Consideration

## Primary Conversion
- **Path**: Soft link (routes to individual case studies)
- **Mechanism**: Case study cards linking to `/case-studies/[slug]`
- **Secondary**: "Start Free" >> `app.grona.ai/signup` at bottom

---

## Sections

### S1: Hero
**Job**: Frame what this page offers.
**Spec**:
- H1: proof-focused
- Subheadline reinforcing real results
**Key lines**:
- H1: "Real results from real businesses"
- Sub: "See how teams use Grona to increase conversions."

---

### S2: Case Study Cards
**Job**: Present each case study as a clickable card with key metrics.
**Spec**:
- Card per case study:
  - **MouthShield**: "DTC Oral Care | +40% conversion lift | 10 days" >> `/case-studies/mouthshield`
- Each card: client industry tag, headline metric, 1-sentence summary, "Read case study" link
- Grid that works with 1-3 cards initially
**Design**: Card grid. Larger cards than Solutions hub (more content per card). Featured/latest card can be larger.

---

### S3: CTA
**Job**: Convert visitors convinced by the proof summaries.
**Spec**:
- "Start Free" CTA for visitors ready to act after seeing proof
**Key lines**:
- Headline: "Ready to see results like these?"
- CTA: "Start Free" >> `app.grona.ai/signup`
- Sub: "No credit card required."
**Design**: Simple, clean. Decision-stage visitors don't need another URL input.

---

## Content Repetition Checklist
- [ ] Research + Execution >> Implied in case study summaries
- [x] Free to start >> S3 CTA
- [x] 40% lift >> S2 MouthShield card metric
- [ ] No code >> Not primary on this page
- [ ] Competitor pricing >> Not on this page
- [ ] ChatGPT differentiation >> Not on this page
- [ ] Works with any CMS >> Not on this page

## Cross-Links
| Visitor might ask... | Link to |
|---|---|
| "Full story" | `/case-studies/mouthshield` |
| "I'm convinced, price?" | `/pricing` |
| "How do I start?" | `app.grona.ai/signup` |

## SEO
- **Title**: "Grona Case Studies: Real Conversion Optimization Results"
- **Description**: "See how real businesses use Grona to increase conversions. Up to 40% lift on product pages, live in 10 days."
- **Structured data**: CollectionPage

## Design Notes (from page-design.md)
- Directory/hub page: clean, scannable cards
- Works well with 1 entry (don't let it look empty)
- Featured card pattern for the primary case study
- No `<BrowserMockup>` needed (card-based layout)
