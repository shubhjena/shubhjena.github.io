import React from "react";

import ContactForm from "../components/ContactForm";
import Social from "../components/Social";

export default function Contact() {
  return (
    <div
      className="flex gap-16 min-h-screen min-w-max bg-tertiary md:px-20 px-5 pt-16 pb-24"
      id="contact"
    >
      <div className="flex flex-col justify-between">
        <div className="w-80">
          <h1 className="text-left text-3xl pb-4">hey there,</h1>
          <p className="text-left">If you have inquiries about my work, collaboration opportunities, or just want to say hello, I'd love to hear from you. Feel free to use the form to send me a message. Your feedback and thoughts are highly appreciated!</p>
        </div>
        <Social/>
      </div>
      <ContactForm />
      
    </div>
  );
}
