import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../Components/Loading";
import MovieList from "../Components/MovieList";
import NotFound from "../Components/NotFound";
import urls from "../urls";

const Movies = () => {
  const { category } = useParams();
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(true);

  //   fetch movies
  const getMovies = async (url) => {
    try {
      const data = await axios.get(url);
      setMovies(data.data.results);
      setTotalPages(data.data.total_pages);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  //   fetch genres
  const getGenres = async (url) => {
    try {
      const data = await axios.get(url);
      setGenres(data.data.genres);
    } catch (err) {}
  };

  useEffect(() => {
    getMovies(urls[category]);
    if (category === "movie" || category === "tv") {
      getGenres(urls.genres[category]);
    }
  }, [category]);

  const handleClick = (id) => {
    if (selectedGenres.indexOf(id) >= 0) {
      setSelectedGenres((prev) => {
        return prev.filter((e) => e !== id);
      });
    } else {
      setSelectedGenres((prev) => prev.concat(id));
    }
  };

  useEffect(() => {
    let gen = "";
    selectedGenres.forEach((e) => (gen += e + ","));
    getMovies(urls[category] + gen);
  }, [selectedGenres, genres]);

  // showing loading
  if (loading) {
    return <Loading />;
  }

  // showing error
  if (movies.length <= 0) {
    return <NotFound message="No movies or tv shows found in this category" />;
  }

  return (
    <div className="my-4">
      {category !== "trending" && (
        <div className="container justify-content-center d-flex flex-wrap ">
          {genres.map(({ id, name }) => {
            return (
              <span
                onClick={() => handleClick(id)}
                key={id}
                className={`button my-2 btn btn-sm ${
                  selectedGenres.indexOf(id) >= 0 && "active"
                }`}
              >
                {name}
              </span>
            );
          })}
        </div>
      )}
      <MovieList
        totalPages={totalPages}
        movies={movies}
        getMovies={getMovies}
      />
    </div>
  );
};

export default Movies;
