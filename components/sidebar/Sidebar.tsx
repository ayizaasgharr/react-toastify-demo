"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { sideBar} from "@/constants/sidebarItems";

type DropdownState = {
   open: boolean;
   index: number[];
 };

const Sidebar = () => {
 
  const [DropdownOpen, setDropdownOpen] = useState<DropdownState>({
    open: false,
    index: [],
  });

  const handleToggleDropdown = (index: number) => {
    if (DropdownOpen.open && DropdownOpen.index.includes(index) ) {
      console.log("dropdown", DropdownOpen)
      setDropdownOpen((prevState)=>(
         { open: false, index: prevState.index.filter((val)=>(val!==index ))}));

    } else {
      setDropdownOpen((prevState) => {
         const indexExists = prevState.index.includes(index);
         return {
           ...prevState,
           open: true,
           index: indexExists ? prevState.index : [...prevState.index, index],
         };
       });}
  };

  

  return (
    <div>
<nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
<div className="px-3 py-3 lg:px-5 lg:pl-3">
  <div className="flex items-center justify-between">
    <div className="flex items-center justify-start rtl:justify-end">
      <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
             <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
       </button>
      <a href="https://flowbite.com" className="flex ms-2 md:me-24">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
        <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">React Toastify</span>
      </a>
    </div>
  </div>
</div>
</nav>

<aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
 <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
 {sideBar.map((
   item,index
)=>(
   <>
              <button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages" onClick={()=>handleToggleDropdown(index)} >
                  {/* <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg> */}
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">{item.link}</span>
                  <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <ul id="dropdown-pages" className={`${(!( DropdownOpen.index.includes(index)) && item.subMenuItems)&&"hidden"} py-2 space-y-2`}>
                { 
                true &&
                item.subMenuItems.map((subitem)=>( 
               <li>
                      <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{subitem.link}</a>
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
