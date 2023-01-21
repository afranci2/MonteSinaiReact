import React from "react";
import { Link } from "react-router-dom";

const MainButton = (props) => {
  return (
    <Link to={props.link}>
      {" "}
      <div className={"m-auto rounded-md bg-yellow-500 my-4 p-4 max-w-fit px-12 text-black shadow-sm"}>
        <p className="flex justify-center text-xs font-bold"> {props.text}</p>
      </div>
    </Link>
  );
};

export default MainButton;
