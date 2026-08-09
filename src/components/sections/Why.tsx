import { Section } from "@/components/Section";

const cards = [
  ["01", "Industry-Oriented", "Training is designed around practical embedded software development."],
  [
    "02",
    "Register-Level Programming",
    "Understand what happens inside the microcontroller instead of depending only on high-level libraries.",
  ],
  ["03", "Hands-On Hardware", "Students get hardware for practical learning and experimentation."],
  ["04", "Practical C Programming", "Build the C fundamentals required for real firmware development."],
  [
    "05",
    "Learn From an Industry Engineer",
    "Training is guided by an embedded software professional working in the industry.",
  ],
  [
    "06",
    "Build Real Understanding",
    "Focus on debugging, hardware interaction, peripheral programming and firmware concepts.",
  ],
];

export function Why() {
  return (
    <Section id="why" eyebrow="Why Bit2Boards" title="Why Learn at Bit2Boards?">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(([n, title, body]) => (
          <article key={n} className="glass-card p-6">
            <span className="font-display text-sm text-primary">{n}</span>
            <h3 className="mt-3 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}