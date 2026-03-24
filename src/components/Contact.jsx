export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

      <div className="flex justify-center gap-6 mt-10">
        <a
          href="mailto:example@gmail.com"
          className="px-6 py-3 border rounded-full hover:bg-black hover:text-white transition flex items-center gap-2"
        >
          <img src="src/assets/email.png" className="w-8 h-8" />
          Email
        </a>

        <a
          href="https://linkedin.com"
          className="px-6 py-3 border rounded-full hover:bg-black hover:text-white transition flex items-center gap-2"
        >
          <img src="src/assets/linkedin.png" className="w-7 h-7" />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
