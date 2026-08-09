import { Link } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { TopicIcon } from "@/components/TopicIcon";
import { Button } from "@/components/ui/button";
import { embeddedCModules, microcontrollerTopics } from "@/data/site";

export function CurriculumPreview() {
  return (
    <Section
      id="curriculum"
      eyebrow="Curriculum Preview"
      title="What you actually build"
      subtitle="A look at the hands-on microcontroller topics and the Embedded C programming modules."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold">Microcontroller Topics</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {microcontrollerTopics.slice(0, 8).map((t) => (
              <li
                key={t.n}
                className="flex items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-3"
              >
                <TopicIcon name={t.icon} className="h-4 w-4 shrink-0 text-primary" />
                <span className="min-w-0 truncate text-sm">{t.name}</span>
              </li>
            ))}
          </ul>
          <Button asChild variant="secondary" className="mt-6">
            <Link to="/courses/microcontroller-c-programming">View full curriculum</Link>
          </Button>
        </div>

        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold">Embedded C Programming</h3>
          <ol className="mt-5 space-y-3">
            {embeddedCModules.slice(0, 5).map((m) => (
              <li key={m.title} className="rounded-xl border border-border bg-background/50 px-4 py-3">
                <p className="font-display text-xs tracking-widest text-primary">{m.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{m.topics.join(" · ")}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-muted-foreground">
            9 modules in total — see the full course page for details.
          </p>
        </div>
      </div>
    </Section>
  );
}