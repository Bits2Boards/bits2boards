import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/sections/About";
import { Courses } from "@/components/sections/Courses";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Why } from "@/components/sections/Why";

const title = "Bit2Boards | Industry-Oriented Embedded Systems Training";
const description =
  "Learn Embedded C, PIC16F877A, ARM Cortex-M4, STM32 and Bare-Metal Firmware Development through practical, industry-oriented training at Bit2Boards.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Bit2Boards",
          description,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Karaikudi",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
          telephone: "+91 94873 75373",
          email: "jrmano3639@gmail.com",
          sameAs: [
            "https://www.linkedin.com/in/manoharanjr/",
            "https://github.com/manoharanjr1424",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <About />
      <Courses />
      <Why />
    </>
  );
}
