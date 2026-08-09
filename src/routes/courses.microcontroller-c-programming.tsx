import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, CircuitBoard, Clock, Cpu, IndianRupee } from "lucide-react";
import { Section } from "@/components/Section";
import { TopicIcon } from "@/components/TopicIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { courses, embeddedCModules, microcontrollerTopics } from "@/data/site";

const title = "Microcontroller & C Programming — PIC16F877A Training | Bit2Boards";
const description =
  "3-month PIC16F877A microcontroller and Embedded C training with register-level programming, peripheral interfacing and hands-on hardware. Fee ₹7,000.";

export const Route = createFileRoute("/courses/microcontroller-c-programming")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/courses/microcontroller-c-programming" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/courses/microcontroller-c-programming" }],
  }),
  component: CourseOnePage,
});

const facts = [
  { icon: Clock, label: "Duration", value: "3 Months" },
  { icon: IndianRupee, label: "Fee", value: "₹7,000" },
  { icon: Cpu, label: "Microcontroller", value: "PIC16F877A" },
  { icon: CircuitBoard, label: "Hardware", value: "Provided for practice" },
  { icon: Award, label: "Certificate", value: "Provided upon completion" },
];

function CourseOnePage() {
  const course = courses[0];

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-14">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
        <div
          className="glow-orb pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-xs tracking-[0.3em] text-primary uppercase">Course 01</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
            Microcontroller &amp; C Programming
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground">
            {course?.description}
          </p>
          <p className="mt-4 inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm">
            Register-Level Programming + Embedded C + Hands-on Hardware
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

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="neon-glow">
              <Link to="/contact" hash="enroll">
                Enroll Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Talk to Instructor
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Curriculum"
        title="Microcontroller Topics"
        subtitle="Fourteen hands-on topics built and tested on real hardware."
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {microcontrollerTopics.map((t) => (
            <li key={t.n} className="glass-card p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-border bg-background text-primary">
                  <TopicIcon name={t.icon} className="h-4 w-4" />
                </span>
                <span className="font-display text-xs text-primary">{t.n}</span>
                <h3 className="min-w-0 truncate text-sm font-semibold">{t.name}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{t.note}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="Syllabus"
        title="Embedded C Programming"
        subtitle="Nine structured modules covering the C foundations required for firmware development."
      >
        <Accordion type="single" collapsible className="glass-card divide-y divide-border px-6">
          {embeddedCModules.map((m, i) => (
            <AccordionItem key={m.title} value={`m-${i}`} className="border-none">
              <AccordionTrigger className="text-left text-base">{m.title}</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {m.topics.map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="text-primary">—</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg" className="neon-glow">
            <Link to="/contact" hash="enroll">
              Enroll Now
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/courses/arm-cortex-m4-stm32f407">View Course 02</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}