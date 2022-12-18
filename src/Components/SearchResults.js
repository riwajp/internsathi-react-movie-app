import React from "react";
import data from "../data.json";

const SearchResults = ({ search_term }) => {
  var matched_items = [];
  if (search_term != "") {
    matched_items = data.movies.filter((d) =>
      d.title.toLowerCase().includes(search_term.toLowerCase())
    );
  }
  return (
    <div className="search-results-container mx-auto border-2 border-black border-t-0 px-5 py-5 flex-2">
      {matched_items.map((i) => (
        <div className="search-results-item-container ">{i.Title}</div>
      ))}
    </div>
  );
};

export default SearchResults;
