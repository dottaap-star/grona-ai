# Comparison Page Template
> Routes: `/compare/vwo`, `/compare/optimizely`, `/compare/google-optimize` | Phase: 2 | Action: New
> Design ref: [page-design.md](../../.claude/rules/page-design.md) | Strategy ref: [website-plan.md](../website-plan.md)

## Purpose
Intercept high-intent searchers already evaluating tools. These visitors have budget, urgency, and are actively comparing. Each page is an SEO asset ranking for "[competitor] alternative" / "vs" / "replacement" queries. Expected conversion: 5-15% vs 1-3% for general pages.

## Audience & Funnel Stage
- **Who**: Visitors searching for competitor alternatives or direct comparisons
- **How they arrive**: Google search ("VWO alternative", "Google Optimize replacement 2026"), comparison shopping
- **Mindset**: "I know I need a tool. Is this one better than [competitor]?"
- **Funnel**: Mid-to-bottom. Often skip the homepage entirely.

## Primary Conversion
- **Path**: Sandbox
- **Mechanism**: URL input after comparison table
- **Destination**: `app.grona.ai/try/edit/newCampaign?url={encodedUrl}`
- **Secondary**: "Start Free" >> `app.grona.ai/signup`, "See Pricing" >> `/pricing`

## Per-Page Positioning

### vs VWO (`/compare/vwo`)
- **Angle**: Most direct SMB competitor
- **Key differentiators**: VWO $199+/mo, needs developers, steep learning curve, no AI generation. Grona starts free, no code, AI does the work.
- **Honesty section**: VWO has mature enterprise features, visual editor with more granular controls, larger customer base. If you need enterprise-grade feature flags or server-side testing, VWO may be the better fit.
- **H1**: "Grona vs VWO: AI-powered CRO for a fraction of the cost"
- **SEO title**: "Grona vs VWO: Compare Features, Pricing, and AI Capabilities (2026)"

### vs Optimizely (`/compare/optimizely`)
- **Angle**: Enterprise boogeyman. $36K/yr, 6-month implementation, needs a dev team.
- **Key differentiators**: Optimizely is built for enterprise engineering teams. Grona is built for marketers who need results without engineering tickets.
- **Honesty section**: Optimizely offers server-side experimentation, feature management, and CMS. If your team has dedicated engineers and needs feature flagging, Optimizely covers more ground.
- **H1**: "You don't need Optimizely"
- **SEO title**: "Grona vs Optimizely: The Marketer-Friendly Alternative (2026)"

### vs Google Optimize (`/compare/google-optimize`)
- **Angle**: GO sunset in 2023, millions stranded. Broadest addressable audience.
- **Key differentiators**: Grona is what GO would have been if it kept evolving and added AI. Free tier mirrors GO's accessibility. AI research and generation capabilities GO never had.
- **Honesty section**: GO was tightly integrated with GA. Grona integrates with GA4 but doesn't replicate the native Google ecosystem depth.
- **H1**: "The Google Optimize replacement that does more"
- **SEO title**: "Google Optimize Alternative 2026: Grona, Free with AI-Powered Testing"

---

## Shared Section Structure

### S1: Hero
**Job**: Immediately position the comparison. Visitor should know within 3 seconds: "This page compares [Competitor] and Grona."
**Spec**:
- H1: [per-page, see above]
- Subheadline: 1 sentence positioning Grona's advantage
- No CTA in hero (comparison table is the content)
**Key lines (per page)**:
- VWO sub: "Same capabilities. AI-powered. Free to start."
- Optimizely sub: "Enterprise-grade results without enterprise-grade complexity or cost."
- Google Optimize sub: "Free, AI-powered, and actively improving."

---

### S2: Side-by-Side Comparison Table
**Job**: Feature-by-feature comparison. Let the data speak.
**Spec**:
- Rows: Pricing, AI research, AI content generation, Chat interface, Visual editor, A/B testing, No-code setup, Developer required, Heatmaps, Competitor analysis, Free tier, Platform support
- Columns: [Competitor] | Grona
- Use checkmarks, X marks, and brief text (not just yes/no)
- Pricing row prominent (first or highlighted)
**Design**: Sticky column headers. Mobile: horizontal scroll or stacked cards. Clean, scannable.

---

### S3: What Grona Does That [Competitor] Doesn't
**Job**: Highlight Grona's unique advantages.
**Spec**:
- 3-4 cards:
  1. AI Research Layer (competitor analysis, traffic data, heatmaps)
  2. Chat-Based Editing (no code, conversational)
  3. AI Variation Generation (headlines, CTAs, layouts)
  4. Free tier / accessible pricing
- Each card: icon, headline, 2-sentence description
**Mockup**: `<BrowserMockup variant="split" />` or `<BrowserMockup variant="dashboard" />` per card

---

### S4: What [Competitor] Does That Grona Doesn't
**Job**: Build trust through honesty. Self-select visitors who need enterprise features.
**Spec**:
- [per-page, see positioning above]
- 2-3 honest points about what the competitor offers that Grona doesn't
- Frame as "if you need X, [Competitor] might be the better fit"
- This section makes the rest of the page more credible
**Design**: Shorter section. No mockups. Simple list.

---

### S5: Who Should Choose Grona
**Job**: Help the visitor self-identify.
**Spec**:
- Ideal for: SMBs, non-technical teams, marketers without dev support, teams that need speed over complexity
- Not ideal for: enterprise engineering teams needing server-side testing, teams with dedicated CRO engineers
**Key lines**:
- "Choose Grona if you want results without engineering tickets."

---

### S6: CTA
**Job**: Convert after the comparison makes the choice obvious.
**Spec**:
- URL input: "See the difference yourself. Paste your URL."
- Input placeholder: "Enter your website URL"
- Secondary: "Start Free" >> signup, "See Pricing" >> `/pricing`
**Key lines**:
- Headline: "See the difference yourself"
- Sub: "Paste your URL. Get AI research, suggestions, and a live test in minutes."
**Destination**: `app.grona.ai/try/edit/newCampaign?url={encodedUrl}`

---

## Content Repetition Checklist
- [x] Research + Execution >> S3: "What Grona does that [Competitor] doesn't" (competitors are research-only or execution-only)
- [x] Free to start >> Comparison table pricing row, S6 CTA
- [x] 40% lift >> "Real results" mention in S3 or S5
- [x] No code >> Comparison table "Developer required" row
- [x] Competitor pricing >> Comparison table, hero sub
- [x] ChatGPT differentiation >> Implicit: Grona executes, not just suggests
- [x] Works with any CMS >> Comparison table "Platform support" row

## Cross-Links
| Visitor might ask... | Link to |
|---|---|
| "Show me everything" | `/features` |
| "How much?" | `/pricing` |
| "Proof?" | `/case-studies/mouthshield` |
| "How does it work?" | `/how-it-works` |

## SEO
- **Title**: [per-page, see positioning above]
- **Description**: [per-page, tailored to competitor + "alternative" keywords]
- **Structured data**: FAQPage (comparison questions), SoftwareApplication

## Design Notes (from page-design.md)
- Landing page rules apply: focused offer, minimal navigation distractions
- Comparison table is the centerpiece. Make it scannable.
- Honesty section (S4) is shorter than advantage section (S3). Don't over-emphasize weaknesses.
- `<BrowserMockup>` for Grona advantage cards only (not competitor side)
- Mobile: table becomes stacked cards or horizontal scroll
- Bold key differentiators in table cells
