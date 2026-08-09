import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/sections/About";
import { Certificate } from "@/components/sections/Certificate";
import { Comparison } from "@/components/sections/Comparison";
import { Hardware } from "@/components/sections/Hardware";
import { Why } from "@/components/sections/Why";

const title = "About Bit2Boards | From Bits to Boards";
const description =
  "Bit2Boards is an industry-oriented embedded systems training institute teaching Embedded C, microcontrollers and bare-metal firmware with real hardware practice.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-24">
      <About />
      <Why />
      <Hardware />
      <Certificate />
      <Comparison />
    </div>
  );
}