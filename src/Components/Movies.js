import React from "react";
import Loading from "./Loading";
import MovieItem from "./MovieItem";

const Movies = ({ movies, is_fetching, num_movies, page, setPage }) => {
  console.log(movies);

  return (
    <div>
      <div className="flex flex-wrap  gap-y-2 md:gap-y-8">
        {movies.map((m) => (
          <MovieItem movie={m} />
        ))}
      </div>
      {!is_fetching && movies.length > 0 && movies.length < num_movies && (
        <div
          className="cursor-pointer text-xl text-gray-100 text-center mt-4 mb-12 border-2 border-gray-800 rounded-md px-4 py-2 bg-gray-800 mx-auto  w-44"
          onClick={() => setPage(++page)}
        >
          Load more
        </div>
      )}

      {is_fetching && <Loading />}
    </div>
  );
};

export default Movies;
