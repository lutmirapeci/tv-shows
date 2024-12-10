import React from "react";
import Movie from "./Movie";
import { MovieProps } from "../types/Movie";
import { Link } from "react-router-dom";

interface MovieListProps {
  movies: MovieProps[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="container my-5">
      <div className="row g-5">
        {movies.map((movie) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={movie.id}>
            <Link to={`/movie/${movie.id}`} className="text-decoration-none">
              <Movie show={movie.show} airdate={movie.airdate} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
