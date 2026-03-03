# Grona Website Deployment Plan

> Updated: 2026-03-03
> Context: Full website strategy for grona-ai repo. All 19 pages ship together.
> Technical audit: see [website-audit.md](website-audit.md)
> Features page detail: see [features-page-plan.md](features-page-plan.md)

## Launch Context

All 6 phases ship simultaneously. The phase numbers are organizational grouping (core funnel, comparison, verticals, trust, content, polish), not build order. When the site goes live, every page is available and every cross-link works. The site is an interconnected conversion system, not a collection of pages.

A typical converting visitor hits 3-5 pages. No visitor reads all 19. Every page must be self-sufficient enough to convert on its own, while linking to deeper answers for visitors who need more. Every page is never more than 2 clicks from one of three conversion actions: sandbox (URL input), signup (account creation), or sales-assisted (demo booking).

## Conversion Model

Grona has three distinct conversion paths. The right choice depends on the visitor's funnel stage and risk tolerance.

### Path 1: Sandbox (product-led, gated trial)
- **Mechanism**: URL input field
- **Destination**: `app.grona.ai/try/edit/newCampaign?url={encodedUrl}` → resolves to `app.grona.ai/try/edit/{campaignId}?url={encodedUrl}`
- **Experience**: Chat on left, visitor's live website rendered on right. No signup required.
- **Limit**: 5 chat messages, then signup wall.
- **After signup**: New campaign starts fresh. Sandbox work does NOT carry over.
- **Risk**: Some websites fail to render (iframe encryption/CORS). Visitor sees broken experience.
- **Best for**: Consideration-stage visitors who need to experience value before committing. The 5-message limit creates urgency to sign up.

### Path 2: Signup (traditional account creation)
- **Mechanism**: "Start Free" / CTA buttons
- **Destination**: `app.grona.ai/signup`
- **Experience**: Standard signup form
- **Best for**: Decision-stage visitors already convinced by content, proof, or pricing. Captures email for nurturing. Don't risk a broken sandbox undermining conviction they already have.

### Path 3: Sales-assisted (enterprise/agency)
- **Mechanism**: "Book a Demo" CTA
- **Destination**: `/demo` page (Cal.com embed)
- **Best for**: Enterprise, agency, or high-spend leads who want human contact.

### Per-Page CTA Strategy

The principle: **match the CTA to the visitor's intent level.** Sandbox for visitors still evaluating (show value). Signup for visitors already convinced (capture commitment). Soft links for low-intent visitors (guide deeper).

**Consideration stage → Sandbox (URL input)**

| Page | Primary CTA | Secondary CTA |
|---|---|---|
| Homepage | URL input in hero → sandbox | "Start Free" bottom section → signup |
| Features | URL input at bottom → sandbox | "See Pricing" → link |
| Comparison pages | URL input after table → sandbox | "See Pricing" → link |
| Vertical pages | URL input (industry placeholder) → sandbox | "See Pricing" → link |
| How It Works | URL input at end → sandbox | "See Pricing" → link |
| Integrations | URL input → sandbox | "See Pricing" → link |

**Decision stage → Signup (CTA button)**

| Page | Primary CTA | Secondary CTA |
|---|---|---|
| Pricing | Per-tier signup buttons → signup | "Try it first" URL input → sandbox |
| FAQ | "Start Free" → signup | — |
| Case Study | "Start Free" after proof → signup | "See Pricing" → link |

**Awareness stage → Soft CTA (link deeper)**

| Page | Primary CTA | Secondary CTA |
|---|---|---|
| Blog posts | Inline link to features/homepage | Newsletter signup → email |
| Changelog | "Try Grona" → link to homepage | — |
| About | "See what Grona can do" → features link | — |
| Solutions Hub | Route to vertical pages → link | — |

**Enterprise → Sales-assisted**

| Page | Primary CTA | Secondary CTA |
|---|---|---|
| Demo | Cal.com booking | "Prefer self-serve? See pricing" → link |

**Why case study uses signup, not sandbox:** After reading a 40% lift story, the visitor has high emotional momentum. A signup CTA captures that momentum immediately. Routing them to sandbox risks (a) their site not rendering, undermining the case study's impact, and (b) 5 messages feeling anticlimactic after reading about a 40% lift. The proof already did the sandbox's job (demonstrating value).

**Why blog uses soft links, not sandbox:** Blog visitors arrived for content, not a product trial. A URL input feels aggressive for someone reading "What to A/B Test First." An inline mention linking to features or homepage is enough. Let them discover the sandbox naturally.

URL input placeholder should be contextual: "Enter your website URL", "Paste your Shopify store URL", "Paste your landing page URL".

