# Book a Demo
> Route: `/demo` | Phase: 6 | Action: New
> Design ref: [page-design.md](../../.claude/rules/page-design.md) | Strategy ref: [website-plan.md](../website-plan.md)

## Purpose
Conversion path for visitors who want human contact. Enterprise, agency, or high-spend e-commerce. Self-serve works for individuals and small teams, but agency owners evaluating for their client roster or $5M+ e-commerce brands want to talk to a person. Without this page, high-value leads have no conversion path except a generic contact form.

## Audience & Funnel Stage
- **Who**: Enterprise buyers, agency owners, high-spend e-commerce leads
- **How they arrive**: Pricing page (Enterprise tier CTA), header nav "Book a Demo", vertical pages
- **Mindset**: "I want to talk to someone before committing."
- **Funnel**: Decision (enterprise/sales-assisted)

## Primary Conversion
- **Path**: Sales-assisted
- **Mechanism**: Cal.com calendar embed
- **Destination**: Cal.com booking (`cal.com/grona/30min`)
- **Secondary**: "Prefer self-serve? See pricing" >> `/pricing`

## Cal.com Integration Details
- **Link**: `https://cal.com/grona/30min`
- **React package**: `@calcom/embed-react`
- **Namespace**: `30min`
- **Layout**: `month_view`
- **Config**: `{ hideEventTypeDetails: false }`

---

## Sections

### S1: Hero
**Job**: Validate the visitor's choice to talk to a person. Frame the demo as valuable, not a sales pitch.
**Spec**:
- H1: value-focused, not "contact us"
- Subheadline explaining what happens on the call
**Key lines**:
- H1: "See Grona in action"
- Sub: "30-minute walkthrough tailored to your business. We'll analyze your site live and show you exactly how Grona can increase your conversions."
**Design**: Contact page rules per page-design.md: "State what happens after submission."

---

### S2: Cal.com Embed
**Job**: The booking form. Minimize friction.
**Spec**:
- Cal.com embedded calendar using `@calcom/embed-react`
- Month view layout
- Responsive sizing
**Design**: Prominent, centered. The calendar IS the CTA. No additional form fields needed (Cal.com handles name, email).

---

### S3: What to Expect
**Job**: Reduce anxiety about the call. Set expectations.
**Spec**:
- 3 things that happen on the call:
  1. We walk through your website live using Grona
  2. You see competitor insights and optimization opportunities specific to your business
  3. We discuss which plan fits your team and goals
- "No pressure. No obligation."
**Key lines**:
- "We'll walk through your site live on the call."
- "No sales pressure. Come with questions."
**Design**: Simple numbered list or icon cards. Short.

---

### S4: Self-Serve Alternative
**Job**: Catch visitors who landed here but don't actually need a demo.
**Spec**:
- "Prefer to try it yourself?"
- Link to pricing or direct signup
**Key lines**:
- "Prefer self-serve? Start free, no demo needed."
- Link: "See pricing plans" >> `/pricing`
- Link: "Try it now" >> homepage URL input or `app.grona.ai/signup`
**Design**: Small, secondary section below the calendar. Not competing with the booking.

---

## Content Repetition Checklist
- [ ] Research + Execution >> Implied in S3 ("analyze your site + show optimization")
- [x] Free to start >> S4: "Start free, no demo needed"
- [ ] 40% lift >> Not primary on demo page
- [ ] No code >> Not primary on demo page
- [ ] Competitor pricing >> Not on demo page
- [ ] ChatGPT differentiation >> Not on demo page
- [ ] Works with any CMS >> Not on demo page

## Cross-Links
| Visitor might ask... | Link to |
|---|---|
| "Prefer self-serve" | `/pricing` |
| "Try it now" | `app.grona.ai/signup` or homepage |

## SEO
- **Title**: "Book a Demo: See Grona AI CRO Platform Live"
- **Description**: "Schedule a 30-minute demo of Grona. We'll analyze your website live and show you how to increase conversions with AI-powered A/B testing."
- **Structured data**: ContactPage

## Design Notes (from page-design.md)
- Contact page rules: "3-5 form fields max. State what happens after submission. Embed scheduling tool for high-intent visitors."
- Cal.com embed is the primary content. Don't bury it.
- Minimal page. Don't add marketing sections that distract from the booking action.
- No `<BrowserMockup>` needed
- Mobile: calendar embed must be fully functional on mobile touch
