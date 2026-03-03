# Integrations
> Route: `/integrations` | Phase: 5 | Action: New
> Design ref: [page-design.md](../../.claude/rules/page-design.md) | Strategy ref: [website-plan.md](../website-plan.md)

## Purpose
Remove "does it work with my stack" as a purchase objection. Capture "[platform] A/B testing" searches. Grona's integration model (one snippet, works everywhere) is a competitive advantage.

## Audience & Funnel Stage
- **Who**: Visitors checking platform compatibility before committing. Often arrive from Features or vertical pages.
- **How they arrive**: Features >> Integrations, vertical pages, FAQ links, organic search ("[platform] A/B testing")
- **Mindset**: "Will this work with my Shopify/WordPress/Webflow site?"
- **Funnel**: Consideration (objection removal)

## Primary Conversion
- **Path**: Sandbox
- **Mechanism**: URL input
- **Destination**: `app.grona.ai/try/edit/newCampaign?url={encodedUrl}`
- **Secondary**: "See Pricing" >> `/pricing`

## Objections This Page Handles
| Objection | Where handled |
|---|---|
| "Work with Shopify/WordPress/etc.?" | Platform grid with logos |
| "Hard to set up?" | One snippet, per-platform guides |
| "Connect to my analytics?" | Analytics row |

---

## Sections

### S1: Hero
**Job**: Lead with the simplicity message. "One snippet, any platform."
**Spec**:
- H1: simplicity-focused
- Subheadline listing the key promise
**Key lines**:
- H1: "Works with your stack"
- Sub: "One snippet. Any platform. Set up in under 2 minutes."

---

### S2: CMS / Website Platforms
**Job**: Show every platform Grona works with.
**Spec**:
- Platform logo grid with names:
  - Shopify, WordPress, Webflow, Wix, WooCommerce, Elementor, Squarespace, GTM
- Each platform: logo, name, 1-line install note
- Click to expand for platform-specific install guide (optional)
**Design**: Logo grid. Clean, scannable. Icons to anchor attention per page-design.md.

---

### S3: Analytics & Marketing Platforms
**Job**: Show analytics and ad platform connectivity.
**Spec**:
- Platform logo grid:
  - GA4, Microsoft Clarity, HubSpot, Google Ads, Facebook Ads
- Each platform: logo, name, 1-line description of what the integration does
**Design**: Same grid pattern as S2. Visually distinct row (different background or label).

---

### S4: How Installation Works
**Job**: Show the actual process is trivial.
**Spec**:
- 3 steps:
  1. Copy the Grona snippet
  2. Paste into your site's `<head>` tag (or GTM)
  3. Done. Grona handles everything else.
- Code block showing the snippet
- GTM alternative highlighted
**Key lines**:
- "One line of code. Or use Google Tag Manager."
- "No npm packages. No build steps. No developer needed."
**Design**: Simple numbered steps with code block. Tabs for platform-specific instructions if needed.

---

### S5: CTA
**Job**: Convert after removing the compatibility objection.
**Spec**:
- URL input: "Your platform is supported. Try it now."
- Input placeholder: "Enter your website URL"
**Key lines**:
- Headline: "Your platform is supported. Try it now."
- Sub: "Free to start. Live test in minutes."
**Destination**: `app.grona.ai/try/edit/newCampaign?url={encodedUrl}`
- Secondary: "See pricing" >> `/pricing`

---

## Content Repetition Checklist
- [ ] Research + Execution >> Not primary on this page
- [x] Free to start >> S5 CTA
- [ ] 40% lift >> Not on this page
- [x] No code >> S4: "No developer needed", S1 sub
- [ ] Competitor pricing >> Not on this page
- [ ] ChatGPT differentiation >> Not on this page
- [x] Works with any CMS >> Entire page is this message

## Cross-Links
| Visitor might ask... | Link to |
|---|---|
| "My platform, let's go" | URL input >> sandbox |
| "What can it do?" | `/features` |
| "How much?" | `/pricing` |
| "Walk me through it" | `/how-it-works` |

## SEO
- **Title**: "Grona Integrations: Shopify, WordPress, Webflow, and More"
- **Description**: "Grona works with any website platform. One snippet, set up in 2 minutes. See integrations with Shopify, WordPress, Webflow, GA4, and more."
- **Structured data**: SoftwareApplication (integration list)

## Design Notes (from page-design.md)
- Clean logo grid as primary visual element
- Icons to anchor attention on platform lists
- Code block for snippet (monospace, copy button)
- No `<BrowserMockup>` needed (platform logos and code blocks are the content)
- Mobile: logo grid wraps to 2-3 columns
- Keep it short. This page answers one question and removes one objection.
