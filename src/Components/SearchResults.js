import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Movies from "./Movies";

const SearchResults = () => {
  const { search_term } = useParams();
  const [movies, setMovies] = useState([]);
  const [is_fetching, setIsFetching] = useState(false);
  const [num_movies, setNumMovies] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

  const fetchMovies = (page) => {
    const getMoviesDetails = async (movies_list) => {
      console.log(movies_list);
      let movies_temp = [];
      for (let i of movies_list) {
        let response = await fetch(
          `https://www.omdbapi.com/?&i=${i.imdbID}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        response = await response.json();
        movies_temp.push(response);
        console.log("done");
      }
      if (page == 1) {
        setMovies(movies_temp);
      } else {
        setMovies([...movies, ...movies_temp]);
      }
      setIsFetching(false);
    };

    if (search_term != "") {
      setIsFetching(true);
      fetch(
        `https://www.omdbapi.com/?&s=${search_term}&apikey=${process.env.REACT_APP_API_KEY}&page=${page}`
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.Error == "Too many results.") {
            setError(true);
          } else {
            getMoviesDetails(res.Search);
            setNumMovies(res.totalResults);
          }
        });
    }
  };

  useEffect(() => {
    if (page != 1) {
      fetchMovies(page);
    }
  }, [page]);

  useEffect(() => {
    setError(false);
    setNumMovies(0);
    setMovies([]);
    fetchMovies(1);
  }, [search_term]);

  return (
    <div className="App">
      <Header />
      <div className="text-lg text-gray-200 ml-2 mt-4">
        Search results for "{search_term}"
      </div>

      <div className=" mt-4 ">
        {error ? (
          <div className="mx-auto text-gray-200 text-lg md:text-xl px-2">
            The search term has too many results. Please try to be more
            specific.
          </div>
        ) : (
          <Movies
            movies={movies}
            is_fetching={is_fetching}
            num_movies={num_movies}
            page={page}
            setPage={setPage}
          />
        )}
      </div>
    </div>
  );
};

export default SearchResults;
