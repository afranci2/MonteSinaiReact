import React from "react";
import { Link } from "react-router-dom";

const MainButton = (props) => {
  return (
    <Link to={props.link}>
      {" "}

        <div className={"container rounded-full bg-red-800 my-4 p-4 max-w-fit px-12 shadow-sm"}>
          <p className="flex justify-center text-xs font-bold"> {props.text}</p>
        </div>
    </Link>
  );
};

export default MainButton;