### Product-Level Improvements (flagged)
1. **Sandbox → signup continuity**: Carry sandbox campaign into new account after signup. Currently users start fresh, losing momentum.
2. **Rendering failure fallback**: If iframe fails, redirect to signup with "We'll analyze your site after you create an account."

---

## Page Map

| # | Page | Route | Action | Phase |
|---|------|-------|--------|-------|
| 1 | Homepage | `/` | Full rewrite | 1 |
| 2 | Features | `/features` | Rebuild | 1 |
| 3 | Pricing | `/pricing` | Revise | 1 |
| 4 | Grona vs VWO | `/compare/vwo` | New | 2 |
| 5 | Grona vs Optimizely | `/compare/optimizely` | New | 2 |
| 6 | Google Optimize Alt | `/compare/google-optimize` | New | 2 |
| 7 | For E-commerce | `/for/ecommerce` | New | 3 |
| 8 | For SaaS | `/for/saas` | New | 3 |
| 9 | Solutions Hub | `/solutions` | Rebuild | 3 |
| 10 | Case Studies Hub | `/case-studies` | New | 4 |
| 11 | Case Study | `/case-studies/[slug]` | New | 4 |
| 12 | How It Works | `/how-it-works` | New | 4 |
| 13 | Blog Hub | `/blog` | Rebuild | 5 |
| 14 | Blog Posts | `/blog/[slug]` | New | 5 |
| 15 | Integrations | `/integrations` | New | 5 |
| 16 | Book a Demo | `/demo` | New | 6 |
| 17 | Changelog | `/changelog` | New | 6 |
| 18 | FAQ | `/faq` | New | 6 |
| 19 | About Us | `/about-us` | Revise | 6 |

**Supporting pages** (not in the 19 but must be maintained): `/privacy`, `/terms`, `/contact`, 404 page.

---

## Page-by-Page Strategy

### 1. Homepage (`/`)

**Job:** First impression hub. Answer "what is this" in under 5 seconds. Give a zero-friction entry point (URL input).

**Rationale:** Every channel feeds here: paid ads, organic, referrals, direct, social. If this page doesn't communicate the value prop clearly, no other page matters. The current homepage is generic and misses the research layer entirely, making Grona look like "another AI tool" instead of a CRO platform.

**Objections handled:**
- "What is this?" -> Hero headline + Two Pillars (Research + Optimize) make it concrete
- "Why not just use ChatGPT?" -> Visual product demo shows capabilities ChatGPT can't do (rendering live sites, pulling competitor data, deploying tests). FAQ has an explicit answer
- "Does it work?" -> Metrics bar + case study/testimonial
- "Worth my time to explore?" -> URL input in hero. Paste and go, no signup wall

**Conversion mechanism:** URL input in hero is the single most important conversion element on the entire site. Bypasses "read about it, sign up, figure it out" path entirely. Visitor pastes URL → lands in the sandbox (`app.grona.ai/try/edit/{campaignId}?url=...`) → sees their own site rendered with AI chat ready. No signup required. The bottom CTA section uses a traditional "Start Free" → `app.grona.ai/signup` for visitors who scrolled the entire page and are ready to commit.

**Journey role:** Hub. Every journey starts here or passes through. Homepage -> Features -> Pricing is the primary funnel. Homepage -> URL input -> sandbox (product experience) -> signup is the product-led shortcut.

**Links to:** Features, Pricing, Case study (from testimonial), How It Works (abbreviated section links to full page), FAQ (standalone), Demo (header CTA).

---

### 2. Features (`/features`)

**Job:** Convert curiosity into product confidence. The "show me everything" page.

**Rationale:** Homepage sells the concept, Features sells the product. Two-layer structure (Research: 4 capabilities, Optimize: 3 capabilities) mirrors the product and answers in order: "What should I change?" first, "How do I change it?" second.

**Objections handled:**
- "What can it do?" -> 7 feature cards with specifics, screenshots, example prompts
- "Can it do what I need?" -> Research: analysis, competitors, traffic, ads. Optimize: editing, variations, testing
- "How is this different from [tool]?" -> Bottom CTA with price anchoring (VWO $199/mo, Optimizely $36K/yr, agencies $3K-$10K/mo, Grona free)
- "Is the research useful?" -> "What a $2K-$5K CRO audit would find, in minutes"

**Conversion mechanism:** CTA after each major section (Research, Optimize) and a final CTA with competitor price anchoring. After seeing 7 capabilities, visitor sees what alternatives cost. Grona being free at that moment feels almost irrational.

**The Full Loop section** (5-step workflow: paste URL -> research market -> create variation -> preview -> go live, then repeat) is strategically critical. It demonstrates Grona isn't a point solution but a continuous loop. Justifies ongoing subscription, not one-time use.

**Journey role:** Consideration stage. Typical: Homepage -> Features -> Pricing. Also: Comparison page -> Features (for depth).

