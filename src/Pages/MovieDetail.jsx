import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import NotFound from "../Components/NotFound";
import Loading from "../Components/Loading";

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = process.env.REACT_APP_API_KEY;

  const { id } = useParams();

  const history = useHistory();

  //  get movies
  const getMovie = async () => {
    try {
      const data = await axios.get(
        ` https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      );

      setMovie(data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  // loading
  if (loading) {
    return <Loading />;
  }

  // error
  if (movie === null) {
    return <NotFound message="Something went wrong please try again" />;
  }

  return (
    <>
      <div className="bg">
        <img
          className="cover"
          src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
          alt={movie.title}
        />
      </div>
      <div className="container  detail pt-5">
        <div className="row g-3 gy-5 text-light align-items-center">
          <div className="col-xl-4">
            <img
              style={{ height: "30rem" }}
              src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              alt={movie.title}
              className="banner"
            />
          </div>
          <div className="col-xl-8">
            <h1>{movie.title}</h1>
            <div className="my-4">
              <small className="highlight">Overview</small>
              <p>{movie.overview}</p>
            </div>
            <div className="my-4 ">
              <small className="highlight">Genres</small>
              <p className="d-flex flex-wrap ">
                {movie.genres.map(({ name, id }) => {
                  return (
                    <span key={id} className="my-2 button btn">
                      {name}
                    </span>
                  );
                })}
              </p>
            </div>
            <div className="my-4 d-flex align-items-center d-flex flex-wrap justify-content-between w-50">
              <div>
                <small className="highlight">Ratings</small>
                <p className="d-flex align-items-center">
                  <span
                    style={{ color: "#fca311", marginRight: 5 }}
                    className="material-icons"
                  >
                    star
                  </span>
                  {movie.vote_average}
                </p>
              </div>

              <div>
                <small className="highlight">Released </small>
                <p>{movie.release_date}</p>
              </div>
              <div>
                <small className="highlight">Duration </small>
                <p>{movie.runtime} min</p>
              </div>
            </div>
            <div className="section my-4 d-flex align-items-center">
              <span
                onClick={() => history.push(`/trailer/${id}`)}
                className="material-icons "
                style={{
                  fontSize: "48px",
                  color: "#fca311",
                  cursor: "pointer",
                  marginRight: 5,
                }}
              >
                play_circle_filled
              </span>
              Watch Trailer
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
