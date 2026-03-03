"use client";

import { ArrowRight, CheckCircle } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const results = [
    { metric: "Conversion rate", before: "4.69%", after: "6.6%", change: "+40% lift" },
    { metric: "Session depth", before: "5.5 pages", after: "2.3 pages", change: "Visitors converted faster" },
    { metric: "Ad spend", before: "Baseline", after: "Baseline", change: "Zero increase" },
    { metric: "Add-to-cart", before: "Baseline", after: "Increased", change: "Up" },
];

const takeaways = [
    "Small changes (CTA, messaging) can produce outsized results",
    "AI identifies changes a human team might miss",
    "No developer was needed for implementation",
    "Results came in days, not months",
];

const crossLinks = [
    { label: "How it works", href: "/how-it-works" },
    { label: "E-commerce solutions", href: "/for/ecommerce" },
    { label: "See pricing", href: "/pricing" },
];

// ---------------------------------------------------------------------------
// S1: Hero
// ---------------------------------------------------------------------------

const Hero = () => (
    <section className="bg-secondary py-16 pt-32 md:py-24 md:pt-40">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                <Badge size="sm" color="brand">
                    E-commerce / DTC
                </Badge>
                <p className="mt-6 text-display-md font-semibold text-primary md:text-display-lg">
                    +40% conversion lift
                </p>
                <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                    How MouthShield increased product page conversions from 4.69% to 6.6% in 10 days.
                </p>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------------------------------
// S2: The Challenge
// ---------------------------------------------------------------------------

const Challenge = () => (
    <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto max-w-3xl">
                <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">The challenge</h2>
                <div className="mt-6 flex flex-col gap-4 text-md text-secondary">
                    <p>
                        MouthShield, a DTC oral care brand, partnered with King Edward First (SEO agency) to improve
                        product page performance.
                    </p>
                    <p>
                        Their product page converted at 4.69%. Standard for the category, but they knew there was room
                        to grow. The challenge: identifying exactly what to change and testing it without a dedicated
                        development team or expensive CRO agency.
                    </p>
                    <p>
                        Traditional CRO agencies charge $3,000 to $10,000 per month. Enterprise tools like VWO and
                        Optimizely start at $200/month and require technical expertise. They needed a faster, more
                        affordable path to results.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------------------------------
// S3: The Solution
// ---------------------------------------------------------------------------

const Solution = () => (
    <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto max-w-3xl">
                <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">The solution</h2>
                <div className="mt-6 flex flex-col gap-4 text-md text-secondary">
                    <p>
                        <strong className="text-primary">Implementation:</strong> A single JavaScript snippet added to
                        the site. No developer needed.
                    </p>
                    <p>
                        The team used Grona to research the product page, competitor sites, and visitor behavior
                        patterns, then created and tested variations targeting the highest-impact changes.
                    </p>
                    <p>
                        <strong className="text-primary">Changes:</strong> Clearer CTA copy, fewer visual distractions,
                        and improved messaging that better communicated the product's value proposition.
                    </p>
                    <p>
                        Grona's script split traffic between the original page and the optimized variation, tracking
                        conversions automatically.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------------------------------
// S4: The Results
// ---------------------------------------------------------------------------

const Results = () => (
    <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto max-w-3xl">
                <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">The results</h2>
                <p className="mt-4 text-md text-tertiary">Results measured over 10 days.</p>

                <div className="mt-8 overflow-hidden rounded-xl border border-secondary">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="border-b border-secondary bg-secondary">
                                <th className="px-4 py-3 font-medium text-tertiary">Metric</th>
                                <th className="px-4 py-3 font-medium text-tertiary">Before</th>
                                <th className="px-4 py-3 font-medium text-tertiary">After</th>
                                <th className="px-4 py-3 font-medium text-tertiary">Change</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((row, i) => (
                                <tr
                                    key={row.metric}
                                    className={`border-b border-secondary last:border-b-0 ${
                                        i % 2 === 0 ? "bg-primary" : "bg-secondary"
                                    }`}
                                >
                                    <td className="px-4 py-3 font-medium text-primary">{row.metric}</td>
                                    <td className="px-4 py-3 text-secondary">{row.before}</td>
                                    <td className="px-4 py-3 text-secondary">{row.after}</td>
                                    <td className="px-4 py-3 font-semibold text-brand-secondary">{row.change}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------------------------------
// S5: Client Quote
// ---------------------------------------------------------------------------

const ClientQuote = () => (
    <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto max-w-3xl">
                <blockquote className="border-l-4 border-brand-solid pl-6">
                    <p className="text-lg font-medium text-primary md:text-xl">
                        "Partnering with grona.ai to run split tests for MouthShield was seamless and rewarding. We saw
                        real, actionable results and I wouldn't hesitate to work with them again."
                    </p>
                    <footer className="mt-4">
                        <p className="text-md font-semibold text-primary">Peter Lavelle</p>
                        <p className="text-sm text-tertiary">Co-director SEO, King Edward First</p>
                    </footer>
                </blockquote>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------------------------------
// S6: Key Takeaways
// ---------------------------------------------------------------------------

const KeyTakeaways = () => (
    <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto max-w-3xl">
                <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">Key takeaways</h2>
                <ul className="mt-8 flex flex-col gap-4">
                    {takeaways.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                            <CheckCircle className="mt-0.5 size-5 shrink-0 text-fg-success-secondary" />
                            <span className="text-md text-secondary">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------------------------------
// S7: CTA
// ---------------------------------------------------------------------------

const BottomCTA = () => (
    <section className="bg-brand-section py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
            <div className="mx-auto flex max-w-xl flex-col items-center text-center">
                <h2 className="text-display-sm font-semibold text-primary_on-brand md:text-display-md">
                    Get results like these for your site
                </h2>
                <p className="mt-4 text-lg text-tertiary_on-brand md:mt-6 md:text-xl">
                    No credit card required. See what Grona finds in minutes.
                </p>
                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
                    <Button href="https://app.grona.ai/signup" size="lg" color="primary">
                        Start Free
                    </Button>
                    <Button href="/pricing" size="lg" color="secondary">
                        See pricing plans
                    </Button>
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
                    {crossLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-tertiary_on-brand transition-colors hover:text-primary_on-brand"
                        >
                            {link.label}
                            <ArrowRight className="size-3.5" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

// ---------------------------------------------------------------------------
// Page Composition
// ---------------------------------------------------------------------------

export const MouthShieldContent = () => (
    <div className="bg-primary">
        <Hero />
        <Challenge />
        <Solution />
        <Results />
        <ClientQuote />
        <KeyTakeaways />
        <BottomCTA />
    </div>
);