**Links to:** Pricing, How It Works, comparison pages (from "vs [tool]" mentions), Integrations (from integrations section).

**Detail:** See [features-page-plan.md](features-page-plan.md).

---

### 3. Pricing (`/pricing`)

**Job:** Convert interest into action. Frame the purchase as an obvious decision.

**Rationale:** Every visitor arrives here eventually. Job isn't just to show prices: make the free tier feel like a no-brainer and paid tiers feel like bargains. Current page works but misses competitor framing, so visitors see $25/mo in isolation instead of against $199/mo (VWO) or $36K/yr (Optimizely).

**Objections handled:**
- "How much?" -> Tier table: campaigns, pageviews, clear limits
- "Free tier?" -> Starter: 1 campaign, 1,000 pageviews, free forever, no credit card
- "Am I locked in?" -> Free tier proves no commitment
- "Worth $25/mo?" -> Framed against competitors and agency costs
- "What if I outgrow it?" -> Scale and Enterprise tiers show growth path

**Conversion mechanism:** Each tier has a direct CTA. Free tier is the primary conversion target. Comparison table below cards for thorough buyers. FAQ catches remaining objections.

**Design decision:** Highlight Growth ($25/mo, or $20.83/mo annual) as recommended tier, not free. Visitors who see "recommended" on Growth still sign up free, but mentally anchor on Growth as where they're headed. Increases upgrade velocity.

**Journey role:** Decision stage. Usually second-to-last page before signup.

**Links to:** Features (for capability detail), Case study (for proof), Demo (Enterprise tier CTA).

---

### 4-6. Comparison Pages (`/compare/vwo`, `/compare/optimizely`, `/compare/google-optimize`)

**Job:** Intercept high-intent searchers already evaluating tools. Convert at 5-15% vs 1-3% for general pages.

**Rationale:** Someone searching "VWO alternative" or "Google Optimize replacement 2026" has budget, urgency, and is actively comparing. Each page is an SEO asset that compounds, ranking for competitor brand + "alternative"/"vs"/"replacement."

**Per-page positioning:**

**vs VWO:** Most direct SMB competitor. VWO costs $199+/mo, needs developers, steep learning curve, no AI generation. Grona starts free, no code, AI does the work. "What VWO does that Grona doesn't" section builds trust through honesty and self-selects: if you need enterprise features, you're not Grona's target.

**vs Optimizely:** Enterprise boogeyman. $36K/yr, 6-month implementation, needs a dev team. Framing: "You don't need Optimizely." Target reader: someone whose boss said "look into Optimizely" and they want a cheaper path.

**vs Google Optimize:** GO sunset in 2023, millions stranded. Broadest addressable audience. Positioning: Grona is what GO would have been if it kept evolving and added AI. Free tier mirrors GO's accessibility.

**Objections handled (all three):**
- "Actually comparable?" -> Feature-by-feature comparison table
- "What do I lose?" -> Honest "what they do that we don't" section
- "What do I gain?" -> AI research, AI generation, chat interface, no code, free tier
- "Trustworthy?" -> Honesty about gaps builds credibility

**Shared page structure:**
1. Hero: "[Competitor] vs Grona" with clear positioning
2. Side-by-side comparison table (features, pricing, ease of use, AI capabilities)
3. What Grona does that [Competitor] doesn't (Research layer, chat interface, AI variations)
4. What [Competitor] does that Grona doesn't (honest, builds trust)
5. "Who should choose Grona" (SMBs, non-technical teams, marketers without dev support)
6. CTA: "Try Grona free" + pricing link

**Conversion mechanism:** URL input after the comparison table. "See the difference yourself. Paste your URL." After the table makes the choice obvious, the sandbox lets them experience it immediately. Secondary: "Start Free" signup for visitors ready to commit.

**Journey role:** Mid-to-bottom funnel entry point. Visitors often skip homepage. Typical: Google -> Comparison -> Features or Pricing -> Sign up.

**Links to:** Features (for depth), Pricing, Case study (proof).

---

### 7-8. Vertical Pages (`/for/ecommerce`, `/for/saas`)

**Job:** Speak to specific industries in their language with their pain points, metrics, and workflows.

**Rationale:** Generic messaging converts poorly in paid ads. When running a Google Ad targeting "shopify conversion optimization," the landing page should mention Shopify, product pages, add-to-cart rates, AOV. Message match between ad and landing page is the single biggest driver of paid conversion rates.

**For E-commerce:** Primary audience. Shopify/WooCommerce owners, 10K-500K visitors, $50K-$5M rev, 1-10 team. Pain: low add-to-cart, high abandonment, no CRO agency budget, no developer. Value: analyze product pages, compare competitor stores, generate better headlines/CTAs, test live. Anchor: "up to 18% conversion lift for e-commerce."

