import React from "react";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="container loading">
      <Loader type="Rings" color="#fca311" height={150} width={150} />
    </div>
  );
};

export default Loading;
