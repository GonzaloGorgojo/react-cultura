import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Logo from "../assets/mainLogo.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div class="bg-gradient-to-r from-yellow-900 to-orange-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div class="flex items-center justify-between h-16 ">
          <div class="flex-shrink-0 ">
            <img class="h-10 w-10" src={Logo} alt="Logo Cultura" />
          </div>
          <div class="hidden md:block ">
            <div class=" flex items-baseline space-x-4">
              <a
                href="#about"
                class=" hover:bg-gray-700 text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Nosotros
              </a>

              <a
                href="#images"
                class="hover:bg-gray-700 text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Fotos
              </a>
            </div>
          </div>

          <div class="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              class="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  class="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  class="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div class="md:hidden bg-neutral-50">
            <div ref={ref} class="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
              <a
                href="#about"
                class="bg-gradient-to-r from-yellow-900 to-orange-900 hover:bg-gray-700 text-white block px-3 py-2 rounded-md font-medium  text-center"
              >
                Nosotros
              </a>

              <a
                href="#images"
                class="bg-gradient-to-r from-yellow-900 to-orange-900 hover:bg-gray-700 text-white block px-3 py-2 rounded-md font-medium text-center"
              >
                Fotos
              </a>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}

export default NavBar;
