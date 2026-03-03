export const faqCategories = [
    {
        label: "Product",
        items: [
            {
                question: "How does Grona work?",
                answer: "Paste your URL, and Grona renders your site live. Research competitors, create variations using chat or point-and-click, and deploy A/B tests. The AI handles the technical work. You describe what you want to improve.",
            },
            {
                question: "What can I change on my website?",
                answer: "Headlines, CTAs, hero sections, product descriptions, layouts, images, pricing page copy, and more. If it's on your webpage, you can test a variation of it.",
            },
            {
                question: "Will the Grona script slow down my website?",
                answer: "No. The script loads asynchronously and is under 15KB. It does not block page rendering or affect your Core Web Vitals scores.",
            },
            {
                question: "How long does it take to see results?",
                answer: "You can launch a live A/B test in under 5 minutes. Meaningful data depends on your traffic volume, but many tests reach statistical significance within 1 to 2 weeks.",
            },
        ],
    },
    {
        label: "Technical",
        items: [
            {
                question: "Does Grona work with Shopify?",
                answer: "Yes. Paste the Grona snippet into your theme.liquid file or use Google Tag Manager. Works with any Shopify theme.",
            },
            {
                question: "Does Grona work with WordPress?",
                answer: "Yes. Add the snippet via a header injection plugin or paste it directly into your theme header. Compatible with any WordPress setup.",
            },
            {
                question: "Does Grona work with Webflow?",
                answer: "Yes. Add the snippet in Webflow's custom code settings under the head tag. Takes less than a minute.",
            },
            {
                question: "Is my data safe?",
                answer: "Your data is encrypted in transit and at rest. Grona does not store visitor personal information. The script collects anonymous session data for A/B test analysis only.",
            },
            {
                question: "Will A/B testing hurt my SEO?",
                answer: "No. Grona uses client-side rendering for variations. Search engines see your original page. There is no cloaking, no duplicate content, and no impact on your rankings.",
            },
            {
                question: "Can I use Google Tag Manager?",
                answer: "Yes. Add the Grona snippet as a custom HTML tag in GTM. It works the same way as a direct script installation.",
            },
        ],
    },
    {
        label: "Pricing",
        items: [
            {
                question: "Is the free tier really free?",
                answer: "Yes. No credit card required, no time limit. You get 1 campaign and up to 1,000 pageviews per month. Enough to run your first A/B test and see results.",
            },
            {
                question: "Can I cancel anytime?",
                answer: "Yes. All plans are month-to-month with no long-term contracts. Cancel anytime from your account settings.",
            },
            {
                question: "What happens when I hit my pageview limit?",
                answer: "Your test pauses automatically. No extra charges, no surprises. Data is preserved. You can upgrade to continue or wait for the next billing cycle.",
            },
        ],
    },
    {
        label: "Comparison",
        items: [
            {
                question: "Can't I just use ChatGPT for this?",
                answer: "ChatGPT gives advice. Grona executes: it renders your live site, pulls competitor data, generates visual variations, deploys A/B tests, and tracks results. ChatGPT can tell you to change a headline. Grona changes it, tests it, and tells you which version won.",
            },
            {
                question: "How is Grona different from Hotjar?",
                answer: "Hotjar records behavior: heatmaps, session replays, scroll depth. Grona acts on those insights. It does research and execution. You see where users drop off, then create and test a variation to fix it.",
            },
            {
                question: "How does Grona compare to VWO?",
                answer: "VWO requires developers to build variations and starts at $199 per month. Grona uses AI to let you create and deploy variations through chat, starting with a free tier. No code, no agency fees.",
            },
        ],
    },
    {
        label: "Trust",
        items: [
            {
                question: "How long has Grona existed?",
                answer: "Grona was founded by three CRO consultants who spent over a decade optimizing websites for global brands. The platform encodes the methodology they used for clients like DHL, Mazda, and bp.",
            },
            {
                question: "Who uses Grona?",
                answer: "Marketing teams, e-commerce managers, and founders across industries including retail, SaaS, and professional services. Our case studies show results across different business types.",
            },
            {
                question: "What if I need help?",
                answer: "Every paid plan includes email support. Growth and Enterprise plans include a dedicated onboarding call and priority support. You can also book a demo for a live walkthrough.",
            },
        ],
    },
];

export const faqItems: { question: string; answer: string }[] =
    faqCategories.flatMap((category) => category.items);
