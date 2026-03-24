const skills = ["HTML", "CSS", "JavaScript", "React", "Node JS"];

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
      <p className="text-center text-gray-500">Explore My</p>
      <h1 className="text-4xl text-center font-bold mb-12">Experience</h1>

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
