import { createFileRoute } from "@tanstack/react-router";
import { Courses } from "@/components/sections/Courses";
import { CurriculumPreview } from "@/components/sections/CurriculumPreview";

const title = "Courses | Embedded C, PIC16F877A & ARM Cortex-M4 — Bit2Boards";
const description =
  "Two structured 3-month embedded systems courses: Microcontroller & C Programming on PIC16F877A, and ARM Cortex-M4 firmware development on STM32F407.";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/courses" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <div className="pt-24">
      <Courses />
      <CurriculumPreview />
    </div>
  );
}