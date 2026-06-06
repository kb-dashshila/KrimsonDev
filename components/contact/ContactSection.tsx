import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-[32px] border border-slate-800 bg-[#050b22]/80 backdrop-blur-md overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-10 p-8 lg:p-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
