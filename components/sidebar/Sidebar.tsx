"use client";

import React, { useState } from "react";

import { sideBar } from "@/constants/sidebarItems";
import {DropdownState} from "@/types/navItemType"

const Sidebar = () => {
  const [DropdownOpen, setDropdownOpen] = useState<DropdownState>({
    open: false,
    index: [],
  });

  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);

  const handleToggleDropdown = (index: number) => {
    if (DropdownOpen.open && DropdownOpen.index.includes(index)) {
      setDropdownOpen((prevState) => ({
        open: false,
        index: prevState.index.filter((val) => val !== index),
      }));
    } else {
      setDropdownOpen((prevState) => {
        const indexExists = prevState.index.includes(index);
        return {
          ...prevState,
          open: true,
          index: indexExists ? prevState.index : [...prevState.index, index],
        };
      });
    }
  };

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                onClick={() => setOpenSideMenu(!openSideMenu)}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  React Toastify
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 lg:translate-x-0 ${
          openSideMenu && `translate-x-0`
        } dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          {sideBar.map((item, index) => (
            <>
              <button
                type="button"
                className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-pages"
                data-collapse-toggle="dropdown-pages"
                onClick={() => handleToggleDropdown(index)}
              >
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  {item.link}
                </span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <ul
                id="dropdown-pages"
                className={`${
                  !DropdownOpen.index.includes(index) &&
                  item.subMenuItems &&
                  "hidden"
                } py-2 space-y-2`}
              >
                {true &&
                  item.subMenuItems.map((subitem, index) => (
                    <li key={index}>
                      <a
                        href={subitem.href}
                        className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        {subitem.link}
                      </a>
                    </li>
                  ))}
              </ul>
            </>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
