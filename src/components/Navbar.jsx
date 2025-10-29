import { useState } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { HiMiniBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const navMenuItems = [
  { path: "/", label: "Furniture" },
  { path: "/shop", label: "shop" },
  { path: "/about", label: "about" },
  { path: "/contact", label: "Contact" },
];

const NavMenu = (toggleMobileMenu) => {
  return (
    <ul className="flex flex-col md:flex-row items-center gap-8 capitalize">
      {navMenuItems.map((navMenuItem, index) => (
        <li key={index} onClick={toggleMobileMenu}>
          <NavLink
            to={navMenuItem.path}
            className={({ isActive }) =>
              isActive ? "text-primary font-bold" : "hover:text-primary"
            }
          >
            {navMenuItem.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className="max-w-screen-2xl container mx-auto flex justify-between items-center px-4 py-16">
        <div>
          <Link to={"/"} className="font-bold">
            panto
          </Link>
        </div>

        {/* mobile hamburger menu */}
        <div
          onClick={toggleMobileMenu}
          className="text-2xl md:hidden cursor-pointer hover:text-primary"
        >
          {isMenuOpen ? null : <HiMiniBars3 />}
        </div>

        {/* desktop menu */}
        <div className="hidden md:flex text-xl">
          <NavMenu />
        </div>

        {/* mobile menus */}
        <div className={`fixed top-0 left-0 bg-black/80 w-full h-screen flex flex-col items-center justify-center gap-8 transform transition ${isMenuOpen ? 'translate-x-0' : '-translate-full'} md:hidden`}>
          <div 
          onClick={toggleMobileMenu}
          className="absolute top-8 right-6 text-xl text-white  cursor-pointer"><RiCloseLargeFill /></div>
          <NavMenu toggleMobileMenu={toggleMobileMenu}/>
        </div>

        <div className="hidden md:block cursor-pointer relative">
          <FaBagShopping className="text-xl " />
          <sup className="absolute top-0 -right-3 size-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
            0
          </sup>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
