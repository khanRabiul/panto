import { FaBagShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const navMenuItems = [
  { path: "/", label: "Furniture" },
  { path: "/shop", label: "shop" },
  { path: "/about", label: "about" },
  { path: "/contact", label: "Contact" },
];

const NavMenu = () => {
  return (
    <ul className="flex flex-col md:flex-row items-center space-x-8 gap-8 capitalize">
      {navMenuItems.map((navMenuItem, index) => (
        <li key={index}>
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
  return (
    <header>
      <nav className="max-w-screen-2xl container mx-auto flex justify-between items-center px-4 py-16">
        <div>
          <Link to={"/"} className="font-bold">
            panto
          </Link>
        </div>

        {/* desktop menu */}
        <div className="hidden md:flex">
          <NavMenu />
        </div>

        <div className="hidden md:block cursor-pointer relative">
          <FaBagShopping  className="text-xl"/>
          <sup className="absolute top-0 -right-3 size-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">0</sup>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
