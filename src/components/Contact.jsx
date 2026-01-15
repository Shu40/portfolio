import { useRef } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        toast.success("Message sent successfully 🚀");
        form.current.reset();
      })
      .catch(() => {
        toast.error("Failed to send message ❌");
      });
  };

  return (
    <section id="contact" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold text-accent mb-6">
        Contact Me
      </h2>

      <p className="text-gray-400 mb-10">
        Let’s discuss Cloud & DevOps opportunities
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md mx-auto bg-white/10 backdrop-blur border border-white/10 p-8 rounded-xl space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded bg-black/40 border border-white/20 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded bg-black/40 border border-white/20 outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          className="w-full p-3 rounded bg-black/40 border border-white/20 outline-none"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-accent text-black font-semibold rounded-lg hover:scale-105 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
