export default function Profile() {
  return (
    <section
      id="profile"
      className="flex flex-col md:flex-row items-center justify-center gap-10 min-h-screen"
    >
      <img src="src/assets/profile-pic.png" className="w-64 h-64 rounded-full" />

      <div className="text-center">
        <p className="font-semibold">Hello, I'm</p>
        <h1 className="text-4xl font-bold">John Doe</h1>
        <p className="text-xl">Frontend Developer</p>

        <div className="flex gap-4 justify-center mt-4">
          <button
            onClick={() => window.open("/assets/resume.pdf")}
            className="border px-4 py-2 rounded-full"
          >
            Download CV
          </button>

          <button
            onClick={() => (window.location.href = "#contact")}
            className="bg-black text-white px-4 py-2 rounded-full"
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}
