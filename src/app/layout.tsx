import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { RouteProvider } from "@/providers/router-provider";
import { Theme } from "@/providers/theme";
import "@/styles/globals.css";
import { cx } from "@/utils/cx";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://grona.ai"),
    title: "Grona: Turn more visitors into customers",
    description: "Improve your website by chatting with AI. Chat-first CRO tool that helps you convert more visitors, no coding required.",
    icons: {
        icon: [
            { url: "https://grona.ai/g_favicon.svg", type: "image/svg+xml" },
            { url: "https://grona.ai/g_favicon.png", type: "image/png", sizes: "32x32" },
        ],
        apple: "https://grona.ai/g_favicon.png",
    },
};

export const viewport: Viewport = {
    themeColor: "#054B3A",
    colorScheme: "light",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || "GTM-NXBH5J6M"} />
            <body className={cx(inter.variable, "bg-primary antialiased")}>
                <RouteProvider>
                    <Theme>{children}</Theme>
                </RouteProvider>
            </body>
        </html>
    );
}
