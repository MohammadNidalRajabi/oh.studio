// NavBar.tsx
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { SlClose } from "react-icons/sl";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Work", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "Careers", href: "#careers" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center gap-4 p-2">
      {/* Menu Items */}
      <div
        className={`fixed right-25 flex gap-2 items-center transition-all duration-300 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium  hover:bg-[#EBEBEB] hover:text-black transition"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Trigger Button */}
        {
          open?<SlClose  size={20} onClick={() => setOpen(!open)}
        className="p-2 cursor-pointer w-10 h-10 bg-[#EBEBEB] rounded-full flex items-center justify-center fixed right-10"
        aria-label="Toggle menu" /> : <FiMenu   size={20} onClick={() => setOpen(!open)}
        className="p-2 cursor-pointer w-10 h-10 bg-[#EBEBEB] rounded-full flex items-center justify-center fixed right-10"
        aria-label="Toggle menu" />
        }
      
    </div>
  );
}
