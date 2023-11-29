import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_akrohn8",
        "template_rfobeju",
        {
          from_name: form.name,
          to_name: "Shubhashish",
          from_email: form.email,
          to_email: "shubh.jena@gmail.com",
          subject: form.subject,
          message: form.message,
        },
        "JVBoQru-zhHxGvrMm"
      )
      .then(
        () => {
          alert(
            "Thank you for contacting, your message was sent successfully!"
          );
          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          e.target.reset();
        },
        (error) => {
          alert(
            "Some error occured, please try again! If error persists you can email me at shubh.jena@gmail.com"
          );
          console.log(error.text);
          // You can add code here to handle errors, e.g., show an error message.
        }
      );
  };
  return (
    <div className="flex flex-col">
      <h1 className="text-left text-3xl pb-4">contact form</h1>
      <form
        className="flex flex-col flex-1 gap-1.5 w-96 p-6 bg-white rounded-lg shadow-md"
        onSubmit={sendEmail}
      >
        <input
          className="border-gray w-full px-3 py-1.5 mb-4 border rounded"
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
          required
        />
        <input
          className="border-gray w-full px-3 py-1.5 mb-4 border rounded"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          required
        />

        <input
          className="border-gray w-full px-3 py-1.5 mb-4 border rounded"
          type="text"
          id="subject"
          name="subject"
          placeholder="How may I help you?"
          onChange={handleChange}
          maxlength="100"
          required
        />
        <textarea
          className="border-gray w-full px-3 py-1.5 mb-4 border rounded flex-1"
          id="message"
          name="message"
          rows="4"
          required
          placeholder="Leave a message and your contact details"
          onChange={handleChange}
          maxlength="1000"
        ></textarea>

        <button
          className="w-auto px-6 py-2 font-bold text-white bg-accent rounded hover:bg-black mx-auto"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}
