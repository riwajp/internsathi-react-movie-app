import React from "react";

const MovieItem = ({ movie }) => {
  return (
    <div className="w-44 ">
      <div className="h-64 overflow-hidden">
        <img src={movie.posterUrl} className=" h-full w-full " />
      </div>
      <div className="">
        <div className="text-stone-200 text-md">{movie.title}</div>
        <div className="flex justify-between text-sm">
          <div className="text-yellow-400">9/10</div>

          <div className="text-stone-400">{movie.year}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
