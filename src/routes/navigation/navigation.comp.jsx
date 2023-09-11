import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <header class="bg-trasparent absolute top-0 left-0 w-full flex items-center z-10">
        <div class="container">
          <div class="flex items-center justify-between relatif">
            <div class="px-4">
              <a href="#home" class="font-bold text-xl text-primary block py-4">
                DevsTags<span className="animate-ping">_</span>
              </a>
            </div>
            <div class="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                class="block absolute right-4 lg:hidden"
              >
                <span class="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span class="hamburger-line transition duration-300 ease-in-out"></span>
                <span class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>

              <nav
                id="nav-menu"
                class="hidden absolute py-5 bg-white shadow-xl rounded-lg max-w-[200px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              >
                <ul class="block lg:flex">
                  <li class="group">
                    <a
                      href="#home"
                      class="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Beranda
                    </a>
                  </li>
                  <li class="group">
                    <a
                      href="#About"
                      class="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      About
                    </a>
                  </li>
                  <li class="group">
                    <a
                      href="#Portfolio"
                      class="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li class="group">
                    <a
                      href="#Clients"
                      class="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Client
                    </a>
                  </li>
                  <li class="group">
                    <a
                      href="#blog"
                      class="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Blog
                    </a>
                  </li>
                  <li class="group">
                    <a
                      href="#Contact"
                      class="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Navigation;
