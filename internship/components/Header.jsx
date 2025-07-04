"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-700 to-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold tracking-widest uppercase">
          ✨ Quote Genie
        </h1>
        <nav className="space-x-4 text-sm md:text-base">
          <Link href="/" className="hover:underline hover:text-yellow-300 transition">
            Home
          </Link>
          <Link href="/about" className="hover:underline hover:text-yellow-300 transition">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
