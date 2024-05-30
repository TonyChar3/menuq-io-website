import { useState } from "react";
import NavLink from "./responsive-nav-link";
import Link from "next/link";

export default function Navbar() {
  const [show_hamburger, setShowHamburger] = useState(false);

  return (
    <>
      <div className="w-full">
        <nav className="relative w-full p-2 flex justify-between items-center border-b border-gray-300 shadow-md shadow-gray-500">
          {/* Logo */}
          <Link href="/">
            <h1 className="px-2 font-bold text-2xl md:text-4xl md:py-2 lg:text-3xl lg:px-4">
              MenuQ
            </h1>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden lg:flex flex-row justify-end items-center lg:w-[65%] transition-all ease duration-300">
            <div className="flex flex-row justify-center items-center">
              <NavLink text="Home" link="/" onclick={() => null} />
              <NavLink
                text="Product"
                link="/product-section"
                onclick={() => null}
              />
              <NavLink text="About" link="/about" onclick={() => null} />
              <NavLink text="Contact" link="/contact" onclick={() => null} />
            </div>
            <div className="w-1 h-10 mx-6 bg-gray-300 rounded-lg"></div>
            <div className="flex flex-row justify-center items-center">
              <NavLink
                text="Connect"
                link="http://localhost:3001"
                onclick={() => null}
              />
              <NavLink
                text="Register"
                link="http://localhost:3001"
                onclick={() => null}
              />
            </div>
          </ul>

          {/* Hamburger menu */}
          <div className="lg:hidden">
            <i
              onClick={() =>
                setShowHamburger((show_hamburger) => !show_hamburger)
              }
              className={`bi bi-${
                show_hamburger ? "x-lg" : "list"
              } px-1 text-3xl md:text-4xl md:px-3`}
            ></i>
          </div>
        </nav>

        {/* Shadow div for the drawer */}
        <div
          className={`absolute w-full h-full bg-black bg-opacity-10 ${
            show_hamburger ? "" : "hidden"
          }`}
        ></div>

        {/* Mobile menu drawer */}
        <div
          className={`absolute h-[100%] w-[80%] md:w-[60%] ${
            show_hamburger ? "-translate-x-0 z-10" : "-translate-x-[200%]"
          } bg-white shadow-md shadow-gray-300 transition-all ease duration-300`}
        >
          <ul className="w-full border-b border-gray-300 py-2">
            <NavLink
              text="Home"
              link="/"
              onclick={() => setShowHamburger(false)}
            />
            <NavLink
              text="Product"
              link="/product-section"
              onclick={() => setShowHamburger(false)}
            />
            <NavLink
              text="About"
              link="/about"
              onclick={() => setShowHamburger(false)}
            />
            <NavLink
              text="Contact"
              link="/contact"
              onclick={() => setShowHamburger(false)}
            />
          </ul>
          <ul>
            <NavLink
              text="Connect"
              link="http://localhost:3001"
              onclick={() => setShowHamburger(false)}
            />
            <NavLink
              text="Register"
              link="http://localhost:3000"
              onclick={() => setShowHamburger(false)}
            />
          </ul>
        </div>
      </div>
    </>
  );
}
