import { Link } from "@tanstack/react-router";
import { BadgeIndianRupee, Clock, Cpu, Layers } from "lucide-react";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/site";

export function Courses() {
  return (
    <Section
      id="courses"
      eyebrow="Our Courses"
      title="Two focused programs. Real hardware."
      subtitle="Structured, practical embedded systems training designed around firmware development."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {courses.map((c) => (
          <article key={c.slug} className="glass-card flex flex-col p-7">
            <div className="flex items-start justify-between gap-4">
              <span className="font-display text-4xl font-bold text-primary/40">{c.index}</span>
              <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                {c.level}
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-bold">{c.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.description}</p>

            <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-border py-5 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="text-xs text-muted-foreground">Duration</dt>
                  <dd className="font-medium">{c.duration}</dd>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <BadgeIndianRupee className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="text-xs text-muted-foreground">Price</dt>
                  <dd className="font-medium">{c.price}</dd>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="text-xs text-muted-foreground">Technology</dt>
                  <dd className="truncate font-medium">{c.technology}</dd>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="text-xs text-muted-foreground">Payment</dt>
                  <dd className="font-medium">During the course term</dd>
                </div>
              </div>
            </dl>

            <ul className="mt-5 flex flex-wrap gap-2">
              {c.badges.map((b) => (
                <li
                  key={b}
                  className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-foreground"
                >
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-3 pt-1">
              <Button asChild variant="secondary">
                <Link to={c.path}>View Course Details</Link>
              </Button>
              <Button asChild className="neon-glow">
                <Link to="/contact" hash="enroll">
                  Enroll Now
                </Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}