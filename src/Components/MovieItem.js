import React from "react";

const MovieItem = ({ movie }) => {
  return (
    <div className="w-44 movie">
      <div className="h-64 overflow-hidden">
        <img src={movie.Poster} className=" h-full w-full " />
      </div>
      <div className="">
        <div className="text-stone-200 text-md">{movie.Title}</div>
        <div className="flex justify-between text-sm">
          <div className="text-yellow-400">{movie.imdbRating}/10</div>

          <div className="text-stone-400">{movie.Year}</div>
          <div className="movie-description text-stone-200">{movie.Plot}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
