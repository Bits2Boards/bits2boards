import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "Instructor", to: "/instructor" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8"
      >
        <Link to="/" className="flex min-w-0 items-center gap-2" aria-label="Bit2Boards home">
          <img src={logo.url} alt="Bit2Boards logo" className="h-9 w-auto shrink-0 sm:h-11" />
        </Link>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild size="sm" className="ml-2 hidden neon-glow sm:inline-flex">
            <Link to="/contact" hash="enroll">
              Enroll Now
            </Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  className="block rounded-md px-2 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full">
                <Link to="/contact" hash="enroll" onClick={() => setOpen(false)}>
                  Enroll Now
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}