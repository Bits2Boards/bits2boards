import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title) && (
          <div className="max-w-3xl">
            {eyebrow && (
              <p className="font-display text-xs tracking-[0.3em] text-primary uppercase">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h2>
            )}
            {subtitle && <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>}
          </div>
        )}
        <div className={eyebrow || title ? "mt-12" : ""}>{children}</div>
      </div>
    </section>
  );
}