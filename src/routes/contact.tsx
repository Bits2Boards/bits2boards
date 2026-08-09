import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/sections/Contact";
import { EnrollForm } from "@/components/sections/EnrollForm";

const title = "Contact & Enroll | Bit2Boards";
const description =
  "Request enrollment or talk to the instructor about upcoming Bit2Boards embedded systems batches in Karaikudi, Tamil Nadu.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-24">
      <EnrollForm />
      <Contact />
    </div>
  );
}