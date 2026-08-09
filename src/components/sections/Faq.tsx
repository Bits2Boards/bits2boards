import { Section } from "@/components/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/site";

export function Faq() {
  return (
    <Section id="faq" eyebrow="FAQ" title="Frequently asked questions">
      <Accordion type="single" collapsible className="glass-card divide-y divide-border px-6">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`item-${i}`} className="border-none">
            <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}