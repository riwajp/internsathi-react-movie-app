import React from "react";
import Search from "./Search";
const Header = ({ setSearchTerm }) => {
  return (
    <div className="header h-12 bg-gray-600 px-4 py-2 flex w-full ">
      <div className="logo text-xl text-gray-100 font-bold ">iMovies</div>
      <div className="ml-auto mr-0">
        <Search setSearchTerm={setSearchTerm} />
      </div>
    </div>
  );
};

export default Header;
