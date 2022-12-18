import React, { useState } from "react";
const Search = ({ setSearchTerm }) => {
  const [search_term_temp, setSearchTermTemp] = useState("");

  return (
    <div className="search w-fit">
      <div className=" flex w-fit ">
        <input
          value={search_term_temp}
          onChange={(e) => setSearchTermTemp(e.target.value)}
          className="border-black border-2 w-40 md:w-56 lg:w-80 px-2"
          placeholder="Search for movies"
        />
        <button
          className="bg-slate-800 text-gray-200 text-sm px-4 py-2"
          onClick={() => setSearchTerm(search_term_temp)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
