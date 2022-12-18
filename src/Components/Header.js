import React, { useState } from "react";
import Search from "./Search";
const Header = ({ setSearchTerm }) => {
  return (
    <div className="header h-12 bg-gray-600 px-2 py-2 flex">
      <div className="logo ">Riwaj</div>
      <div className=" ">
        <Search setSearchTerm={setSearchTerm} />
      </div>
    </div>
  );
};

export default Header;
