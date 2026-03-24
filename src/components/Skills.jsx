import { skills } from "../config/data";

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24">
      <div className="space-y-2 tracking-wide">
        <p className="text-center text-gray-500">Explore My</p>
        <h1 className="text-4xl text-center font-bold mb-12">Skills</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-6 py-3 rounded-full border text-sm font-medium hover:bg-black hover:text-white transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