**For SaaS:** Secondary audience. Seed to Series B, landing pages as primary acquisition. Pain: low trial signup, high pricing page bounce, can't iterate fast, dev bandwidth goes to product. Value: analyze competitor landing pages, generate better copy, test variations without engineering. Anchor: "25% average conversion lift for SaaS."

**Objections handled:**
- "Work for my business type?" -> Entire page answers this
- "Understand my industry?" -> Industry-specific language, metrics, use cases
- "Expected results?" -> Industry-specific benchmarks
- "Integrate with my platform?" -> Platform mentions

**Shared page structure:**
1. Hero: Industry-specific headline + pain point
2. Industry-specific problems (3-4 pain points)
3. How Grona solves them (mapped to their workflow)
4. Industry-specific metrics
5. Use cases within the vertical
6. CTA: "Start optimizing your [store/landing pages] free"

**Conversion mechanism:** Industry-specific URL input ("Paste your Shopify store URL" / "Paste your landing page URL") → sandbox. Specificity in the placeholder text increases engagement because it feels purpose-built. Secondary: "See Pricing" link.

**Journey role:** Awareness to consideration. Primary: paid ad landing pages. Secondary: linked from Solutions hub.

**Links to:** Case study, How It Works, Pricing, Integrations (platform-specific).

---

### 9. Solutions Hub (`/solutions`)

**Job:** Route visitors to the right vertical page. Directory, not a conversion page.

**Rationale:** As verticals multiply, visitors who don't see their industry on the homepage need a path. Also captures organic traffic for "CRO solutions" queries. Currently a broken duplicate of Features.

**Conversion mechanism:** Routing page. Cards per vertical with brief value props. Minimize time-to-relevant-content.

**Journey role:** Navigation aid. Low direct conversion, high indirect value.

---

### 10-11. Case Studies (`/case-studies`, `/case-studies/[slug]`)

**Job:** Proof. Transform "we claim X" into "here's exactly how X happened for a real business."

**Rationale:** Trust is the #1 conversion barrier for a new SaaS. Claims feel like marketing. A case study with specific client, numbers, timeline, and process feels like evidence. Even one real case study (40% e-commerce lift) is more valuable than ten testimonial quotes.

Hub exists even with one entry because it signals "we do this regularly." Design should work well with 1-3 entries.

**Case study structure:**
1. Client context (industry, size, challenge)
2. What they tried before
3. What Grona did (specific details)
4. Results (lift %, timeline, statistical confidence)
5. Client quote (if available)
6. CTA

**Objections handled:**
- "Does this work?" -> Yes, here's proof with numbers
- "For someone like me?" -> Industry/size match
- "Realistic results?" -> Specific timeline and lift
- "What's the process?" -> Step-by-step of what happened

**Conversion mechanism:** "Start Free" signup CTA after proof. This is the highest-intent CTA on the site. The case study already did the sandbox's job (demonstrating value with real evidence). Routing to sandbox here risks a rendering failure or anticlimactic 5-message trial undoing the emotional momentum of "40% lift." Capture the conviction with a direct signup. Secondary: "See Pricing" link.

**Journey role:** Consideration. Visitors arrive from homepage testimonial, comparison pages, vertical pages. Typical: ... -> Case study -> Pricing -> Sign up.

---

### 12. How It Works (`/how-it-works`)

**Job:** Full walkthrough for visitors who are interested but confused. Close the gap between "I think I get it" and "I understand exactly what happens."

**Rationale:** Grona does something genuinely new: user-driven research -> chat and point-and-click live editing -> automated A/B testing. That's a lot of concepts. Homepage gives overview. Features gives capabilities. How It Works gives sequential experience.

**Structure:**
1. Overview (full workflow in one visual)
2. Step-by-step with real screenshots (paste URL -> research your market -> create variation (chat or point-and-click) -> preview -> go live)
3. Installation (one snippet, platform-specific guides)
4. CTA

**Objections handled:**
- "Don't fully understand" -> Step-by-step with screenshots
- "What happens after signup?" -> The exact sequence
- "How do I install?" -> One snippet, platform guides
- "How long does it take?" -> "Live A/B test in 5 minutes" demonstrated through the steps

**Conversion mechanism:** URL input at the end. Step-by-step format inherently drives toward the first step (paste URL), which leads directly to the sandbox. "You just saw the 5 steps. Start step 1 right here."

**Journey role:** Education/consideration. Linked from homepage How It Works section (abbreviated), Features, FAQ.

---

### 13-14. Blog (`/blog`, `/blog/[slug]`)

**Job:** Top-of-funnel traffic engine. Educational content that attracts people searching for CRO knowledge, then introduces Grona.

