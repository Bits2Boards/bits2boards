import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";
import { courses, siteSettings } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <img src={logo.url} alt="Bit2Boards logo" className="h-12 w-auto" loading="lazy" />
          <p className="mt-4 font-display text-sm tracking-[0.3em] text-primary">
            {siteSettings.tagline}
          </p>
          <p className="mt-1 text-xs tracking-[0.25em] text-muted-foreground">
            {siteSettings.secondaryTagline}
          </p>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Industry-Oriented Embedded Systems Training
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Navigate</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {(
              [
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/courses", label: "Courses" },
                { to: "/instructor", label: "Instructor" },
                { to: "/faq", label: "FAQ" },
                { to: "/contact", label: "Contact" },
              ] as const
            ).map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Courses</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {courses.map((c) => (
              <li key={c.slug}>
                <Link to={c.path} className="transition-colors hover:text-primary">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-sm font-semibold text-foreground">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={siteSettings.phoneHref} className="transition-colors hover:text-primary">
                {siteSettings.phone}
              </a>
            </li>
            <li>
              <a href={siteSettings.emailHref} className="transition-colors hover:text-primary">
                {siteSettings.email}
              </a>
            </li>
            <li>{siteSettings.location}</li>
            <li>
              <a
                href={siteSettings.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={siteSettings.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Bit2Boards. All Rights Reserved.</p>
          <p>Built for Embedded Systems Learners.</p>
        </div>
      </div>
    </footer>
  );
}