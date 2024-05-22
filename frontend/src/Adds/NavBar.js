import React from "react";
import { Pen, Person } from "react-bootstrap-icons";

const NavBar = () => {
  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <span className="text-white self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Attendance Management System
        </span>
        <div className="flex space-x-2"> {/* Container for buttons */}
          <button className="size-10">
            <Pen size={25} className="mt-1 hover:fill-yellow-500" color="white" />
          </button>
          <button className="size-10">
            <Person size={30} className="mt-1 hover:fill-yellow-500" color="white" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