**Rationale:** Targets queries from people who have the problem but don't know Grona. The blog educates, earns trust, and naturally introduces Grona as the tool that does what the article describes.

**Content priority:**

| Post | Target Query | Funnel | Grona Connection |
|------|-------------|--------|-----------------|
| Google Optimize Alternatives 2026 | "google optimize alternative" | Mid | Grona is the top alternative (feeds comparison pages) |
| What to A/B Test First | "what to a/b test" | Top | Grona AI tells you what to test (feeds Features) |
| CRO for Shopify Stores | "shopify cro" | Mid | Grona works with Shopify (feeds /for/ecommerce) |
| AI and Conversion Optimization | "ai cro" | Top | Grona is this trend embodied |
| A/B Testing Without Developers | "a/b testing no code" | Mid | Grona requires zero code (feeds How It Works) |
| Landing Page Optimization | "landing page optimization" | Top | Grona automates these strategies |
| CRO for SaaS | "saas cro" | Mid | Feeds /for/saas |
| How to Read A/B Test Results | "a/b test results" | Top | Grona tracks automatically |

**Conversion mechanism:** Soft CTAs. In-line mentions within the article body ("Grona automates this process") linking to features or homepage. Blog hub has newsletter signup for nurturing. No URL input on blog posts: visitors came for content, not a product trial. A sandbox trigger feels aggressive for someone reading "What to A/B Test First." Let them discover the product naturally through links.

**Journey role:** Awareness entry point. Typical: Google -> Blog -> Homepage or vertical -> Features -> Pricing -> Sign up.

---

### 15. Integrations (`/integrations`)

**Job:** Remove "does it work with my stack" as a purchase objection. Capture "[platform] A/B testing" searches.

**Rationale:** Common blocker. Visitor can be sold on concept, features, price, but if they don't see their CMS listed, they assume incompatibility. Grona's integration model (one snippet, works everywhere) is actually a competitive advantage.

**Structure:**
1. Hero: "Works with your stack. One snippet, any platform."
2. Row 1 CMS: Shopify, WordPress, Webflow, Wix, WooCommerce, Elementor, GTM
3. Row 2 Analytics: GA4, Clarity, HubSpot, Google Ads, Facebook Ads
4. Short install summary per platform
5. CTA

**Objections handled:**
- "Work with Shopify/WordPress/etc.?" -> Yes, here's how
- "Hard to set up?" -> One snippet, per-platform guides
- "Connect to my analytics?" -> GA4, Clarity, HubSpot shown

**Journey role:** Consideration, objection removal. Linked from Features, vertical pages, How It Works.

---

### 16. Book a Demo (`/demo`)

**Job:** Conversion path for visitors who want human contact. Enterprise, agency, or high-spend e-commerce.

**Rationale:** Self-serve works for individuals and small teams. Agency owners evaluating for their client roster, or $5M+ e-commerce brands, want to talk to a person. Without this page, high-value leads have no conversion path except a generic contact form.

**Conversion mechanism:** Cal.com calendar/form. Short form: name, email, company URL, company size. URL field doubles as intent signal and can be pre-analyzed before the demo call.

**Journey role:** Alternative conversion for high-value leads. Linked from Pricing (Enterprise tier), vertical pages, homepage.

---

### 17. Changelog (`/changelog`)

**Job:** Signal product velocity. Answer "is this a real product?"

**Rationale:** For a new product, velocity is a trust signal. Weekly/biweekly updates tell visitors: this team ships. Gives existing users a reason to return. Each entry is indexable content.

**Conversion mechanism:** Indirect. "Try Grona" link to homepage (where the sandbox URL input lives) for new visitors landing here from search. No embedded sandbox on this page.

**Journey role:** Trust building. Linked from footer, About page.

---

### 18. FAQ (`/faq`)

**Job:** Objection handling at scale. Long-tail search capture.

**Rationale:** Every page has a mini-FAQ. Standalone FAQ aggregates all plus deeper technical/operational questions. Captures searches like "does grona work with shopify" or "is grona safe for my website."

**Key categories:**
- Product: "How does it work?", "What can I change?", "Page speed impact?"
- Technical: "Work with [platform]?", "Data safety?", "SEO impact of script?"
- Pricing: "Free tier really free?", "Cancel anytime?"
- Comparison: "Can't I just use ChatGPT?", "How different from Hotjar?"
- Trust: "How long has Grona existed?", "Who uses it?"

**Conversion mechanism:** CTA after FAQ. Each answer links to relevant page (Features, Pricing, How It Works).

**Journey role:** Objection resolution at any stage. Linked from homepage, pricing, footer.

---

### 19. About Us (`/about-us`)

**Job:** Humanize the company. Answer "who's behind this?"

