import { Link } from "@tanstack/react-router";
import { Briefcase, Github, GraduationCap, Linkedin, MapPin, ShieldCheck } from "lucide-react";
import instructorImg from "@/assets/instructor.jpg.asset.json";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { instructor, siteSettings } from "@/data/site";

export function Instructor() {
  return (
    <Section id="instructor" eyebrow="Instructor" title="Learn from an industry engineer">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative">
          <div className="grid-bg absolute inset-0 rounded-3xl opacity-40" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-3xl border border-border neon-glow">
            <img
              src={instructorImg.url}
              alt={`${instructor.name}, ${instructor.role}`}
              className="h-full w-full object-cover"
              width={640}
              height={960}
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold sm:text-3xl">{instructor.name}</h3>
          <p className="mt-2 text-primary">{instructor.role}</p>
          <p className="text-sm text-muted-foreground">{instructor.subRole}</p>

          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <Briefcase className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>
                {instructor.experience}. {instructor.currentRole}
              </span>
            </li>
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{instructor.location}</span>
            </li>
            <li className="flex gap-3">
              <GraduationCap className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>
                {instructor.education.degree}
                <br />
                {instructor.education.institute} · {instructor.education.years}
              </span>
            </li>
          </ul>

          <h4 className="mt-8 text-sm font-semibold">Professional areas</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {instructor.areas.map((a) => (
              <li
                key={a}
                className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground"
              >
                {a}
              </li>
            ))}
          </ul>

          <h4 className="mt-8 text-sm font-semibold">Certifications</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {instructor.certifications.map((c) => (
              <li key={c} className="flex gap-3">
                <ShieldCheck className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="neon-glow">
              <a href={siteSettings.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-1 h-4 w-4" /> LinkedIn Profile
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href={siteSettings.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1 h-4 w-4" /> GitHub Profile
              </a>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/contact">Contact Instructor</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <h3 className="font-display text-xs tracking-[0.3em] text-primary uppercase">
          Technical Experience
        </h3>
        <ul className="mt-5 flex flex-wrap gap-3">
          {instructor.skills.map((s) => (
            <li
              key={s}
              className="rounded-full border border-primary/45 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground shadow-[0_0_20px_-6px_var(--primary)]"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}