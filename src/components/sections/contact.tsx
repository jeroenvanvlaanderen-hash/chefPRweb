
import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <ContactForm />
      </div>
    </section>
  );
}
