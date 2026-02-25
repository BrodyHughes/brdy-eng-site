"use client";

import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black px-6 py-8 text-white md:px-10">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <Logo size="sm" showText />

        <p className="font-mono text-xs text-gray-500">
          &copy; {currentYear}
        </p>
      </div>
    </footer>
  );
}
