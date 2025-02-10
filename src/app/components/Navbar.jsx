"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon, PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "i love you", path: "#about" },
  { title: "i love you", path: "#projects" },
  { title: "i love you", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to toggle music
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] flex justify-between items-center px-4 py-2">
      <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
        From your Nishu
      </Link>

      <div className="flex items-center">
        {/* Music Toggle Button */}
        <button
          onClick={toggleMusic}
          className="text-white border border-white rounded-full p-2 mr-4"
        >
          {isPlaying ? <PauseIcon className="h-6 w-6" /> : <PlayIcon className="h-6 w-6" />}
        </button>

        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>

        <div className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {navbarOpen && <MenuOverlay links={navLinks} />}

      {/* Hidden Audio Player */}
      <audio ref={audioRef} loop>
        <source src="/audio/song.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </nav>
  );
};

export default Navbar;
