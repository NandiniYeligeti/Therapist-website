'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-[#D0634A]">
          Dr. Serena Blake
        </Link>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-[#D0634A] transition">About</a></li>
          <li><a href="#services" className="hover:text-[#D0634A] transition">Services</a></li>
          <li><a href="#faq" className="hover:text-[#D0634A] transition">FAQ</a></li>
          <li><a href="#contact" className="hover:text-[#D0634A] transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
