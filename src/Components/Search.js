import React, { useEffect, useState } from "react";
const Search = ({ setSearchTerm }) => {
  const [search_term_temp, setSearchTermTemp] = useState("");

  return (
    <div className="search">
      <div className="searchbar-container mx-auto flex-">
        <input
          value={search_term_temp}
          onChange={(e) => setSearchTermTemp(e.target.value)}
          className="searchbar border-black border-2"
        />
        <button onClick={() => setSearchTerm(search_term_temp)}>Search</button>
      </div>
    </div>
  );
};

export default Search;
