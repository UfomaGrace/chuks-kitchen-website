import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="text-[#ffffff]/70 bg-[#70402f] py-10">
      <div className="grid grid-cols-8 px-16">
        <div className="col-span-1">
          <img
            src="/images/logo.png"
            alt="Chuks Kitchen Logo"
            className="h-14 w-auto"
          />
          <p className="text-white">
            Bringing the authentic flavors of Nigerian home cooking to your
            table, with passion and care.
          </p>
        </div>
        <div></div>

        <div className="col-span-2">
          <h2 className="text-white text-xl mb-3">Quick Links</h2>
          <div className="flex flex-col">
            <Link>Home</Link>
            <Link>Explore</Link>
            <Link>My Order</Link>
            <Link>Account</Link>
            <Link>Contact</Link>
          </div>
        </div>

        <div className="col-span-2">
          <h2 className="text-white text-xl mb-3">Contact Us</h2>
          <div className="flex flex-col">
            <Link>+234 801 234 5678</Link>
            <Link>hello@chukskitchen.com</Link>
            <Link>123 Taste Blvd, Lagos, Nigeria</Link>
          </div>
        </div>

        <div className="flex flex-col col-span-2">
          <Link>Facebook</Link>
          <Link>Twitter</Link>
          <Link>LinkedIn</Link>
          <Link>Instagram</Link>
        </div>
      </div>
      <div className="px-16">
        <p>
            © 2020 Lift Media. All rights reserved.
        </p>
      </div>
    </div>
  );
}
