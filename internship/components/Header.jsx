"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header
      className="bg-gradient-to-r from-purple-700 to-blue-600 text-white py-4 shadow-md"
      role="banner"
      aria-label="Site Header"
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold tracking-widest uppercase">
          <Link href="/" className="hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-sm">
            ✨ Quote Genie
          </Link>
        </h1>
        <nav aria-label="Main Navigation" className="space-x-4 text-sm md:text-base">
          <Link
            href="/"
            className="hover:underline hover:text-yellow-300 transition focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-sm"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:underline hover:text-yellow-300 transition focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-sm"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
