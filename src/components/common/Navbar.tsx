"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Image from "next/image";
import LogoImg from "@/assets/images/websiteLogo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/creators", label: "Creators" },
];

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-1.5"
      aria-label="ByteSpace home"
    >
      <Image
        src={LogoImg}
        alt="ByteSpace logo"
        width={500}
        height={500}
        priority
        className="h-14 w-40"
      />
    </Link>
  );
}

function GridLines() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 grid grid-cols-4 lg:grid-cols-12"
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className={`border-l border-white/15 ${i >= 4 ? "hidden lg:block" : ""}`}
        />
      ))}
    </div>
  );
}

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#0033E6]">
      <div className="relative h-16 border-x border-white/15">
        <GridLines />

        {/* Desktop: content aligned to the 12-column grid */}
        <div className="relative hidden h-full grid-cols-12 items-center lg:grid">
          <div className="col-span-3 col-start-2">
            <Logo />
          </div>

          <ul className="col-span-3 col-start-6 flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-sm transition-colors duration-200 ${
                      isActive ? "text-white" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="col-span-2 col-start-10 flex items-center justify-end gap-6">
            <Link
              href="/login"
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              Join Us
            </Link>
            <Link
              href="/cart"
              aria-label="Cart"
              className="text-white/90 transition-colors hover:text-white"
            >
              <HiOutlineShoppingBag size={18} />
            </Link>
          </div>
        </div>

        {/* Mobile */}
        <div className="relative flex h-full items-center justify-between px-4 lg:hidden">
          <Logo />
          <div className="flex items-center gap-5">
            <Link href="/cart" aria-label="Cart" className="text-white">
              <HiOutlineShoppingBag size={20} />
            </Link>
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-white"
              aria-label="Open menu"
              aria-expanded={isSidebarOpen}
            >
              <FaBars size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-full bg-[#0033E6] transition-transform duration-300 ease-in-out lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5">
          <div className="mb-8 flex items-center justify-between">
            <Logo />
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-white"
              aria-label="Close menu"
            >
              <FaTimes size={22} />
            </button>
          </div>

          <div className="flex flex-col">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`border-b border-white/15 py-4 transition-colors ${
                    isActive ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-6 flex gap-3">
              <Link
                href="/login"
                onClick={() => setIsSidebarOpen(false)}
                className="flex-1 rounded-md border border-white/30 py-3 text-center text-white"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={() => setIsSidebarOpen(false)}
                className="flex-1 rounded-md bg-[#C8F03C] py-3 text-center font-medium text-[#0033E6]"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
        />
      )}
    </nav>
  );
}
