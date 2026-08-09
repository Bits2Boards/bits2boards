import { Github, Linkedin, Mail, MapPin, Phone, User } from "lucide-react";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { instructor, siteSettings } from "@/data/site";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Talk to the instructor">
      <div className="glass-card grid gap-8 p-6 sm:p-8 md:grid-cols-2">
        <ul className="space-y-4 text-sm">
          <li className="flex gap-3">
            <User className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <span className="block text-muted-foreground">Instructor</span>
              {instructor.name}
            </span>
          </li>
          <li className="flex gap-3">
            <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <span className="block text-muted-foreground">Location</span>
              {siteSettings.location}
            </span>
          </li>
          <li className="flex gap-3">
            <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <span className="block text-muted-foreground">Phone</span>
              <a href={siteSettings.phoneHref} className="hover:text-primary">
                {siteSettings.phone}
              </a>
            </span>
          </li>
          <li className="flex gap-3">
            <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <span className="block text-muted-foreground">Email</span>
              <a href={siteSettings.emailHref} className="break-all hover:text-primary">
                {siteSettings.email}
              </a>
            </span>
          </li>
        </ul>

        <div className="flex flex-col justify-center gap-3">
          <Button asChild size="lg" className="neon-glow">
            <a href={siteSettings.phoneHref}>
              <Phone className="mr-2 h-4 w-4" /> Call Now
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href={siteSettings.emailHref}>
              <Mail className="mr-2 h-4 w-4" /> Email Us
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={siteSettings.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={siteSettings.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}