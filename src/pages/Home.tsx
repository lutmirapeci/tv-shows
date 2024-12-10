import React from "react";
// custom components
import MovieList from "../components/MovieList";
// types
import { MovieProps } from "../types/Movie";

interface HomeProps {
  movies: MovieProps[];
}

const Home: React.FC<HomeProps> = ({ movies }) => {
  return (
    <div className="container">
      <h1 className="mt-5">TV Shows</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
