import React from "react";
import { Link } from "react-router-dom";

const MainButton = (props) => {
  return (
    <div className="container w-fit my-4">
      <Link to={props.link}>
        <div className="bg-red-800 shadow-sm px-12 rounded-lg p-4">
          <p className="flex justify-center text-xs font-bold"> {props.text}</p>
        </div>
      </Link>
    </div>
  );
};

export default MainButton;
