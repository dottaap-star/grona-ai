# Case Study Template
> Route: `/case-studies/[slug]` | Phase: 4 | Action: New
> Design ref: [page-design.md](../../.claude/rules/page-design.md) | Strategy ref: [website-plan.md](../website-plan.md)

## Purpose
Full proof story. Transform "we claim X" into "here's exactly how X happened for a real business." Trust is the #1 conversion barrier for a new SaaS. One real case study with specifics is more valuable than ten testimonial quotes.

## Audience & Funnel Stage
- **Who**: Visitors evaluating Grona seriously. Need evidence before committing.
- **How they arrive**: Case studies hub, homepage testimonial link, comparison/vertical pages
- **Mindset**: "Does this actually work? For someone like me?"
- **Funnel**: Consideration to decision

## Primary Conversion
- **Path**: Signup (NOT sandbox)
- **Mechanism**: "Start Free" CTA button after proof
- **Destination**: `app.grona.ai/signup`
- **Secondary**: "See Pricing" >> `/pricing`

**Why signup, not sandbox**: After reading a 40% lift story, the visitor has high emotional momentum. A signup CTA captures that immediately. Routing to sandbox risks: (a) their site not rendering, undermining the case study's impact, (b) 5 messages feeling anticlimactic after reading about a 40% lift. The proof already did the sandbox's job.

---

## Shared Section Structure

### S1: Hero
**Job**: Client name, industry, and headline metric immediately.
**Spec**:
- Client name + industry badge
- Hero metric (the primary result)
- 1-sentence summary of what happened
**Key lines (MouthShield example)**:
- Badge: "E-commerce / DTC"
- Metric: "+40% conversion lift"
- Sub: "How MouthShield increased product page conversions from 4.69% to 6.6% in 10 days."

---

### S2: The Challenge
**Job**: Establish context. What problem did the client face?
**Spec**:
- Client background: who they are, size, industry
- The specific problem they needed to solve
- What they tried before (if applicable)
**Key lines (MouthShield example)**:
- "MouthShield, a DTC oral care brand, partnered with King Edward First (SEO agency) to improve product page performance."
- "Their product page converted at 4.69%. Standard for the category, but they knew there was room to grow."

---

### S3: The Solution
**Job**: What Grona did, specifically.
**Spec**:
- Implementation details: how Grona was set up
- What was analyzed (research layer)
- What was changed (optimization layer)
- Timeline from start to results
**Key lines (MouthShield example)**:
- "Implementation: a single JavaScript snippet added to the site"
- "Changes: Clearer CTA, fewer distractions, improved messaging"
- "The team used Grona to research the product page, competitor sites, and visitor behavior patterns, then created and tested variations targeting the highest-impact changes."

---

### S4: The Results
**Job**: Numbers. Specific, verifiable, qualified.
**Spec**:
- Results table:

| Metric | Before | After | Change |
|---|---|---|---|
| Conversion rate | 4.69% | 6.6% | +40% lift |
| Session depth | 5.5 pages | 2.3 pages | Visitors converted faster |
| Ad spend | Baseline | Baseline | Zero increase |
| Add-to-cart | Baseline | Increased | Up |

- Timeline: "Results measured over 10 days"
- Statistical note if available
**Design**: Data table or metric cards. Large primary metric, supporting metrics below.

---

### S5: Client Quote
**Job**: Third-party validation in their words.
**Spec**:
- Full quote with real name, title, company
- Photo if available
**Key lines (MouthShield example)**:
- Quote: "Partnering with grona.ai to run split tests for MouthShield was seamless and rewarding. We saw real, actionable results and I wouldn't hesitate to work with them again."
- Attribution: "Peter Lavelle, Co-director SEO, King Edward First"
- Note: Quote is from agency partner, not end client. Attribute correctly.
**Design**: Blockquote with photo, name, title, company. Per page-design.md: "Testimonials with real names, photos, specific results."

---

### S6: Key Takeaways
**Job**: Distill lessons. Make the case study transferable to the visitor's situation.
**Spec**:
- 3-4 bullet takeaways:
  - Small changes (CTA, messaging) can produce outsized results
  - AI identifies changes a human team might miss
  - No developer was needed for implementation
  - Results came in days, not months
**Design**: Numbered or bulleted list. Short section.

---

### S7: CTA
**Job**: Convert the convinced visitor.
**Spec**:
- "Start Free" button
- Reinforcing line about no risk
**Key lines**:
- Headline: "Get results like these for your site"
- CTA: "Start Free" >> `app.grona.ai/signup`
- Sub: "No credit card required. See what Grona finds in minutes."
- Secondary: "See pricing plans" >> `/pricing`

---

## Content Repetition Checklist
- [x] Research + Execution >> S3: analyzed (research), built and tested changes (execution)
- [x] Free to start >> S7 CTA
- [x] 40% lift >> S1 hero metric, S4 results table (this is the source of that claim)
- [x] No code >> S3: "single JavaScript snippet", S6 takeaway
- [x] Competitor pricing >> Implied: "Result that would cost $X from an agency"
- [ ] ChatGPT differentiation >> Not explicit on case study pages
- [x] Works with any CMS >> S3: implementation simplicity

## Cross-Links
| Visitor might ask... | Link to |
|---|---|
| "I'm convinced, price?" | `/pricing` |
| "How do I start?" | `app.grona.ai/signup` |
| "How does it work?" | `/how-it-works` |
| "My industry?" | `/for/ecommerce` or `/for/saas` |

## SEO
- **Title**: "[Client] Case Study: [X]% Conversion Lift with Grona"
- **Description**: "How [Client] increased [metric] by [X]% in [timeline] using AI-powered A/B testing. Read the full case study."
- **Structured data**: Article (case study), BreadcrumbList

## Design Notes (from page-design.md)
- Long-form content page: 600-750px reading width
- Large hero metric as visual anchor (size contrast)
- Data table for results (scannable, not buried in prose)
- Blockquote for client quote with real attribution
- "Start Free" CTA after proof, not URL input (decision-stage visitors)
- `<BrowserMockup>` optional for showing the before/after if screenshots available
