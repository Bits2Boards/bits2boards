import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, CircuitBoard, Clock, Cpu, IndianRupee } from "lucide-react";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/site";

const title = "ARM Cortex-M4 — STM32F407 DISC1 Training | Bit2Boards";
const description =
  "3-month ARM Cortex-M4 and STM32F407 DISC1 training covering bare-metal programming and practical firmware development. Fee ₹12,000.";

export const Route = createFileRoute("/courses/arm-cortex-m4-stm32f407")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/courses/arm-cortex-m4-stm32f407" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/courses/arm-cortex-m4-stm32f407" }],
  }),
  component: CourseTwoPage,
});

const facts = [
  { icon: Clock, label: "Duration", value: "3 Months" },
  { icon: IndianRupee, label: "Fee", value: "₹12,000" },
  { icon: Cpu, label: "Platform", value: "ARM Cortex-M4 · STM32F407 DISC1" },
  { icon: CircuitBoard, label: "Hardware", value: "Provided for practice" },
  { icon: Award, label: "Certificate", value: "Provided upon completion" },
];

function CourseTwoPage() {
  const course = courses[1];

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-14">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
        <div
          className="glow-orb pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-xs tracking-[0.3em] text-primary uppercase">Course 02</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
            ARM Cortex-M4 — STM32F407 DISC1
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground">{course?.description}</p>
          <p className="mt-4 inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm">
            Bare-Metal Programming + Complete ARM Concepts
          </p>

          <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass-card p-5">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <dt className="mt-3 text-xs text-muted-foreground">{label}</dt>
                <dd className="mt-1 text-sm font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Section eyebrow="Positioning" title="Who this course is for">
        <div className="grid gap-6 lg:grid-cols-2">
          <p className="text-base leading-relaxed text-muted-foreground">
            Designed for learners who want to move beyond basic microcontroller programming and
            understand ARM Cortex-M4 architecture and bare-metal firmware development.
          </p>
          <ul className="flex flex-wrap gap-2 self-start">
            {course?.badges.map((b) => (
              <li
                key={b}
                className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section eyebrow="Curriculum" title="Detailed syllabus">
        <div className="glass-card p-8">
          <p className="text-base text-muted-foreground">
            Course curriculum will be updated with the upcoming batch schedule.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="neon-glow">
              <Link to="/contact" hash="enroll">
                Enquire About Course 2
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/courses/microcontroller-c-programming">View Course 01</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}