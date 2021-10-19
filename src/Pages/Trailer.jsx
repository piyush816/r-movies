import React, { useEffect, useState } from "react";
import movieTrailer from "movie-trailer";
import Player from "react-player";
import { useParams } from "react-router";
import NotFound from "../Components/NotFound";
import Loading from "../Components/Loading";

const Trailer = () => {
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(false);

  const { id } = useParams();

  const playTrailer = () => {
    movieTrailer(null, { tmdbId: id }, (err, res) => {
      if (res) {
        setUrl(res);
      } else {
        setError(true);
      }
    });
  };

  useEffect(() => {
    playTrailer();
  }, [id]);

  // error
  if (error) {
    return <NotFound message="Trailer not found please try after some time" />;
  }

  // loading
  if (url === null) {
    return <Loading />;
  }

  return (
    <>
      <div className="container">
        <Player controls height="100vh" width="100%" url={url} />
      </div>
    </>
  );
};

export default Trailer;
