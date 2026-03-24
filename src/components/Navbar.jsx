import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <nav className="hidden md:flex justify-around items-center h-[17vh]">
        <div className="text-2xl">John Doe</div>
        <ul className="flex gap-8 text-xl">
          {["about", "experience", "projects", "contact"].map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="hover:text-gray-500">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile */}
      <nav className="flex md:hidden justify-between p-4">
        <div className="text-xl">John Doe</div>

        <div>
          <button onClick={() => setOpen(!open)}>☰</button>

          {open && (
            <ul className="absolute right-4 bg-white shadow p-4">
              {["about", "experience", "projects", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setOpen(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}
