import React from "react";

const MovieItem = ({ movie }) => {
  console.log(movie.Genre.split(","));
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 movie  px-2">
      <div className=" flex   bg-gray-800 h-full">
        <div className="h-64 overflow-hidden">
          <img src={movie.Poster} className=" h-full w-56 " />
        </div>
        <div className=" w-full px-2 py-2 h-full ">
          <div className="text-stone-200 text-md">{movie.Title}</div>
          <div className="flex justify-between text-sm mt-2">
            <div className="text-yellow-400">{movie.imdbRating}/10</div>

            <div className="text-stone-400">{movie.Released}</div>
          </div>
          <div className="movie-description text-stone-200 text-xs mt-4">
            {movie.Plot}
          </div>

          <div className="flex gap-x-2 mt-6 flex-wrap">
            {movie.Genre.split(",").map((g) => (
              <div className="bg-gray-900 text-gray-200 text-xs px-1 py-1 self-end mt-2">
                {g}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
