import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      {/* Positioned absolutely, won’t shift with banner centering */}
      <div className="bannerContent">
        <h1>Power up with coffee</h1>
        <p>Start your exciting day with a cup of Brew Coffee</p>
        <button className="btn1">Explore Us</button>
      </div>
    </div>
  );
};

export default Banner;
