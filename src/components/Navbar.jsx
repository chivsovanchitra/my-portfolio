import { useState } from "react";
import { userInfo } from "../config/data";
import { menus } from "../config/appSettings";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        <div className="text-xl font-semibold tracking-tight">
          {userInfo.fullName}
        </div>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {menus.map((item) => (
            <li key={item.value}>
              <a
                href={`#${item.value}`}
                className="hover:text-black text-gray-600 transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          {menus.map((item) => (
            <a
              key={item.value}
              href={`#${item.value}`}
              onClick={() => setOpen(false)}
              className="block text-gray-700"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}