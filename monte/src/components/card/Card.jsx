import React from "react";

const Card = (props) => {
  return (
    <div className="my-8 relative overflow-hidden rounded-xl backdrop-blur-sm drop-shadow-lg">
      {props.children}
    </div>
  );
};

export default Card;
