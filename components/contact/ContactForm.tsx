import { Send } from "lucide-react";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function ContactForm() {
  return (
    <form className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <Input placeholder="Your Name" name="name" />
        <Input placeholder="Your Email" name="email" type="email" />
      </div>

      <Input placeholder="Subject" name="subject" />

      <Input placeholder="Your Message" textarea name="message" />

      <Button type="submit" className="px-8 py-4 text-lg">
        Send Message
        <Send size={20} />
      </Button>
    </form>
  );
}
