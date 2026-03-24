import { userInfo } from "../config/data";

export default function Profile() {
  return (
    <section
      id="profile"
      className="h-[90vh] flex flex-col md:flex-row items-center justify-center gap-16 px-6 pt-24"
    >
      <img
        src="src/assets/profile-pic.png"
        className="w-64 h-64 object-cover rounded-full shadow-lg border border-black"
      />

      <div className="text-center md:text-left max-w-lg">
        <p className="text-gray-500 mb-2">Hi there, I'm</p>

        <h1 className="text-5xl font-bold leading-tight">{userInfo.name}</h1>

        <p className="text-xl text-gray-500 mt-2">{userInfo.title}</p>

        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <button
            onClick={() => window.open("/assets/resume.pdf")}
            className="px-6 py-3 rounded-full border hover:bg-black hover:text-white transition"
          >
            Download CV
          </button>

          <button
            onClick={() => (window.location.href = "#contact")}
            className="px-6 py-3 rounded-full bg-black text-white hover:opacity-80 transition"
          >
            Contact
          </button>
        </div>

        {/* Socials */}
        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <img
            src="src/assets/linkedin.png"
            className="w-6 cursor-pointer hover:scale-110 transition"
            onClick={() => window.open("https://linkedin.com")}
          />
          <img
            src="src/assets/github.png"
            className="w-6 cursor-pointer hover:scale-110 transition"
            onClick={() => window.open("https://github.com")}
          />
        </div>
      </div>
    </section>
  );
}
