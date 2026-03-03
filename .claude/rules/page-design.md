# Page Design Guidelines
> Updated: 2026-03-03

## Above the Fold
- H1: under 8 words, outcome-focused, not feature-focused
- Subheadline: 1-2 sentences clarifying the mechanism or audience
- One primary CTA button with action verb + value ("Start free trial", not "Submit")
- Product screenshot or UI preview using `<BrowserMockup>` component. Use skeleton variants (`split`, `dashboard`, `chat`, `website`) until real screenshots are provided. Never use stock photos.
- Social proof snippet: logo bar or a single metric

## Page Flow
Follow: Problem → Solution → Proof → Action
- Lead with the strongest value proposition — don't bury it
- Each section has one job: establish credibility, explain a feature, handle objections, or drive action
- Repeat CTA after each major persuasion section
- End every page with a clear CTA — never trail off
- Every section must earn its place. If it doesn't move the visitor closer to action, cut it.

## Visual Hierarchy
- Size contrast is the strongest signal — make the most important element largest
- Use brand accent color sparingly, only on CTAs and key elements
- 4 font sizes maximum per page
- Body text: 16-18px, line-height 1.5-1.6, max reading width 600-750px
- H1 line-height: 1.1-1.2

## Trust & Credibility
- Logo bar immediately below the hero ("Trusted by X companies")
- Testimonials after feature sections — with real names, photos, specific results
- Security badges near forms and payment areas
- Never make unsubstantiated claims — use real numbers

## Scannability
- Short paragraphs (2-4 sentences max)
- Bullets and cards over long paragraphs
- Subheadings every 2-3 paragraphs
- Bold key phrases within body text
- Icons to anchor attention on feature lists

## Whitespace & Pacing
- Generous spacing between major sections — signals topic change
- Extra breathing room around hero and final CTA
- Tighter spacing between related items (cards in a grid, list items)
- Never let content touch container edges
- Avoid stacking more than 3 content-heavy sections without a visual break

## Mobile
- Single-column stack, CTA visible without scrolling
- Touch targets: minimum 44-48px
- Body text 16px minimum (prevents iOS zoom)
- Headline max 2 lines on mobile

## Content Density
- Top-of-funnel / awareness pages: fewer, punchier sections
- Comparison / pricing pages: can go deeper
- PPC landing pages: match ad specificity, remove global navigation
- Blog posts over 1,500 words: add table of contents

## By Page Type

**Landing pages**: One offer, one CTA. Remove navigation. Message-match the ad headline.

**Pricing pages**: Highlight one recommended tier. Max 3-4 tiers. Feature comparison table below cards. FAQ for objection handling.

**Feature pages**: Progressive disclosure — overview first, then detail. Two-column: benefit + screenshot, alternating sides. End each feature section with a relevant CTA.

**Blog posts**: 600-750px reading width. Subheadings every 2-3 paragraphs. In-line CTAs for product. Estimated read time.

**About pages**: Lead with mission, not history. Real team photos. Company metrics as trust signals.

**Contact pages**: 3-5 form fields max. State what happens after submission. Embed scheduling tool for high-intent visitors.

## Image Placeholders
Use `<BrowserMockup>` from `@/components/shared-assets/browser-mockup` for all product screenshots until real images are provided.

| Variant | Use for | Default ratio |
|---|---|---|
| `split` | Product hero, chat + live editor views | 16/7 |
| `dashboard` | Analytics, campaign results, reporting | 16/9 |
| `chat` | Chat interface, AI conversation flows | 9/14 |
| `website` | Client site previews, before/after | 16/10 |

```tsx
import { BrowserMockup } from "@/components/shared-assets/browser-mockup";

<BrowserMockup variant="dashboard" />                    // skeleton
<BrowserMockup><img src="..." className="size-full object-cover" /></BrowserMockup>  // real image
```

When real screenshots arrive, wrap them in `<BrowserMockup>` as children to keep the browser chrome frame.

## Don't
- Stock photography. Use `<BrowserMockup>` skeletons until real screenshots are ready.
- "Submit" as button text. Use action verbs.
- "We/Our"-centered copy. Flip to "you" language.
- Multiple competing CTAs in one viewport
- Vague headlines ("Innovative solutions for your business")
- Sections that repeat the same message in different words
