import React from "react";
// types
import { MovieProps } from "../types/Movie";

const Movie: React.FC<Pick<MovieProps, "show" | "airdate">> = ({
  show,
  airdate,
}) => {
  return (
    <div className="card h-100">
      <div className="card-img-container">
        <img
          src={
            show?.image?.medium ||
            "https://via.placeholder.com/210x295?text=No+Image"
          }
          className="card-img-top"
          alt={show?.name}
        />
      </div>
      <div className="card-body d-flex flex-column text-center">
        <p className="card-title">{show?.name}</p>
        <p className="card-text">{airdate}</p>
      </div>
    </div>
  );
};

export default Movie;
