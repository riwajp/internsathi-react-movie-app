import React from "react";
import MovieItem from "./MovieItem";

const Movies = ({ movies }) => {
  console.log(movies);

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-16">
      {movies.map((m) => (
        <MovieItem movie={m} />
      ))}
    </div>
  );
};

export default Movies;
