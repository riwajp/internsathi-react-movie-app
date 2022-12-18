import React from "react";
import data from "../data.json";

const SearchResults = ({ search_term }) => {
  var matched_items = [];
  if (search_term != "") {
    matched_items = data.filter((d) =>
      d.Title.toLowerCase().startsWith(search_term.toLowerCase())
    );
  }
  return (
    <div className="search-results-container mx-auto border-2 border-black mt-2 px-5 py-5">
      {matched_items.map((i) => (
        <div className="search-results-item-container ">{i.Title}</div>
      ))}
    </div>
  );
};

export default SearchResults;
