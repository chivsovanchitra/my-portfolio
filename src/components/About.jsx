export default function About() {
  return (
    <section id="about" className="px-6 py-20">
      <p className="text-center">Get To Know More</p>
      <h1 className="text-3xl text-center font-bold mb-10">About Me</h1>

      <div className="flex flex-col md:flex-row gap-10 items-center">
        <img src="src/assets/about-pic.png" className="w-64 rounded-2xl" />

        <div>
          <div className="flex gap-4 mb-6 flex-wrap">
            <div className="border p-4 rounded-2xl text-center">
              <h3>Experience</h3>
              <p>2+ years Frontend</p>
            </div>

            <div className="border p-4 rounded-2xl text-center">
              <h3>Education</h3>
              <p>Bachelor Degree</p>
            </div>
          </div>

          <p className="text-gray-600">Your description here...</p>
        </div>
      </div>
    </section>
  );
}
