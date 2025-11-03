"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Smooth-scroll to an element ID with header offset + small nudge up
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    // h-28 = 7rem ≈ 112px fixed header
    const HEADER_OFFSET = 112;
    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

    window.scrollTo({ top: y, behavior: "smooth" });

    // Micro-adjust up a touch for polished alignment
    setTimeout(() => {
      window.scrollBy({ top: -20, behavior: "smooth" });
    }, 500);

    // Close mobile menu if open
    setOpen(false);
  };

  return (
    <header className="sfixed top-0 left-0 right-0 z-50 bg-black shadow-lg">
      <div className="mx-auto w-full max-w-[1200px] px-12">
        {/* TOP BAR */}
        <div className="flex items-center h-28">
          {/* LEFT — LOGO */}
          <div className="flex items-center">
            <Link href="#top" aria-label="tamateco" className="shrink-0">
              <Image
                src="https://tamate.co/wp-content/uploads/2025/03/logo.svg"
                alt="tamateco"
                width={1500}
                height={700}
                className="h-20 w-auto"
                priority
              />
            </Link>
          </div>

          {/* SPACER */}
          <div className="hidden md:block flex-1" />

          {/* RIGHT — NAV + JP/EN (desktop) */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            <nav className="flex items-center gap-10 text-white text-[18px] tracking-wide font-light">
              <Link href="#top" className="hover:text-gray-300 transition">
                TOP
              </Link>

              {/* ABOUT — smooth scroll with offset */}
              <a
                href="#About"
                className="hover:text-gray-200 transition"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("About");
                }}
              >
                About
              </a>

              {/* These still use anchors normally; you can convert them the same way if needed */}
              <a href="#Company" className="hover:text-gray-200 transition">
                Company
              </a>
              <a href="#Contact" className="hover:text-gray-200 transition">
                Contact
              </a>
            </nav>
          </div>

          {/* MOBILE BURGER BUTTON */}
          <button
            className="md:hidden text-white ml-auto"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-black text-white overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="mx-auto w-full max-w-[1200px] px-10 pb-6">
          <nav className="flex flex-col gap-5 text-[20px] tracking-wide pt-4">
            <Link
              href="#top"
              className="py-2 hover:text-gray-300"
              onClick={() => setOpen(false)}
            >
              TOP
            </Link>

            {/* ABOUT — smooth scroll with offset (mobile) */}
            <a
              href="#About"
              className="py-2 hover:text-gray-300"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("About");
              }}
            >
              About
            </a>

            <a
              href="#Company"
              className="py-2 hover:text-gray-300"
              onClick={() => setOpen(false)}
            >
              Company
            </a>
            <a
              href="#Contact"
              className="py-2 hover:text-gray-300"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
