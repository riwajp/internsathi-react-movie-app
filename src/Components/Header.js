import React, { useState } from "react";
import Search from "./Search";
const Header = () => {
  return (
    <div className="header h-12 bg-gray-600 px-2 py-2">
      <div className="logo ">Riwaj</div>
      <Search />
    </div>
  );
};

export default Header;
