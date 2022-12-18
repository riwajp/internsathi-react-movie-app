import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import Header from "../Components/Header";

const MovieDetails = () => {
  let { imdbID } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    setMovie();
    fetch(
      `https://www.omdbapi.com/?i=${imdbID}&apikey=${process.env.REACT_APP_API_KEY}&plot=full`
    )
      .then((res) => res.json())
      .then((res) => setMovie(res));
  }, [imdbID]);
  return (
    <div>
      <Header />
      {movie ? (
        <div className="mt-8 px-8 flex flex-wrap md:flex-nowrap gap-x-6 mb-8">
          <div className="">
            <img src={movie.Poster} />
          </div>
          <div className=" w-full px-2 py-2 ">
            <div className="text-stone-100 text-2xl font-bold">
              {movie.Title}
            </div>
            <div className="flex gap-x-6   text-sm mt-2 items-center">
              <div className="bg-yellow-600 text-white px-2 py-1 rounded-md">
                {movie.imdbRating}/10
              </div>
              <div className=" bg-gray-600 text-white px-2 py-1 rounded-md">
                {movie.Runtime}
              </div>

              <div className="text-stone-400">{movie.Released}</div>
            </div>
            <div className="movie-description text-stone-200 text-sm mt-4">
              {movie.Plot}
            </div>

            <div className="text-sm text-gray-300 mt-4">
              Director : {movie.Director}
            </div>
            <div className="text-sm text-gray-300 mt-4">
              Cast : {movie.Actors}
            </div>

            <div className="text-sm text-gray-300 mt-4">
              Languages : {movie.Language}
            </div>
            <div className="text-sm text-gray-300 mt-4">
              Rating : {movie.Rated}
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
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MovieDetails;
