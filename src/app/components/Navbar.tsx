"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme toggle logic
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-4 z-50 w-full flex justify-center pointer-events-none">
      <div
        className={`relative flex items-center h-[70px] w-[90vw] max-w-7xl px-6 rounded-2xl bg-black/60 pointer-events-auto transition-shadow ${
          scrolled ? "shadow-[0_0_0_1px_rgba(255,255,255,0.7)]" : ""
        }`}
      >
        {/* Logo (always visible, left side) */}
        <Link href="/" className="flex items-center mr-4 z-50">
          {/* Placeholder SVG logo */}
          <span className="w-8 h-8 flex items-center justify-center rounded-full text-white font-bold text-xl">S</span>
        </Link>

        {/* Centered Nav Links + Theme Button */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-8 items-center hidden md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`font-medium transition-colors
                  ${isActive ? "text-slate-900 dark:text-slate-100 font-bold" : "text-slate-700 dark:text-slate-300"}
                  hover:text-slate-500 dark:hover:text-slate-300
                `}
              >
                {link.label}
              </a>
            );
          })}
          {/* {mounted && (
            <button
              className="p-2 rounded-lg transition-colors hover:text-slate-500 dark:hover:text-slate-300"
              aria-label="Toggle theme"
              onClick={() => setIsDark((prev) => !prev)}
              type="button"
            >
              {isDark ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
          )} */}
        </div>

        {/* mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer ml-auto"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black rounded-b-2xl flex flex-col items-center gap-4 py-4 z-40">
            {navLinks.map(item => (
              <div key={item.label} onClick={toggleMobileMenu}>
                <Link href={item.href}>{item.label}</Link>
              </div>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar; 