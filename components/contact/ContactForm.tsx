import { Send } from "lucide-react";
import FormInput from "./FormInput";

export default function ContactForm() {
  return (
    <form className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <FormInput placeholder="Your Name" />
        <FormInput placeholder="Your Email" />
      </div>

      <FormInput placeholder="Subject" />

      <FormInput placeholder="Your Message" textarea />

      <button
        type="submit"
        className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105"
      >
        Send Message
        <Send size={20} />
      </button>
    </form>
  );
}
