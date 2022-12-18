import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Search = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const onSubmit = (form_data) => {
    navigate(`/search/${form_data.search_term.trim()}`);
  };

  return (
    <div className="search w-fit">
      <div className=" flex w-fit ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border-black border-2 w-52 md:w-56 lg:w-80 px-2 h-8 md:h-9 text-xs sm:text-md focus:outline-0 border-0"
            placeholder="Search for movies"
            {...register("search_term", { required: true })}
          />
          <button
            className="bg-slate-600 text-gray-200  px-1 sm:px-4 h-8 md:h-9 text-xs sm:text-md"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
