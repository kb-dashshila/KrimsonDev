import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import SlideFromTop from "@/components/SlideFromTop";

export default function ContactSection() {
  return (
    // Scaled down padding for smaller devices (py-12 to py-20, px-4 to px-6)
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl sm:rounded-[32px] border border-theme bg-panel backdrop-blur-md overflow-hidden">
          {/* Replaced hard-coded lg settings with fluid mobile-first layouts */}
          <SlideFromTop className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 p-5 sm:p-8 lg:p-12">
            <ContactInfo />
            <ContactForm />
          </SlideFromTop>
        </div>
      </div>
    </section>
  );
}
