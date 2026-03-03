export const ProductDemoSection = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto max-w-3xl text-center mb-10 md:mb-14">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">See it in action</h2>
                    <p className="mt-4 text-lg text-tertiary md:text-xl">
                        Paste a URL. Chat with AI. Watch your site change live.
                    </p>
                </div>
                <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-secondary bg-white shadow-lg" style={{ padding: "10px" }}>
                    <div className="overflow-hidden rounded-xl bg-white">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="block h-auto"
                            style={{ margin: "-6px", width: "calc(100% + 12px)", maxWidth: "none" }}
                            src="/assets/images/homepage/Demo.mp4"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
