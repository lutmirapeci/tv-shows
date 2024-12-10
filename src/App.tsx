import React, { useState, useEffect } from "react";
// libs
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// custom components
import Header from "./components/Header";
// pages
import Home from "./pages/Home";
import Details from "./pages/Details";
// types
import { MovieProps } from "./types/Movie";

const App: React.FC = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/schedule?country=US"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: MovieProps[] = await response.json();
        setMovies(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.show.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Router>
      <div className="App">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home movies={filteredMovies} />} />
          <Route path="/movie/:id" element={<Details movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
