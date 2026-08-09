import { Award, CircuitBoard } from "lucide-react";
import { Section } from "@/components/Section";

export function Certificate() {
  return (
    <Section eyebrow="Certificate + Hardware" title="Learn. Practice. Get Certified.">
      <div className="grid gap-6 md:grid-cols-2">
        <article className="glass-card p-8">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background text-primary">
            <CircuitBoard className="h-6 w-6" aria-hidden="true" />
          </span>
          <h3 className="mt-5 text-xl font-semibold">Hands-On Hardware</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Hardware is provided to students for practical learning and experimentation.
          </p>
        </article>
        <article className="glass-card p-8">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background text-primary">
            <Award className="h-6 w-6" aria-hidden="true" />
          </span>
          <h3 className="mt-5 text-xl font-semibold">Course Certificate</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Students receive a certificate upon successful completion of the course.
          </p>
        </article>
      </div>
    </Section>
  );
}