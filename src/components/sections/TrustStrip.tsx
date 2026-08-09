import { Award, CalendarClock, Code2, CircuitBoard, Factory } from "lucide-react";

const items = [
  { icon: CalendarClock, label: "3-Month Programs" },
  { icon: CircuitBoard, label: "Hands-on Hardware" },
  { icon: Factory, label: "Industry-Oriented Training" },
  { icon: Code2, label: "Practical Coding" },
  { icon: Award, label: "Certificate Provided" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-card/40">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-8 sm:px-6 md:grid-cols-5 lg:px-8">
        {items.map(({ icon: Icon, label }) => (
          <li key={label} className="flex min-w-0 items-center gap-3 px-2 py-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-background text-primary">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0 text-sm font-medium">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}