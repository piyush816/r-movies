import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../Components/Loading";
import MovieList from "../Components/MovieList";
import NotFound from "../Components/NotFound";
import urls from "../urls";

const Search = () => {
  const { query } = useParams();

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

  useEffect(() => {
    getMovies(urls.search + query);
  }, [query]);

  // showing loading
  if (loading) {
    return <Loading />;
  }

  // showing error
  if (movies.length <= 0) {
    return <NotFound message={`No movies or tv shows found - ${query}`} />;
  }

  return (
    <div>
      <MovieList
        totalPages={totalPages}
        movies={movies}
        getMovies={getMovies}
      />
    </div>
  );
};

export default Search;
