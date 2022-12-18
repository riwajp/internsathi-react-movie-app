import "./App.css";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import data from "./data.json";
import { useState, useEffect } from "react";

function App() {
  const [search_term, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [is_fetching, setIsFetching] = useState(0);

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
    setMovies(movies_temp);
    setIsFetching(0);
  };

  useEffect(() => {
    if (search_term != "") {
      setIsFetching(1);
      fetch(`https://www.omdbapi.com/?&s=${search_term}&apikey=daef3e74`)
        .then((res) => res.json())
        .then((res) => getMoviesDetails(res.Search));
    }
  }, [search_term]);
  return (
    <div className="App">
      <Header setSearchTerm={setSearchTerm} />

      <div className="movies-list pl-6 mt-4 mx-auto">
        {!is_fetching ? (
          <Movies movies={movies} />
        ) : (
          <div className="text-white">Loading...</div>
        )}
      </div>
    </div>
  );
}

export default App;
