import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Logo from "../components/ui/Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="">
        <div className="relative mx-auto px-6 md:px-18 py-3 flex items-center justify-between">

          {/* LEFT SIDE: logo + links */}
          <div className="flex items-center gap-14">
            {/* Logo */}
            <Logo />

            {/* Desktop menu (hidden on mobile) */}
            <ul className="hidden md:flex gap-8 text-gray-700 items-center absolute left-1/2 transform -translate-x-[60%] space-x-28">
              <li>Home</li>
              <li>Explore</li>
              <li>My Orders</li>
              <li>Account</li>
            </ul>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop button */}
            <button className="hidden md:block">Login</button>

            {/* Hamburger button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              {isOpen ? <IoClose /> : <RxHamburgerMenu />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="md:hidden">
            <p>Home</p>
            <p>Explore</p>
            <p>My Orders</p>
            <p>Account</p>

            <button className="text-start">Login</button>
          </div>
        )}
      </nav>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Navbar;
