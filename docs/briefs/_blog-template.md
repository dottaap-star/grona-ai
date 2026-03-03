# Blog Post Template
> Route: `/blog/[slug]` | Phase: 5 | Action: New
> Design ref: [page-design.md](../../.claude/rules/page-design.md) | Strategy ref: [website-plan.md](../website-plan.md)

## Purpose
Educational content that attracts people searching for CRO knowledge, earns trust, and naturally introduces Grona. Targets queries from people who have the problem but don't know Grona yet.

## Audience & Funnel Stage
- **Who**: Organic search visitors with CRO questions or problems
- **How they arrive**: Google search, social media, newsletter, cross-links from other posts
- **Mindset**: "I want to learn about [topic]."
- **Funnel**: Awareness (top-of-funnel)

## Primary Conversion
- **Path**: Soft CTA (link deeper)
- **Mechanism**: In-line mentions within article body linking to features or homepage
- **Destination**: `/features`, `/`, `/for/ecommerce`, `/for/saas` (contextual)
- **Secondary**: Newsletter signup

**Why soft CTAs, not sandbox**: Blog visitors arrived for content, not a product trial. A URL input feels aggressive for someone reading "What to A/B Test First." In-line mentions linking to features or homepage is enough. Let them discover the sandbox naturally.

---

## Content Priority

| Post | Target Query | Funnel | Grona Connection |
|---|---|---|---|
| Google Optimize Alternatives 2026 | "google optimize alternative" | Mid | Grona as top alternative (feeds comparison pages) |
| What to A/B Test First | "what to a/b test" | Top | Grona AI tells you what to test (feeds Features) |
| CRO for Shopify Stores | "shopify cro" | Mid | Grona works with Shopify (feeds /for/ecommerce) |
| AI and Conversion Optimization | "ai cro" | Top | Grona is this trend embodied |
| A/B Testing Without Developers | "a/b testing no code" | Mid | Grona requires zero code (feeds How It Works) |
| Landing Page Optimization | "landing page optimization" | Top | Grona automates these strategies |
| CRO for SaaS | "saas cro" | Mid | Feeds /for/saas |
| How to Read A/B Test Results | "a/b test results" | Top | Grona tracks automatically |

---

## Shared Section Structure

### S1: Article Header
**Job**: Set context, time commitment, and topic.
**Spec**:
- H1: SEO-optimized title
- Author, date, estimated read time
- Category tag
- Hero image or relevant illustration (optional)
**Design**: Clean, centered. 600-750px reading width per page-design.md blog rules.

---

### S2: Table of Contents
**Job**: Navigation aid for longer posts.
**Spec**:
- Auto-generated from H2 subheadings
- Sticky sidebar on desktop (optional) or inline at top
**Design**: Only for posts over 1,500 words per page-design.md content density rules.

---

### S3: Article Body
**Job**: Deliver educational value. Build trust through expertise.
**Spec**:
- Subheadings every 2-3 paragraphs
- Short paragraphs (2-4 sentences)
- Bold key phrases
- Bullet lists where appropriate
- In-line Grona mentions: natural, not forced. "Tools like Grona automate this process" with link to relevant page.
- 1-2 in-line CTAs maximum. Not every section needs a product mention.
**Design**: 600-750px reading width. 16-18px body text. Line-height 1.5-1.6.

---

### S4: In-Line Product Mention
**Job**: Introduce Grona naturally within the educational context.
**Spec**:
- Contextual callout box or inline link
- Appears once or twice within the article, not at the end
- Connects the topic to a specific Grona capability
**Key lines (examples)**:
- "What to A/B Test First" post: "Grona's AI identifies the highest-impact elements to test, based on competitor research and your traffic patterns." >> `/features`
- "CRO for Shopify" post: "Tools like Grona let you research your competitors, then create and test optimized variations without code." >> `/for/ecommerce`
**Design**: Subtle callout box or highlighted text. Not a banner ad.

---

### S5: Related Posts
**Job**: Keep the visitor on-site. Deepen the relationship.
**Spec**:
- 2-3 related post cards at the bottom
- Based on category or topic relevance
**Design**: Card grid, same style as blog hub cards.

---

### S6: Newsletter CTA
**Job**: Capture email for visitors not ready for product.
**Spec**:
- Email signup at the end of the article
**Key lines**:
- "Get more CRO insights delivered weekly."
- CTA: "Subscribe"

---

## Content Repetition Checklist
- [ ] Research + Execution >> In-line mentions where relevant
- [x] Free to start >> In-line CTAs: "Try it free"
- [ ] 40% lift >> Only in case-study-related posts
- [ ] No code >> In "A/B Testing Without Developers" post
- [ ] Competitor pricing >> In "Google Optimize Alternatives" post
- [ ] ChatGPT differentiation >> In "AI and CRO" post
- [ ] Works with any CMS >> In platform-specific posts

(Content repetition is per-post, not structural. Each post naturally connects to the relevant messages based on its topic.)

## Cross-Links
| Visitor might ask... | Link to |
|---|---|
| "Tool sounds interesting" | Homepage or relevant vertical page |
| "Related post" | Another `/blog/[slug]` |
| "Show me the product" | `/features` |

## SEO
- **Title**: "[Post Title] | Grona Blog"
- **Description**: [Per-post, targeting primary keyword]
- **Structured data**: Article, BreadcrumbList

## Design Notes (from page-design.md)
- Blog post: 600-750px reading width
- Subheadings every 2-3 paragraphs
- In-line CTAs for product (not banner-style)
- Estimated read time in header
- Posts over 1,500 words: add table of contents
- `<BrowserMockup>` only if showing product screenshots within the article content
- Bold key phrases within body text
- Short paragraphs (2-4 sentences max)
