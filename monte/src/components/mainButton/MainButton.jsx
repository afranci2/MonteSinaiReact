import React from "react";
import { Link } from "react-router-dom";

const MainButton = (props) => {
  return (
    <Link
      to={props.link}
      className={
        "container rounded-full bg-red-800 w-fit my-4 p-4 px-12 shadow-sm"
      }
    >
      <p className="flex justify-center text-xs font-bold"> {props.text}</p>
    </Link>
  );
};

export default MainButton;
