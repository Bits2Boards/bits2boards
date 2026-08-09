import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { courses, type Course } from "@/data/site";

const one = courses[0] as Course;
const two = courses[1] as Course;

const rows: [string, string, string][] = [
  ["Duration", one.duration, two.duration],
  ["Fee", one.price, two.price],
  ["Hardware", "Provided", "Provided"],
  ["Certificate", "Yes", "Yes"],
  ["Main Platform", one.platform, two.platform],
  ["Focus", one.focus, two.focus],
];

export function Comparison() {
  return (
    <Section eyebrow="Compare" title="Course Comparison">
      <div className="glass-card overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
          <caption className="sr-only">Comparison of Bit2Boards courses</caption>
          <thead>
            <tr className="border-b border-border">
              <th scope="col" className="p-4 font-semibold">
                Feature
              </th>
              <th scope="col" className="p-4 font-semibold">
                {one.title}
              </th>
              <th scope="col" className="p-4 font-semibold">
                {two.title}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([f, a, b]) => (
              <tr key={f} className="border-b border-border/60">
                <th scope="row" className="p-4 font-medium text-muted-foreground">
                  {f}
                </th>
                <td className="p-4">{a}</td>
                <td className="p-4">{b}</td>
              </tr>
            ))}
            <tr>
              <td className="p-4" />
              <td className="p-4">
                <Button asChild size="sm" className="neon-glow">
                  <a href="#enroll">Enroll Now</a>
                </Button>
              </td>
              <td className="p-4">
                <Button asChild size="sm" className="neon-glow">
                  <a href="#enroll">Enroll Now</a>
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  );
}