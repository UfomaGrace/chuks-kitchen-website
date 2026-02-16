import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../components/Logo";

export default function Footer() {
  return (
    <div className="text-[#ffffff]/70 bg-[#70402f] py-8">
      <div className="grid grid-cols-8 px-16 ">
        <div className="col-span-1">
          <Logo className="mb-3" />
          <p className="text-white">
            Bringing the authentic flavors of Nigerian home cooking to your
            table, with passion and care.
          </p>
        </div>
        <div></div>

        <div className="col-span-2">
          <h2 className="text-white text-xl mb-3">Quick Links</h2>
          <div className="flex flex-col text-sm space-y-2">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `transition-all duration-300 cursor-pointer hover:-translate-y-0.5 ${
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `transition-all duration-300 cursor-pointer hover:-translate-y-0.5 ${
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                }`
              }
            >
              Explore
            </NavLink>
            <NavLink
              to="/order"
              className={({ isActive }) =>
                `transition-all duration-300 cursor-pointer hover:-translate-y-0.5 ${
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                }`
              }
            >
              My Order
            </NavLink>
            <NavLink
              to="/account"
              className={({ isActive }) =>
                `transition-all duration-300 cursor-pointer hover:-translate-y-0.5 ${
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                }`
              }
            >
              Account
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-all duration-300 cursor-pointer hover:-translate-y-0.5 ${
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>

        <div className="col-span-2">
          <h2 className="text-white text-xl mb-3">Contact Us</h2>
          <div className="flex flex-col space-y-2 text-sm">
            <p>+234 801 234 5678</p>
            <p>hello@chukskitchen.com</p>
            <p>123 Taste Blvd, Lagos, Nigeria</p>
          </div>
        </div>

        <div className="flex flex-col col-span-2 text-sm space-y-2">
          <Link className="text-[#ffffff]/70 transition-transform hover:text-white hover:-translate-y-0.5 duration-500">Facebook</Link>
          <Link className="text-[#ffffff]/70 transition-transform hover:text-white hover:-translate-y-0.5 duration-500">Twitter</Link>
          <Link className="text-[#ffffff]/70 transition-transform hover:text-white hover:-translate-y-0.5 duration-500">LinkedIn</Link>
          <Link className="text-[#ffffff]/70 transition-transform hover:text-white hover:-translate-y-0.5 duration-500">Instagram</Link>
        </div>
      </div>
      <div className="px-16 mt-10 text-sm">
        <p>© 2020 Lift Media. All rights reserved.</p>
      </div>
    </div>
  );
}
