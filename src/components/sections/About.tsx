import { ArrowDown } from "lucide-react";
import { Section } from "@/components/Section";

const flow = [
  "C Programming",
  "Microcontroller",
  "Registers",
  "Peripherals",
  "Communication",
  "Real Hardware",
  "Firmware",
];

export function About() {
  return (
    <Section id="about" eyebrow="About Bit2Boards" title="From Bits to Boards">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Bit2Boards is an industry-oriented Embedded Systems training institute focused on
            developing practical firmware engineering skills.
          </p>
          <p>
            Our training goes beyond theoretical concepts. Students learn how microcontrollers work
            internally, how registers control peripherals, how C code interacts with hardware, and
            how embedded communication protocols are implemented in real systems.
          </p>
          <p className="text-foreground">The goal is simple:</p>
          <p className="font-display text-xl font-semibold text-gradient">
            Learn → Build → Debug → Deploy.
          </p>
        </div>

        <div className="relative">
          <div className="grid-bg absolute inset-0 rounded-3xl opacity-40" aria-hidden="true" />
          <ol className="glass-card relative space-y-1 p-6">
            {flow.map((step, i) => (
              <li key={step}>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-3">
                  <span className="font-display text-xs text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium">{step}</span>
                </div>
                {i < flow.length - 1 && (
                  <div className="flex justify-center py-1" aria-hidden="true">
                    <ArrowDown className="h-4 w-4 text-primary" />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}