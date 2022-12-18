import React from "react";
import MovieItem from "./MovieItem";

const Movies = ({ movies }) => {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-10">
      {movies.map((m) => (
        <MovieItem movie={m} />
      ))}
    </div>
  );
};

export default Movies;
