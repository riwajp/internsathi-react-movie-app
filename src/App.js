import "./App.css";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import data from "./data.json";
import { useState, useEffect } from "react";
import MovieDetails from "./Components/MovieDetails";

function App() {
  const [search_term, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [is_fetching, setIsFetching] = useState(false);
  const [num_movies, setNumMovies] = useState(false);
  const [page, setPage] = useState(1);

  const fetchMovies = (page) => {
    const getMoviesDetails = async (movies_list) => {
      console.log(movies_list);
      let movies_temp = [];
      for (let i of movies_list) {
        let response = await fetch(
          `https://www.omdbapi.com/?&i=${i.imdbID}&apikey=daef3e74`
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
        `https://www.omdbapi.com/?&s=${search_term}&apikey=daef3e74&page=${page}`
      )
        .then((res) => res.json())
        .then((res) => {
          getMoviesDetails(res.Search);
          setNumMovies(res.totalResults);
        });
    }
  };

  useEffect(() => {
    if (page != 1) {
      fetchMovies(page);
    }
  }, [page]);

  useEffect(() => {
    setNumMovies(0);
    setMovies([]);
    fetchMovies(1);
  }, [search_term]);

  return (
    <div className="App">
      <Header setSearchTerm={setSearchTerm} />

      <div className="movies-list pl-6 mt-4 ">
        <Movies
          movies={movies}
          is_fetching={is_fetching}
          num_movies={num_movies}
          page={page}
          setPage={setPage}
        />

        <MovieDetails />
      </div>
    </div>
  );
}

export default App;
