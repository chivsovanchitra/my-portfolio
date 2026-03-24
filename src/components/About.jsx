import { aboutMe } from "../config/data";

export default function About() {
  return (
    <section id="about" className="w-full px-4 sm:px-6 py-20 sm:py-24 h-[70vh]">
      <div className="space-y-2 tracking-wide">
        <p className="text-center text-gray-500 text-sm sm:text-base">
          Get To Know More
        </p>

        <h1 className="text-3xl sm:text-4xl text-center font-bold mb-10 sm:mb-12">
          About Me
        </h1>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:justify-center lg:gap-16 items-center">
        <img
          src="assets/about-pic.png"
          className="w-48 sm:w-64 md:w-72 lg:w-80 rounded-2xl shadow-lg object-cover"
        />

        <div className="w-full max-w-xl text-center lg:text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
            {Object.entries(aboutMe).map(([key, { title, image, desc }]) => (
              <div
                key={key}
                className="p-5 rounded-2xl border shadow-sm hover:shadow-md transition text-center"
              >
                <img src={image} className="w-7 h-7 mx-auto mb-2" />
                <h3 className="font-semibold text-sm sm:text-base">{title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">{desc}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            I am a passionate and self-driven software development student with
            a strong interest in building modern web applications. I have
            experience working with technologies such as React, Node.js, and
            SQL, and I enjoy transforming ideas into clean, functional, and
            user-friendly interfaces.
          </p>
        </div>
      </div>
    </section>
  );
}
