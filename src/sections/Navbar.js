'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a
            href={href}
            className="nav-li_a relative group py-1.5 px-3.5 rounded-lg hover:bg-[#527A55]/10 text-[#1F2922] font-semibold transition-all duration-300"
            onClick={onClick}
          >
            {name}
            <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#527A55] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3.5 transition-all duration-300">
      <div className="max-w-7xl mx-auto bg-[#F8F7F2]/85 backdrop-blur-xl border border-[#D6C2A5]/70 rounded-2xl shadow-warm-md">
        <div className="flex justify-between items-center py-3 px-6 mx-auto">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="w-2.5 h-2.5 rounded-full bg-[#527A55] shadow-forest-glow animate-pulse" />
            <span className="font-bold text-xl tracking-tight text-[#1F2922] group-hover:text-[#527A55] transition-colors duration-300 font-generalsans">
              Naitik<span className="text-[#527A55]">.</span>Jain
            </span>
          </Link>

          <button
            onClick={toggleMenu}
            className="text-[#1F2922] hover:text-[#527A55] p-2 rounded-lg hover:bg-[#527A55]/10 focus:outline-none sm:hidden flex items-center justify-center transition-colors"
            aria-label="Toggle menu"
          >
            <img src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'} alt="toggle" className="w-6 h-6" style={{ filter: 'brightness(0.2)' }} />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>

        <div className={`nav-sidebar rounded-b-2xl ${isOpen ? 'max-h-96 opacity-100 py-3' : 'max-h-0 opacity-0 py-0'}`}>
          <nav className="px-5">
            <NavItems onClick={closeMenu} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
