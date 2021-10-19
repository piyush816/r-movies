import React from "react";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router";

const NotFound = ({ message }) => {
  const history = useHistory();
  return (
    <>
      <div className="bg">
        <img className="cover" src="/notfoundbanner.png" alt="banner" />
      </div>

      <div className="container py-5 error-page text-light text-center">
        <Loader type="Bars" color="#fca311" height={100} width={100} />
        <h3>{message}</h3>
        <button onClick={() => history.goBack()} className="button mt-3 btn ">
          Back to Home
        </button>
      </div>
    </>
  );
};

export default NotFound;
