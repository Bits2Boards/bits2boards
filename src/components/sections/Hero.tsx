import { Link } from "@tanstack/react-router";
import { ArrowRight, Cpu } from "lucide-react";
import instructorImg from "@/assets/instructor.jpg.asset.json";
import { Button } from "@/components/ui/button";

const floatingLabels = [
  { text: "Embedded C", pos: "left-0 top-10" },
  { text: "PIC16F877A", pos: "right-0 top-24" },
  { text: "ARM Cortex-M4", pos: "left-0 top-1/2" },
  { text: "Bare-Metal", pos: "right-0 top-1/2" },
  { text: "Firmware", pos: "left-2 bottom-16" },
  { text: "RTOS", pos: "right-4 bottom-24" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="glow-orb pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full"
        aria-hidden="true"
      />
      <div
        className="glow-orb pointer-events-none absolute top-40 right-0 h-80 w-80 rounded-full opacity-70"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="font-display text-sm tracking-[0.35em] text-primary">BIT2BOARDS</p>
          <p className="mt-2 text-xs tracking-[0.3em] text-muted-foreground uppercase">
            “Bits to Boards” · Industry-Oriented Embedded Systems Training
          </p>

          <h1 className="mt-6 text-4xl leading-[1.08] font-bold sm:text-5xl lg:text-6xl">
            Learn Embedded Systems.
            <br />
            <span className="text-gradient">Build Real Hardware.</span>
            <br />
            Become Industry Ready.
          </h1>

          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Practical, hands-on training in Embedded C, Microcontrollers, ARM Cortex-M4 and
            Bare-Metal Firmware Development.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="neon-glow">
              <Link to="/courses">
                Explore Courses <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact" hash="enroll">
                Join a Course
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link to="/contact">Talk to Instructor</Link>
            </Button>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
            {[
              ["3 Months", "Program duration"],
              ["2", "Structured courses"],
              ["Hardware", "Provided for practice"],
            ].map(([v, k]) => (
              <div key={k}>
                <dt className="font-display text-lg font-bold text-foreground">{v}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{k}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div
            className="grid-bg absolute inset-0 rounded-3xl opacity-60"
            aria-hidden="true"
          />
          <div
            className="glow-orb absolute inset-8 rounded-full opacity-80"
            aria-hidden="true"
          />
          <div className="relative mx-6 overflow-hidden rounded-3xl border border-border bg-card neon-glow sm:mx-10">
            <img
              src={instructorImg.url}
              alt="Manoharan Jayakumar, Embedded Software Engineer and instructor at Bit2Boards"
              className="h-full w-full object-cover"
              width={640}
              height={960}
              fetchPriority="high"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-4 pt-16">
              <p className="font-display text-sm font-semibold">Manoharan Jayakumar</p>
              <p className="text-xs text-muted-foreground">
                Embedded Software Engineer · Founder / Instructor
              </p>
            </div>
          </div>

          {floatingLabels.map((l, i) => (
            <span
              key={l.text}
              style={{ animationDelay: `${i * 0.6}s` }}
              className={`animate-float absolute ${l.pos} hidden rounded-full border border-border bg-card/80 px-3 py-1.5 text-[11px] font-medium text-foreground backdrop-blur-md sm:inline-flex`}
            >
              <Cpu className="mr-1.5 h-3 w-3 text-primary" aria-hidden="true" />
              {l.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}