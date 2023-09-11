import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <header className="flex w-full justify-center bg-transparent">
        <div className="container flex items-center justify-between">
          <div className="px-4">
            <Link to="/" className="block py-6 text-lg font-bold text-primary">
              Navs<span className="animate-ping">_</span>
            </Link>
          </div>
          <div className="flex items-center px-4">
            <ul className="flex">
              <li className="group">
                <Link
                  to="about"
                  className="mx-8 flex py-2 group-hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li className="group">
                <Link
                  to="contact"
                  className="mx-8 flex py-2 group-hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Navigation;
