import React from "react";
import BannerImage from "../../assets/img/gold.webp";

const Banner = (props) => {
  return (
    <div>
      {" "}
      <div
        className={`${props.color} absolute text-center h-28 object-cover bg-yellow-400 flex ${props.position} services m-auto justify-center w-full z-50`}
      >
        <div className="inner absolute z-0 flex h-full w-full bg-gradient-to-r from-yellow-500/50 to-yellow-900/40">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Banner;
