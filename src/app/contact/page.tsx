import type { Metadata } from "next";
import ContactContent from "./contact-content";

export const metadata: Metadata = {
    title: "Contact Grona: Get in Touch",
    description:
        "Have a question about Grona? Reach out to our team. We typically respond within one business day.",
};

export default function ContactPage() {
    return <ContactContent />;
}
