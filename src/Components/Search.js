import React, { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import SearchResults from "./SearchResults";
const Search = () => {
  const [search_term, setSearchTerm] = useState("");
  const [show_results, setShowResults] = useState(false);

  useEffect(() => {
    if (search_term != "") {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [search_term]);

  return (
    <div className="search">
      <SearchBar search_term={search_term} setSearchTerm={setSearchTerm} />
      {show_results && <SearchResults search_term={search_term} />}
    </div>
  );
};

export default Search;
