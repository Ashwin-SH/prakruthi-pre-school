"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#programs", label: "Programs" },
  { href: "#admission", label: "Admission" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl">🌿</span>
            <div>
              <span className="text-xl font-bold text-primary">Prakruthi</span>
              <span className="text-sm block -mt-1 text-gray-500 font-medium">
                Pre School
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/916361587391?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Prakruthi%20Pre%20School"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-primary-dark transition-colors"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block text-gray-700 hover:text-primary font-medium"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/916361587391?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Prakruthi%20Pre%20School"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-primary text-white px-5 py-2 rounded-full font-semibold text-center hover:bg-primary-dark transition-colors"
            >
              Enroll Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
