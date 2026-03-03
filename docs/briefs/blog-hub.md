# Blog Hub
> Route: `/blog` | Phase: 5 | Action: Rebuild
> Design ref: [page-design.md](../../.claude/rules/page-design.md) | Strategy ref: [website-plan.md](../website-plan.md)

## Purpose
Top-of-funnel traffic engine index. Lists all blog posts with categories and search. Captures organic traffic and routes visitors to educational content that naturally introduces Grona.

## Audience & Funnel Stage
- **Who**: Organic search visitors looking for CRO knowledge, returning visitors checking for new content
- **How they arrive**: Google search, social media, newsletter links, nav/footer
- **Mindset**: "I want to learn about CRO / A/B testing / conversion optimization."
- **Funnel**: Awareness

## Primary Conversion
- **Path**: Soft link (routes to blog posts, which soft-link to product pages)
- **Mechanism**: Blog post cards >> `/blog/[slug]`
- **Secondary**: Newsletter signup for email nurturing

---

## Sections

### S1: Hero
**Job**: Frame the blog as a resource, not a sales channel.
**Spec**:
- H1: educational positioning
- Subheadline establishing authority
- Optional: newsletter signup form
**Key lines**:
- H1: "The Grona Blog"
- Sub: "Conversion optimization insights, A/B testing strategies, and CRO best practices."

---

### S2: Featured Post
**Job**: Highlight the latest or most important post.
**Spec**:
- Large featured card for the primary/latest post
- Image/thumbnail, title, excerpt, read time, date, category tag
**Design**: Wider than regular cards. Can span full width or 2/3.

---

### S3: Post Grid
**Job**: Browse all posts.
**Spec**:
- Card grid: title, excerpt, read time, date, category tag
- Category filter (optional): CRO, A/B Testing, Industry, Product Updates
- Pagination or infinite scroll
**Content priority** (from website-plan.md):
1. Google Optimize Alternatives 2026
2. What to A/B Test First
3. CRO for Shopify Stores
4. AI and Conversion Optimization
5. A/B Testing Without Developers
6. Landing Page Optimization
7. CRO for SaaS
8. How to Read A/B Test Results
**Design**: 3-column grid on desktop, 2 on tablet, 1 on mobile. Cards with consistent height.

---

### S4: Newsletter CTA
**Job**: Capture email for nurturing visitors not ready to try the product.
**Spec**:
- Email input + subscribe button
- Value prop for subscribing
**Key lines**:
- Headline: "Get CRO insights in your inbox"
- Sub: "Weekly tips on conversion optimization, A/B testing, and growth."
- CTA: "Subscribe"
**Design**: Full-width band or sidebar element. Not aggressive.

---

## Content Repetition Checklist
- [ ] Research + Execution >> Not on hub page (handled in individual posts)
- [x] Free to start >> Implied in post CTAs
- [ ] 40% lift >> Not on hub page
- [ ] No code >> Not on hub page
- [ ] Competitor pricing >> Not on hub page
- [ ] ChatGPT differentiation >> Not on hub page
- [ ] Works with any CMS >> Not on hub page

## Cross-Links
| Visitor might ask... | Link to |
|---|---|
| "What is Grona?" | Homepage (from post CTAs) |
| "Specific post" | `/blog/[slug]` |

## SEO
- **Title**: "Grona Blog: CRO, A/B Testing, and Conversion Optimization"
- **Description**: "Learn how to optimize your website with AI-powered CRO insights, A/B testing guides, and conversion optimization strategies."
- **Structured data**: CollectionPage, Blog

## Design Notes (from page-design.md)
- Blog hub: card grid, clean typography
- Category filters for easy browsing
- Newsletter CTA without being aggressive
- No `<BrowserMockup>` needed
- Mobile: single column, readable card sizes
