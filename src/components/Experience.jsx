const skills = ["HTML", "CSS", "JavaScript", "React", "Node JS"];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <h1 className="text-3xl text-center font-bold mb-10">Experience</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill) => (
          <div key={skill} className="border p-4 rounded-xl w-40 text-center">
            <h3>{skill}</h3>
            <p className="text-gray-500">Intermediate</p>
          </div>
        ))}
      </div>
    </section>
  );
}
