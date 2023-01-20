import React from "react";

const Banner = (props) => {
  return (
    <div>
      {" "}
      <div className={`${props.color} p-12 text-center flex bottom-0 services m-auto justify-center h-auto w-full absolute z-50`}>
{props.children}
      </div>
    </div>
  );
};

export default Banner;
