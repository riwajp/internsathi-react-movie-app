import React from "react";
import Search from "./Search";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <div
      className={`header h-12 bg-gray-800 px-2 md:px-4 py-2 flex w-full items-center relative z-20 ${
        location.pathname == "/" ? "bg-opacity-0" : ""
      }`}
    >
      <div className="logo text-lg  md:text-xl text-gray-100 font-bold ">
        <Link to="/">iMovies</Link>
      </div>
      <div className="ml-auto mr-0">
        <Search />
      </div>
    </div>
  );
};

export default Header;
