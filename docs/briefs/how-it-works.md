# How It Works
> Route: `/how-it-works` | Phase: 4 | Action: New
> Design ref: [page-design.md](../../.claude/rules/page-design.md) | Strategy ref: [website-plan.md](../website-plan.md)

## Purpose
Full walkthrough for visitors who are interested but confused. Close the gap between "I think I get it" and "I understand exactly what happens." Grona does something genuinely new: AI research, chat-based live editing with point-and-click, and automated A/B testing. Homepage gives overview. Features gives capabilities. How It Works gives the sequential experience.

## Audience & Funnel Stage
- **Who**: Interested visitors who need the process explained step-by-step
- **How they arrive**: Homepage "How It Works" section link, Features, FAQ links
- **Mindset**: "I'm interested but I don't fully understand what happens after I paste my URL."
- **Funnel**: Consideration (education)

## Primary Conversion
- **Path**: Sandbox
- **Mechanism**: URL input at the end
- **Destination**: `app.grona.ai/try/edit/newCampaign?url={encodedUrl}`
- **Secondary**: "See Pricing" >> `/pricing`

**Why this page drives to sandbox**: The step-by-step format inherently ends at "start step 1," which is pasting a URL. The visitor just learned the workflow, so experiencing it immediately is the natural next action.

---

## Sections

### S1: Hero
**Job**: Promise clarity. "After this page, you'll know exactly how it works."
**Spec**:
- H1: process-focused
- Subheadline promising speed + simplicity
**Key lines**:
- H1: "From URL to live A/B test in minutes"
- Sub: "Here's exactly what happens when you start with Grona. No code, no complexity."

---

### S2: Overview Visual
**Job**: Full workflow in one visual. Anchor the mental model before diving into details.
**Spec**:
- Single diagram showing the complete flow: Paste URL >> Research >> Create Variation >> Preview >> Go Live
- 5 numbered nodes, compact, visual, not text-heavy
**Design**: Horizontal flow on desktop, vertical on mobile. Numbered steps with icons connected by lines/arrows.

---

### S3: Step-by-Step Walkthrough
**Job**: Detailed walkthrough of each step with screenshots.
**Spec**:
- 5 steps, each with:
  - Step number + name
  - 2-3 sentence description of what happens
  - Screenshot or BrowserMockup showing that step
  - What the user sees/does vs what happens behind the scenes

**Steps**:
1. **Paste your URL**: Enter your website URL into Grona. Your site renders live on the right panel. Behind the scenes, Grona starts processing your page to prepare it for optimization.
2. **Research your market**: Explore your own site and spy on competitors. Scrape competitor websites to understand their messaging, look up their Facebook and Google ads, capture website traffic data, and ask the AI for comparisons and suggestions. You decide what to research and how deep to go.
3. **Create your variation**: Once you have an idea, describe what you want to change in the chat, or select elements directly in the browser and ask for suggestions. No code, no tickets. Just tell the AI what you want, or point and click.
4. **Preview your changes**: Your variation opens in a new tab within the live preview. See exactly what visitors will see. Refine until you're happy.
5. **Go live**: Switch on your campaign. Grona's script splits traffic between your original and variation, and tracks conversions automatically.

**Key lines**:
- Step 1: "Your site. Rendered live. Ready to optimize."
- Step 2: "Spy on competitors. Understand their messaging, ads, and traffic."
- Step 3: "No code. No tickets. Chat or point and click."
- Step 5: "One click. Your test is live."
**Mockup**: Each step uses `<BrowserMockup variant="split" />` showing the relevant stage
**Design**: Alternating sides per page-design.md feature page rules. Step number prominent. Each step is its own visual block.

---

### S4: Installation
**Job**: Remove "how do I install it" as a blocker.
**Spec**:
- One snippet explanation
- Platform-specific quick guides: Shopify, WordPress, Webflow, GTM
- "Or just use Google Tag Manager"
**Key lines**:
- Section head: "One snippet. Any platform."
- "Add one line of JavaScript to your site. Or paste it into GTM. That's it."
- Link: "See all integrations" >> `/integrations`
**Design**: Code block showing the snippet. Tabs for platform-specific guides.

---

### S5: CTA
**Job**: "You just saw the process. Start step 1 right here."
**Spec**:
- URL input field
- Framed as starting the first step
**Key lines**:
- Headline: "You just saw the process. Start step 1."
- Input placeholder: "Enter your website URL"
- Sub: "Free to start. Live test in minutes."
**Destination**: `app.grona.ai/try/edit/newCampaign?url={encodedUrl}`
- Secondary: "See pricing" >> `/pricing`

---

## Content Repetition Checklist
- [x] Research + Execution >> S3: sequential flow showing research feeding into execution (steps 1-2 = research, 3-5 = execution)
- [x] Free to start >> S5 CTA: "Free to start"
- [ ] 40% lift >> Not primary on this page (process, not proof)
- [x] No code >> S1 sub ("no code"), S3 step 3 ("no tickets, chat or point and click"), S4 installation
- [ ] Competitor pricing >> Not on this page
- [x] ChatGPT differentiation >> Implicit: workflow shows actions a chatbot can't perform (render live sites, deploy tests, split traffic, track conversions)
- [x] Works with any CMS >> S4: "One snippet. Any platform."

## Cross-Links
| Visitor might ask... | Link to |
|---|---|
| "I'm ready" | URL input >> sandbox |
| "What can it do?" | `/features` |
| "How much?" | `/pricing` |
| "What platforms?" | `/integrations` |
| "Show me proof" | `/case-studies/mouthshield` |

## SEO
- **Title**: "How Grona Works: From URL to Live A/B Test in Minutes"
- **Description**: "Paste your URL, research competitors, create variations with chat or point-and-click, and deploy an A/B test. See the step-by-step process. No code required."
- **Structured data**: HowTo (steps), BreadcrumbList

## Design Notes (from page-design.md)
- Feature page rules: progressive disclosure, alternating screenshot/text layout
- Each step is a distinct visual block with clear numbering
- `<BrowserMockup variant="split" />` for each step showing the product at that stage
- The entire walkthrough never mentions code (reinforces the "no code" message structurally)
- Mobile: steps stack vertically, screenshots above text
- Body text 16-18px, reading width 600-750px for descriptions
