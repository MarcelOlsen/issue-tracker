import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const navLinks = [
  {
    title: "Dashboard",
    href: "/",
  },
  {
    title: "Issues",
    href: "/issues",
  },
];

export const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-row py-6 gap-6 px-6 border-y-2">
        <AiFillBug color="black" size={25} />
        <div className="flex flex-row gap-6">
          {navLinks.map((link) => (
            <Link
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
              href={link.href}
              key={link.href}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
