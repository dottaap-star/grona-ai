# Solutions Hub
> Route: `/solutions` | Phase: 3 | Action: Rebuild
> Design ref: [page-design.md](../../.claude/rules/page-design.md) | Strategy ref: [website-plan.md](../website-plan.md)

## Purpose
Route visitors to the right vertical page. This is a directory, not a conversion page. As verticals multiply, visitors who don't see their industry on the homepage need a path. Also captures organic traffic for "CRO solutions" queries. Currently a broken duplicate of Features.

## Audience & Funnel Stage
- **Who**: Visitors looking for industry-specific information, or who navigated to "Solutions" from nav/footer
- **How they arrive**: Navigation menu, footer, organic search for "CRO solutions"
- **Mindset**: "Do you have something specific to my business type?"
- **Funnel**: Awareness to consideration (routing)

## Primary Conversion
- **Path**: Soft link (routing page)
- **Mechanism**: Cards linking to vertical pages
- **Destination**: `/for/ecommerce`, `/for/saas`, etc.
- **Secondary**: None. This page's job is routing, not converting.

---

## Sections

### S1: Hero
**Job**: Explain what this page is and help the visitor self-route quickly.
**Spec**:
- H1: short, clear
- Subheadline explaining they'll find industry-specific solutions
**Key lines**:
- H1: "Solutions by industry"
- Sub: "See how Grona works for your business type."
**Design**: Minimal hero. Content below is the value.

---

### S2: Vertical Cards
**Job**: Present each industry as a distinct card with brief value prop and link.
**Spec**:
- Card per vertical:
  - **E-commerce**: "Optimize product pages, increase add-to-cart, test checkout flows" >> `/for/ecommerce`
  - **SaaS**: "Test landing pages, improve trial signups, iterate without engineering" >> `/for/saas`
- Each card: industry icon, headline, 1-2 sentence value prop, "Learn more" link
- Design should work well with 2 cards now and scale to 4-6 later
**Design**: Card grid. 2-column on desktop, stacked on mobile. Equal height cards.

---

### S3: General CTA
**Job**: Catch visitors whose industry isn't listed yet.
**Spec**:
- Simple message: "Don't see your industry? Grona works with any website."
- Link to features or homepage
**Key lines**:
- "Grona works with any website, any industry. Start free."
- Link: "See all features" >> `/features`

---

## Content Repetition Checklist
- [ ] Research + Execution >> Not needed (routing page)
- [x] Free to start >> S3: "Start free"
- [ ] 40% lift >> Not needed (routing page)
- [ ] No code >> Not needed (routing page)
- [ ] Competitor pricing >> Not needed (routing page)
- [ ] ChatGPT differentiation >> Not needed (routing page)
- [x] Works with any CMS >> S3: "works with any website"

## Cross-Links
| Visitor might ask... | Link to |
|---|---|
| "E-commerce" | `/for/ecommerce` |
| "SaaS" | `/for/saas` |
| "Not my industry" | `/features` |

## SEO
- **Title**: "Grona Solutions: AI CRO by Industry"
- **Description**: "Find AI-powered conversion optimization for your industry. E-commerce, SaaS, and more."
- **Structured data**: CollectionPage

## Design Notes (from page-design.md)
- Directory page: minimal, fast routing
- Cards as primary content, not paragraphs
- Scalable grid (works with 2-6 cards)
- No `<BrowserMockup>` needed (routing page, no product demo)
