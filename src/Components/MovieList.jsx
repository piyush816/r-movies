import React from "react";
import Movie from "./Movie";
import { Link } from "react-router-dom";

import ReactPaginate from "react-paginate";

const MovieList = ({ movies, getMovies, totalPages }) => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const handlePagination = ({ selected }) => {
    getMovies(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&page=${
        selected + 1
      }`
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="bg">
        <img className="cover" src="/notfoundbanner.png" alt="banner" />
      </div>

      <div className="container my-4">
        <div className="row  justify-content-center g-3">
          {movies.map((movie) => {
            return (
              <div key={movie.id} className="col-auto ">
                <Link to={`/movie/${movie.id}`}>
                  <Movie
                    poster={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKskx2guigVJq6lyCF0THEn6MA2_5nPjS8vQ&usqp=CAU"
                    }
                    name={movie.name ? movie.name : movie.title}
                    rating={movie.vote_average}
                  />
                </Link>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center mt-5 ">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            nextLinkClassName={"page-link active"}
            previousLinkClassName={"page-link active"}
            breakLinkClassName={"page-link"}
            pageCount={totalPages}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePagination}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            containerClassName={"pagination"}
            activeLinkClassName={"active"}
          />
        </div>
      </div>
    </>
  );
};

export default MovieList;
