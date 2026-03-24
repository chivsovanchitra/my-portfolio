import { aboutMe } from "../config/data";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24"
    >
      {/* Header */}
      <div className="text-center mb-12 space-y-2">
        <p className="text-gray-500 text-sm sm:text-base tracking-wide">
          Get To Know More
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold">About Me</h1>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Cards FIRST (strong visual anchor) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-10">
          {Object.entries(aboutMe).map(([key, { title, image, desc }]) => (
            <div
              key={key}
              className="group p-6 rounded-2xl border bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="flex flex-col items-center text-center gap-2">
                <img
                  src={image}
                  className="w-8 h-8 mb-1 group-hover:scale-110 transition"
                />
                <h3 className="font-semibold text-base">{title}</h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Description SECOND (better reading width) */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            I am a passionate and self-driven software development student with
            a strong interest in building modern web applications. I have
            experience working in both frontend and backend with modern
            technologies, and I enjoy transforming ideas into clean, functional,
            and user-friendly interfaces.
          </p>
        </div>
      </div>
    </section>
  );
}