**Rationale:** Especially important for a young company. Visitors want real people behind a product that handles their live website. Lead with mission and traction, not just bios.

**Objections handled:**
- "Real company?" -> Team, mission, traction
- "Can I trust them?" -> Real people, real backgrounds
- "Going to disappear?" -> Mission framing signals long-term commitment

**Conversion mechanism:** Indirect. CTA at bottom, but this page's job is trust.

---

## Strategic Content Repetition

Certain messages must appear on multiple pages because visitors see 3-5 pages, not 19. The goal: every 3-page path includes the core value props, proof points, and objection answers.

### Message 1: "Research + Execution in one platform"
Grona's #1 differentiator. No other SMB tool does both.

| Page | How it appears |
|---|---|
| Homepage | Two Pillars section (Research + Optimize as visual split) |
| Features | Entire page structure: Section 1 = Research, Section 2 = Optimize |
| Comparison pages | "What Grona does that [competitor] doesn't": competitors are research-only or execution-only |
| Vertical pages | Industry framing: "Research your competitors' stores, then optimize yours" |
| How It Works | Sequential flow: research feeding into execution |
| Case study | Story arc: analyzed the site (research), built and tested changes (execution) |

### Message 2: "Free to start / no risk"
The conversion lubricant. Removes every financial objection.

| Page | How it appears |
|---|---|
| Homepage | Hero URL input (sandbox, no signup wall), bottom CTA ("Start free") |
| Features | Bottom CTA: "Grona: Free" after listing competitors' prices |
| Pricing | Starter tier prominent, no credit card, no time limit |
| Comparison pages | "Grona starts free" in every comparison table |
| Vertical pages | "Start optimizing your [store/landing pages] free" |
| Blog posts | In-line CTAs: "Try it free" |
| FAQ | "Is the free tier really free? Yes. No credit card. No time limit." |

"Free" converts differently at different stages. On homepage: "low effort." On comparison page: "why pay $199/mo?" On pricing page: "start here, upgrade later." Same word, different psychological effect.

### Message 3: "40% conversion lift" (proof anchor)
Strongest proof point. One real result beats a hundred claims.

| Page | How it appears |
|---|---|
| Homepage | Metrics bar or case study section |
| Features | Section 5: hero metric with benchmark table |
| Comparison pages | "Real results" section |
| Vertical pages | E-commerce page references directly (it was an e-commerce client) |
| Case study | Full story behind the number |
| Pricing | ROI framing: "$25/mo for a tool that produced 40% lift" |

A visitor who sees "40% lift" once thinks marketing claim. One who sees it on homepage, then the full case study, then on pricing with ROI math thinks: real result. Repetition transforms a claim into a fact.

### Message 4: "No code / no developers needed"
Core emotional unlock. Marketers blocked by dev bottlenecks.

| Page | How it appears |
|---|---|
| Homepage | Hero subtext + How It Works steps |
| Features | Chat + Live Editor card: "Edit through conversation, not code" |
| Comparison pages | "Developer required?" row. Competitors: Yes. Grona: No |
| Vertical pages | "No Shopify developer needed" / "No engineering tickets" |
| How It Works | Entire walkthrough never mentions code |
| FAQ | "Do I need a developer?" -> "No. One snippet (or GTM). Everything else is through chat." |
| Integrations | "One snippet. Any platform." |

Not a feature. Removal of a blocker that defines the target customer's daily frustration.

### Message 5: Competitor price anchoring
Makes Grona pricing feel irrational (in a good way).

| Page | How it appears |
|---|---|
| Features | Bottom CTA: VWO $199/mo, Optimizely $36K/yr, agencies $3K-$10K/mo, Grona: free |
| Pricing | Comparison framing in header or FAQ |
| Comparison pages | Direct price comparison in each table |
| Vertical pages | "Traditional e-commerce CRO agencies charge $3K-$10K/month" |
| Case study | Implied: "Result that would cost $X from an agency" |

Must hit before visitor reaches pricing, so they arrive pre-anchored.

### Message 6: "ChatGPT can't do this"
Most common objection for any AI tool in 2026.

| Page | How it appears |
|---|---|
| Homepage | Implicit in hero (execution not advice), visual in product demo, explicit in FAQ |
| Features | Visual: screenshots show things ChatGPT literally can't do |
| Comparison pages | Implicit: Grona executes, doesn't just suggest |
| Blog | "AI and CRO" post positions difference between AI advice and AI execution |
| How It Works | Workflow shows actions (deploy, track, split) a chatbot can't perform |

Can't say "we're not ChatGPT" too often or it sounds defensive. Differentiation is embedded visually and structurally. FAQ is the only explicit answer.

### Message 7: "Works with any CMS"
Technical compatibility. Small but can be a dealbreaker.

