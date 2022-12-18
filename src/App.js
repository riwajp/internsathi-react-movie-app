import "./App.css";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="movies-list pl-6 mt-4 mx-auto">
        <Movies movies={data.movies} />
      </div>
    </div>
  );
}

export default App;
