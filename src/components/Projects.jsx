const projects = [
  { title: "Project One", img: "src/assets/project-1.png" },
  { title: "Project Two", img: "src/assets/project-2.png" },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen p-10">
      <h1 className="text-3xl text-center font-bold">Projects</h1>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {projects.map((p) => (
          <div key={p.title} className="border p-4 rounded-2xl">
            <img src={p.img} className="rounded-xl" />
            <h2 className="text-xl mt-2">{p.title}</h2>

            <div className="flex gap-2 mt-2">
              <button className="border px-3 py-1">Github</button>
              <button className="border px-3 py-1">Live</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
