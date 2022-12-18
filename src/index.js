import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchResults from "./Components/SearchResults";
import MovieDetails from "./Components/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/search/:search_term", element: <SearchResults /> },
  { path: "/movie/:imdbID", element: <MovieDetails /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
