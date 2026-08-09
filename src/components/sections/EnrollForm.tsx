import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { z } from "zod";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { courseOptions } from "@/data/site";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  full_name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20, "Phone number is too long"),
  city: z.string().trim().max(100).optional(),
  course: z.string().min(1, "Select a course"),
  education: z.string().trim().max(150).optional(),
  learning_mode: z.string().trim().max(50).optional(),
  message: z.string().trim().max(1000).optional(),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function EnrollForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(raw);

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setStatus("loading");
    const d = parsed.data;
    const { error } = await supabase.from("enquiries").insert({
      full_name: d.full_name,
      email: d.email,
      phone: d.phone,
      course: d.course,
      city: d.city ?? null,
      education: d.education ?? null,
      learning_mode: d.learning_mode ?? null,
      message: d.message ?? null,
    });
    if (error) {
      setStatus("error");
      setErrorMessage("We couldn't submit your request. Please try again or call us directly.");
      return;
    }
    setStatus("success");
    form.reset();
  }

  const field = (name: keyof Errors) =>
    errors[name] ? (
      <p className="mt-1 text-xs text-destructive" role="alert">
        {errors[name]}
      </p>
    ) : null;

  return (
    <Section
      id="enroll"
      eyebrow="Enrollment"
      title="Ready to Start Your Embedded Systems Journey?"
      subtitle="Share your details and the instructor will get back to you about the upcoming batch."
    >
      <div className="glass-card p-6 sm:p-8">
        {status === "success" ? (
          <div className="flex flex-col items-start gap-4 py-10 text-left">
            <CheckCircle2 className="h-10 w-10 text-primary" aria-hidden="true" />
            <h3 className="text-2xl font-semibold">Enrollment request received</h3>
            <p className="max-w-xl text-sm text-muted-foreground">
              Your details have been saved. The instructor will contact you using the phone number
              or email you provided. For anything urgent, call {""}
              <a className="text-primary" href="tel:+919487375373">
                +91 94873 75373
              </a>
              .
            </p>
            <Button variant="secondary" onClick={() => setStatus("idle")}>
              Submit another request
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="full_name">Full Name</Label>
              <Input id="full_name" name="full_name" autoComplete="name" className="mt-2" required />
              {field("full_name")}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" autoComplete="email" className="mt-2" required />
              {field("email")}
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" type="tel" autoComplete="tel" className="mt-2" required />
              {field("phone")}
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" name="city" autoComplete="address-level2" className="mt-2" />
              {field("city")}
            </div>
            <div>
              <Label htmlFor="course">Course Interested In</Label>
              <select
                id="course"
                name="course"
                required
                defaultValue=""
                className="mt-2 h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <option value="" disabled>
                  Select a course
                </option>
                {courseOptions.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              {field("course")}
            </div>
            <div>
              <Label htmlFor="education">Current Education / Profession</Label>
              <Input id="education" name="education" className="mt-2" />
              {field("education")}
            </div>
            <div>
              <Label htmlFor="learning_mode">Preferred Learning Mode</Label>
              <select
                id="learning_mode"
                name="learning_mode"
                defaultValue=""
                className="mt-2 h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <option value="">No preference</option>
                <option value="Offline">Offline</option>
                <option value="Online">Online</option>
                <option value="Weekend">Weekend</option>
              </select>
              {field("learning_mode")}
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={4} className="mt-2" />
              {field("message")}
            </div>

            {status === "error" && (
              <p className="text-sm text-destructive sm:col-span-2" role="alert">
                {errorMessage}
              </p>
            )}

            <div className="sm:col-span-2">
              <Button type="submit" size="lg" className="neon-glow" disabled={status === "loading"}>
                {status === "loading" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Request Enrollment
              </Button>
            </div>
          </form>
        )}
      </div>
    </Section>
  );
}