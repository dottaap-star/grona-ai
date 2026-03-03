# Changelog
> Route: `/changelog` | Phase: 6 | Action: New
> Design ref: [page-design.md](../../.claude/rules/page-design.md) | Strategy ref: [website-plan.md](../website-plan.md)

## Purpose
Signal product velocity. Answer "is this a real product?" For a new product, velocity is a trust signal. Weekly/biweekly updates tell visitors: this team ships. Gives existing users a reason to return. Each entry is indexable content.

## Audience & Funnel Stage
- **Who**: Prospects checking product maturity, existing users checking for updates
- **How they arrive**: Footer link, About page link, organic search
- **Mindset**: "Is this product actively maintained? What's new?"
- **Funnel**: Trust-building (any stage)

## Primary Conversion
- **Path**: Soft link
- **Mechanism**: "Try Grona" link to homepage
- **Destination**: Homepage (where the sandbox URL input lives)
- **Secondary**: None. This page's job is trust, not conversion.

---

## Sections

### S1: Hero
**Job**: Frame this as a living record of product development.
**Spec**:
- H1: velocity-focused
- Subheadline establishing cadence
**Key lines**:
- H1: "What's new in Grona"
- Sub: "Product updates, new features, and improvements."

---

### S2: Changelog Feed
**Job**: Chronological list of updates.
**Spec**:
- Each entry:
  - Date
  - Title (feature name or update summary)
  - Category tag: New Feature, Improvement, Fix
  - 2-4 sentence description of what changed and why it matters
  - Screenshot or `<BrowserMockup>` if showing a new UI feature (optional)
- Most recent first
- Group by month or show individual entries
**Design**: Timeline or feed layout. Dates prominent. Tags color-coded by category.

---

### S3: CTA
**Job**: Soft conversion for new visitors who landed here from search.
**Spec**:
- Simple link, not aggressive
**Key lines**:
- "New to Grona? See what it can do." >> `/features` or homepage
**Design**: Subtle. Not a full CTA section. Single line with link.

---

## Content Repetition Checklist
- [ ] Research + Execution >> Shown through feature updates that span both layers
- [ ] Free to start >> Not primary
- [ ] 40% lift >> Not on this page
- [ ] No code >> Not primary
- [ ] Competitor pricing >> Not on this page
- [ ] ChatGPT differentiation >> Not on this page
- [ ] Works with any CMS >> Not on this page

(Changelog is a trust page. Content repetition happens naturally through the updates themselves.)

## Cross-Links
| Visitor might ask... | Link to |
|---|---|
| "What is Grona?" | Homepage or `/features` |
| "How much?" | `/pricing` |

## SEO
- **Title**: "Grona Changelog: Product Updates and New Features"
- **Description**: "See what's new in Grona. Latest product updates, feature releases, and improvements to the AI-powered CRO platform."
- **Structured data**: Blog (changelog entries as articles)

## Design Notes (from page-design.md)
- Clean timeline/feed layout
- Date and category tags for scannability
- `<BrowserMockup>` only for entries that show new UI features
- Short entries: 2-4 sentences each. Not blog-length posts.
- Mobile: single column feed, dates as section dividers
