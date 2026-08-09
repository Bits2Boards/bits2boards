import { createFileRoute } from "@tanstack/react-router";
import { Instructor } from "@/components/sections/Instructor";

const title = "Instructor | Manoharan Jayakumar — Bit2Boards";
const description =
  "Learn embedded systems from Manoharan Jayakumar, an embedded software engineer and founder of Bit2Boards, with industry experience in firmware development.";

export const Route = createFileRoute("/instructor")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/instructor" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/instructor" }],
  }),
  component: InstructorPage,
});

function InstructorPage() {
  return (
    <div className="pt-24">
      <Instructor />
    </div>
  );
}