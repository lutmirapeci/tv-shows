import React from "react";
// libs
import { useParams } from "react-router-dom";
// types
import { MovieProps } from "../types/Movie";

interface DetailsProps {
  movies: MovieProps[];
}

const Details: React.FC<DetailsProps> = ({ movies }) => {
  const { id } = useParams<{ id: string }>();
  const movie = movies.find((movie) => movie.id.toString() === id);

  if (!movie) return <p>Movie not found.</p>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-4">
          <div className="card h-100">
            <img
              src={
                movie.show?.image?.medium ||
                "https://via.placeholder.com/500x750"
              }
              className="card-img-top"
              alt={movie.name}
            />
            <div className="card-body d-flex flex-column text-center">
              <h5 className="card-title">{movie.show?.name}</h5>
              <p className="card-text">
                <strong>Genres:</strong> {movie.show?.genres?.join(", ")}
              </p>
              <p className="card-text">
                <strong>Premiered:</strong> {movie.show?.premiered || "Unknown"}
              </p>
              <p className="card-text">
                <strong>Status:</strong> {movie.show?.status}
              </p>
              <p className="card-text">
                <strong>Runtime:</strong> {movie.show?.runtime} minutes
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="details">
            <h3>Summary</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: movie?.show?.summary || "No summary available.",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
