import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import SearchResults from "./SearchResults";
const Search = () => {
  const [search_term, setSearchTerm] = useState("");

  return (
    <div className="search">
      <SearchBar search_term={search_term} setSearchTerm={setSearchTerm} />
      <SearchResults search_term={search_term} />
    </div>
  );
};

export default Search;
