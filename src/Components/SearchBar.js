import React, { useState } from "react";

export const SearchBar = ({ search_term, setSearchTerm }) => {
  console.log(search_term);
  return (
    <div className="searchbar-container mx-auto flex-">
      <input
        value={search_term}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="searchbar border-black border-2"
      />
    </div>
  );
};