| Page | How it appears |
|---|---|
| Features | Integrations section: platform logo grid |
| Integrations | Full page with per-platform details |
| Vertical pages | "Works with Shopify" on e-commerce page |
| How It Works | Installation step shows one-snippet simplicity |
| FAQ | Per-platform compatibility answers |
| Comparison pages | "Platform support" row in comparison table |

---

## Cross-Linking Map

Every page links to 2-4 other pages (in body content, not just nav/footer) that answer the natural next question.

| Visitor is on... | Might ask... | Link to... |
|---|---|---|
| Homepage | "More about features" | Features |
| Homepage | "How much?" | Pricing |
| Homepage | "Does it work?" | Case study |
| Homepage | "How exactly?" | How It Works |
| Features | "How much?" | Pricing |
| Features | "Walk me through it" | How It Works |
| Features | "vs VWO specifically?" | /compare/vwo |
| Features | "What platforms?" | Integrations |
| Pricing | "What do I get?" | Features |
| Pricing | "Show me proof" | Case study |
| Pricing | "Want to talk" | /demo |
| Comparison page | "Show me everything" | Features |
| Comparison page | "How much?" | Pricing |
| Comparison page | "Proof?" | Case study |
| Vertical page | "Prove it" | Case study |
| Vertical page | "How does it work?" | How It Works |
| Vertical page | "My platform?" | Integrations |
| Blog post | "Tool sounds interesting" | Homepage or vertical |
| Blog post | "Related post" | Another blog post |
| Case study | "I'm convinced, price?" | Pricing |
| Case study | "How do I start?" | Signup ("Start Free") or Pricing |
| How It Works | "I'm ready" | URL input (→ sandbox) or Pricing |
| How It Works | "What can it do?" | Features |
| FAQ | Per-question | Deep links to relevant page per answer |
| Integrations | "My platform, let's go" | URL input (→ sandbox) |
| About | "What does it do?" | Features or Homepage |

---

## User Journey Map

```
AWARENESS (knows the problem, doesn't know Grona)
|
|- Google: "how to improve website conversions"
|  -> Blog post -> Homepage -> Features -> Pricing -> Sign up
|
|- Google: "shopify conversion optimization"
|  -> Blog post -> /for/ecommerce -> Case study -> Pricing -> Sign up
|
|- Google: "vwo alternative"
|  -> /compare/vwo -> Features -> Pricing -> Sign up
|
|- Google: "google optimize replacement"
|  -> /compare/google-optimize -> How It Works -> Pricing -> Sign up
|
|- Google Ad: "AI A/B testing tool"
|  -> Homepage (or vertical page) -> Features -> Pricing -> Sign up
|
|- LinkedIn/referral
|  -> Homepage -> How It Works -> Case study -> Pricing -> Sign up

CONSIDERATION (knows Grona, evaluating)
|
|- Returns to site
|  -> Features -> Case study -> Pricing -> ROI Calculator -> Sign up
|
|- Comparing tools
|  -> /compare/[competitor] -> Pricing -> Sign up
|
|- Checking fit
|  -> /for/[vertical] -> Integrations -> Sign up
|
|- Wants proof
|  -> Case study -> ROI Calculator -> Pricing -> Sign up

CONVERSION (ready to act)
|
|- Product-led (sandbox)
|  -> URL input on any page -> sandbox (app.grona.ai/try/edit/...) -> experience product -> signup later
|
|- Direct signup
|  -> Pricing -> choose tier -> app.grona.ai/signup
|
|- Enterprise/agency
|  -> /demo -> Book a call -> Sales conversation
|
|- Free user upgrading
|  -> Pricing -> Upgrade in app
```

---

## Example Converting Visitor: Sarah

**Profile:** Marketing manager at a DTC skincare brand on Shopify. 50K monthly visitors, 1.8% conversion rate. No developer on staff.

**Day 1 (Awareness):** Googles "how to improve shopify conversion rate." Finds blog post "CRO for Shopify Stores." Post gives actionable tips, mentions Grona. Clicks to `/for/ecommerce`.

**Day 1 (Interest):** E-commerce page speaks her language: product page optimization, checkout improvements, works with Shopify. Sees "up to 18% conversion lift for e-commerce." Clicks to homepage, sees product demo. Thinks "this is way more than ChatGPT." Bookmarks.

**Day 3 (Consideration):** Returns. Goes to `/features` for research capabilities. Projected heatmaps and competitor intelligence catch her eye. Checks `/compare/vwo` (colleague mentioned VWO). Comparison is clear: VWO is $199+/mo, needs dev, no AI generation. Grona starts free.

**Day 3 (Evaluation):** Reads case study: e-commerce brand got 40% lift. Opens ROI calculator: 50K visitors, $65 AOV, 18% lift = $10,530/year additional revenue. Checks pricing: Growth plan is $25/mo ($20.83/mo annual).

