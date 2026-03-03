# FAQ
> Route: `/faq` | Phase: 6 | Action: New
> Design ref: [page-design.md](../../.claude/rules/page-design.md) | Strategy ref: [website-plan.md](../website-plan.md)

## Purpose
Objection handling at scale. Long-tail search capture. Every page has a mini-FAQ. This standalone FAQ aggregates all questions plus deeper technical/operational ones. Captures searches like "does grona work with shopify" or "is grona safe for my website."

## Audience & Funnel Stage
- **Who**: Visitors with specific questions or concerns blocking their decision
- **How they arrive**: Homepage FAQ link, pricing page, footer, organic search for specific questions
- **Mindset**: "I have a specific question that needs answering before I can decide."
- **Funnel**: Any stage (objection resolution)

## Primary Conversion
- **Path**: Signup
- **Mechanism**: "Start Free" CTA after FAQ
- **Destination**: `app.grona.ai/signup`
- **Secondary**: Each answer links to relevant deep page

---

## Sections

### S1: Hero
**Job**: Frame as a comprehensive resource.
**Spec**:
- H1: clear and direct
- Optional: search/filter bar
**Key lines**:
- H1: "Frequently asked questions"
- Sub: "Everything you need to know about Grona."

---

### S2: FAQ Categories
**Job**: Organized, scannable answers to every common question.
**Spec**:
- Accordion pattern grouped by category:

**Product**
- "How does Grona work?" >> Link to /how-it-works
- "What can I change on my website?" >> Explains editing capabilities, link to /features
- "Will the Grona script slow down my website?" >> No, async script with minimal footprint
- "How long does it take to see results?" >> "Live A/B test in 5 minutes. Meaningful data in days, depending on traffic."

**Technical**
- "Does Grona work with Shopify?" >> Yes, link to /integrations
- "Does Grona work with WordPress?" >> Yes, link to /integrations
- "Does Grona work with Webflow?" >> Yes, link to /integrations
- "Is my data safe?" >> Explain security practices
- "Will A/B testing hurt my SEO?" >> No, Grona uses client-side rendering. Google sees the original page.
- "Can I use Google Tag Manager?" >> Yes, GTM is supported

**Pricing**
- "Is the free tier really free?" >> "Yes. No credit card. No time limit. 1 campaign, 1,000 pageviews."
- "Can I cancel anytime?" >> "Yes, no contracts."
- "What happens when I hit my pageview limit?" >> "Your test pauses. Data is preserved. Upgrade or wait for the next cycle."

**Comparison**
- "Can't I just use ChatGPT for this?" >> "ChatGPT gives advice. Grona executes: it renders your live site, pulls competitor data, generates variations, deploys A/B tests, and tracks results. ChatGPT can tell you to change a headline. Grona changes it, tests it, and tells you which version won."
- "How is Grona different from Hotjar?" >> "Hotjar records behavior. Grona acts on it. Grona does research AND execution."
- "How does Grona compare to VWO?" >> Brief answer, link to /compare/vwo

**Trust**
- "How long has Grona existed?" >> Answer with founding context
- "Who uses Grona?" >> Reference case study, industries
- "What if I need help?" >> Support channels

**Each answer**: 2-4 sentences, link to relevant deep page where visitor can learn more. Not exhaustive answers, enough to satisfy + route deeper.

---

### S3: CTA
**Job**: Convert visitors whose questions have been answered.
**Spec**:
- "Start Free" button after the FAQ section
**Key lines**:
- Headline: "Questions answered? Start optimizing."
- CTA: "Start Free" >> `app.grona.ai/signup`
- Sub: "No credit card required."

---

## Content Repetition Checklist
- [x] Research + Execution >> Comparison answers (ChatGPT, Hotjar): "research AND execution"
- [x] Free to start >> Pricing Q: "No credit card. No time limit.", S3 CTA
- [ ] 40% lift >> Not primary (FAQ answers are concise, link to case study for proof)
- [x] No code >> Product Q: editing capabilities, Technical Q: script + GTM
- [ ] Competitor pricing >> Not primary (link to comparison pages)
- [x] ChatGPT differentiation >> Explicit answer in Comparison category
- [x] Works with any CMS >> Technical Q: per-platform yes answers, link to /integrations

## Cross-Links
| Visitor might ask... | Link to |
|---|---|
| Per-question | Deep links to /how-it-works, /features, /integrations, /pricing, /compare/* |
| "I'm ready" | `app.grona.ai/signup` |

## SEO
- **Title**: "Grona FAQ: Pricing, Features, Integrations, and More"
- **Description**: "Answers to common questions about Grona's AI-powered CRO platform. Pricing, platform compatibility, security, and how it compares to VWO, ChatGPT, and more."
- **Structured data**: FAQPage (critical for featured snippets)

## Design Notes (from page-design.md)
- Accordion pattern for FAQ
- Grouped by category with clear section headers
- Each answer links to relevant deep page
- Keep answers concise (2-4 sentences). Let deep pages do the heavy lifting.
- FAQPage structured data is essential for SEO (featured snippets)
- Mobile: full-width accordions, touch-friendly expand/collapse
