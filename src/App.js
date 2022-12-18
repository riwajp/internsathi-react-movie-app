import "./App.css";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import data from "./data.json";
import { useState, useEffect } from "react";
import MovieDetails from "./Components/MovieDetails";
import BannerCarousel from "./Components/BannerCarousel";

function App() {
  return (
    <div className="App">
      <Header />
      <BannerCarousel />
    </div>
  );
}

export default App;