**Day 3 (Conversion):** Pastes Shopify URL into homepage hero input. Lands in app.grona.ai. Her site renders live. She researches competitors, checks their ads and traffic data, and asks the AI for suggestions. Within 10 minutes she's created a variation and previewed it. Deploys her first A/B test that afternoon.

**Day 10 (Upgrade):** First test shows 12% lift on add-to-cart. Upgrades to Growth ($25/mo).

**Pages touched:** Blog -> `/for/ecommerce` -> Homepage -> Features -> `/compare/vwo` -> Case study -> ROI Calculator -> Pricing -> Homepage URL input -> app.grona.ai

---

## Homepage 13-Section Plan

| # | Section | Status | ChatGPT Objection Role |
|---|---------|--------|----------------------|
| 1 | Header (expanded nav) | Revise | -- |
| 2 | Hero (new headline + product visual + URL input) | Rewrite | Implicit: positions around execution, not advice |
| 3 | Social Proof (real logos or metric bar) | Revise | -- |
| 4 | Two Pillars: Research + Optimize | New | Visual: capabilities no chatbot can replicate |
| 5 | Product Demo (real screenshots) | New | Visual: seeing the product ends the debate |
| 6 | How It Works (4 steps, tighter copy) | Revise | Reinforces (competitor research in step 2) |
| 7 | Metrics Bar | Activate (already built) | -- |
| 8 | Use Cases | Activate + Revise | -- |
| 9 | Case Study / Testimonial | Replace (real data only) | Trust signal |
| 10 | ROI Calculator | Keep (add CTA button) | -- |
| 11 | FAQ | Add ChatGPT Q&A entry | Explicit: direct answer |
| 12 | Final CTA | Activate (already built) | -- |
| 13 | Footer (expanded) | Revise | -- |

### ChatGPT Differentiation (woven into homepage)
- **Implicit (Hero):** Position around execution. "Paste your URL. Get competitor intel, AI-powered suggestions, and a live experiment."
- **Visual (Two Pillars + Product Demo):** Show capabilities ChatGPT can't do: rendering sites, pulling competitor data, deploying tests.
- **Explicit (FAQ):** "Can't I just use ChatGPT?" ChatGPT suggests. Grona executes the full loop from research to live A/B test.

### Assets Needed
| Asset | Needed For | Priority |
|-------|-----------|----------|
| Product screenshots (chat + live editor) | Hero, Product Demo, Two Pillars | Must have |
| Real client logos | Social Proof | Nice to have |
| Case study details (40% lift client) | Testimonial section | High |
| Competitor research screenshot | Two Pillars (Research) | High |
| Heatmap screenshot | Two Pillars (Research) | High |
| Short product video/GIF | Hero or Product Demo | Nice to have |

---

## Technical Implementation Checklist

Full technical audit playbook is in [website-audit.md](website-audit.md). Covers:

1. **Pages** — existence, template artifacts, composition pattern, data separation
2. **SEO files** — robots.txt, sitemap.xml, llms.txt, canonical URLs
3. **Metadata** — titles, descriptions, OG tags, Twitter cards
4. **Structured data** — Organization, WebSite, SoftwareApplication, FAQPage, HowTo, Article, BreadcrumbList
5. **Performance** — Core Web Vitals, image optimization, font loading, bundle sizes
6. **Favicon** — full icon set + web app manifest
7. **Tracking** — GTM, GA4, Google Ads, FB pixel, LinkedIn pixel, dataLayer events, UTM handling
8. **Conversion tools** — Cal.com, chatbot, newsletter platform, contact form pipeline
9. **GEO/AEO** — content structure for AI extraction, FAQ for featured snippets
10. **Accessibility** — heading hierarchy, alt text, contrast, keyboard nav
11. **404** — custom recovery page
12. **Cross-page** — header nav, footer links, internal linking consistency
13. **Legal** — Cookie consent (GDPR), privacy policy update for new trackers

### Items not in audit (handle separately)
- **Redirect map**: old URLs that change or disappear need 301 redirects
- **Google Search Console**: setup + sitemap submission + indexing verification
- **Bing Webmaster Tools**: secondary but free, powers Copilot search
- **UTM naming convention**: document before running any campaigns
- **Retargeting audiences**: define before launch (all visitors, pricing visitors, blog readers, incomplete signup)
- **Event tracking plan**: map events to GA4 event names before implementation
- **Email platform**: choose and connect before newsletter forms go live
- **CRM/lead routing**: contact form + demo bookings must land somewhere trackable
- **Cross-browser testing**: Safari, Firefox, Chrome, Edge, mobile Safari
- **Link preview testing**: test OG tags on LinkedIn, X, Slack, iMessage before launch
