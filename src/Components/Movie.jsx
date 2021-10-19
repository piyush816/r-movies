import React from "react";

const Movie = ({ poster, name, rating }) => {
  return (
    <div className="movie card shadow">
      <img className="movie-poster" alt={name} src={poster} />
      <div className="movie-info p-2">
        <div className="movie-name">{name}</div>
        <div className="movie-rating ms-1">
          <span
            style={{ color: "#fca311", marginRight: 3 }}
            className="material-icons"
          >
            star
          </span>
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default Movie;
