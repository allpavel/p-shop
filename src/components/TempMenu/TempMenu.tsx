"use client";
import { useState } from "react";
import { MdMenu, MdOutlineClose } from "react-icons/md";

export const TempMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800 relative">
      <div className="mx-auto w-screen sm:px-6 lg:px-8">
        <div className="relative h-16">
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
              onClick={showMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <MdOutlineClose className="h-6 w-6" />
              ) : (
                <MdMenu className="h-6 w-6" />
              )}
            </button>
          </div>
          <div
            className={`${
              isOpen
                ? "absolute inset-y-0 top-16 h-screen opacity-100 w-screen overflow-hidden bg-slate-400"
                : "h-0 opacity-0 transition-[height]"
            } sm:hidden `}
            id="mobile-menu"
          >
            <a
              href="#"
              className=" text-black block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Team
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Calendar
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
    </nav>
  );
};
