import { projects } from "../config/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto px-6 py-24 min-h-screen"
    >
      <div className="space-y-2 tracking-wide">
        <p className="text-center text-gray-500">Browse My Recent</p>
        <h1 className="text-4xl text-center font-bold mb-12">Projects</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group rounded-2xl overflow-hidden border hover:shadow-xl transition"
          >
            <img
              src={p.img}
              className="w-full group-hover:scale-105 transition"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold">{p.title}</h2>

              <div className="flex gap-2 mt-3">
                <button className="text-sm px-3 py-1 border rounded hover:bg-black hover:text-white transition">
                  Github
                </button>
                <button className="text-sm px-3 py-1 border rounded hover:bg-black hover:text-white transition">
                  Live
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
