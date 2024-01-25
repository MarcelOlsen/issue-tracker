"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";

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
  const currentPath = usePathname();
  return (
    <nav>
      <div className="flex flex-row py-6 gap-6 px-6 border-y-2">
        <AiFillBug color="black" size={25} />
        <div className="flex flex-row gap-6">
          {navLinks.map((link) => (
            <Link
              className={classNames({
                "text-zinc-500": currentPath !== link.href,
                "text-zinc-900": currentPath === link.href,
                "hover:text-zinc-800 transition-colors duration-200": true,
              })}
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
