import { Menu, ShoppingBag, X } from "lucide-react";
import React, { useState } from "react";

import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "COLLECTIONS", href: "/products" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* --- LOGO SECTION --- */}
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="/">
              <div className="bg-black h-12 w-12 flex items-center justify-center text-center p-1">
                <span className="text-[10px] text-amber-200 font-serif leading-tight">
                  KAF
                  <br />
                  TAN
                </span>
              </div>
            </Link>
          </div>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href} // React Router uses 'to', not 'href'
                  className="text-sm font-medium tracking-[0.15em] text-stone-600 hover:text-black transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <button className="text-stone-600 hover:text-black transition-colors">
                <ShoppingBag size={20} />
              </button>
            </div>
          </div>

          {/* --- MOBILE MENU BUTTON --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-800 hover:text-black focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {isOpen && (
        <div className="md:hidden bg-stone-50 border-t border-stone-200">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-3 py-4 text-base font-medium tracking-widest text-stone-700 hover:bg-stone-100 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
