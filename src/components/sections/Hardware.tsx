import { Bug, CheckCircle2, ChevronRight, CircuitBoard, Code2, Cpu, Download } from "lucide-react";
import { Section } from "@/components/Section";

const steps = [
  { label: "CODE", icon: Code2 },
  { label: "COMPILE", icon: Cpu },
  { label: "FLASH", icon: Download },
  { label: "HARDWARE", icon: CircuitBoard },
  { label: "DEBUG", icon: Bug },
  { label: "TEST", icon: CheckCircle2 },
];

export function Hardware() {
  return (
    <div className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <div
        className="glow-orb pointer-events-none absolute top-1/2 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
        aria-hidden="true"
      />
      <div className="relative">
        <Section eyebrow="Hands-On Hardware" title="Don’t Just Watch. Build.">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                At Bit2Boards, students learn by writing code and running it on real hardware.
              </p>
              <ul className="space-y-2 font-display text-lg text-foreground">
                <li>Understand the register.</li>
                <li>Write the firmware.</li>
                <li>Connect the hardware.</li>
                <li>Run the program.</li>
                <li>Debug the problem.</li>
                <li>Make it work.</li>
              </ul>
              <p className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm text-foreground">
                Hardware is provided for practice.
              </p>
            </div>

            <ol className="glass-card flex flex-wrap items-center gap-3 p-6">
              {steps.map(({ label, icon: Icon }, i) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/70 px-4 py-3 text-xs font-semibold tracking-widest">
                    <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                    {label}
                  </span>
                  {i < steps.length - 1 && (
                    <ChevronRight className="h-4 w-4 text-primary/60" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </Section>
      </div>
    </div>
  );
}