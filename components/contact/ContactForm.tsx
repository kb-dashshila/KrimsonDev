import { Send } from "lucide-react";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function ContactForm() {
  return (
    // Enabled full vertical expansion capabilities on mobile layouts
    <form className="space-y-5 flex flex-col justify-center h-full">
      {/* Changes column behaviour from 1 column on mobile to 2 columns on tablets and up */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input placeholder="Your Name" name="name" />
        <Input placeholder="Your Email" name="email" type="email" />
      </div>

      <Input placeholder="Subject" name="subject" />

      <Input placeholder="Your Message" textarea name="message" />

      {/* Button expands full-width on mobile, auto width on desktop */}
      <div className="w-full sm:w-auto flex justify-start">
        <Button
          type="submit"
          className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg flex items-center justify-center gap-2"
        >
          Send Message
          <Send size={18} />
        </Button>
      </div>
    </form>
  );
}
