import React from "react";
import { Link } from "react-router-dom";

const SecondaryButton = (props) => {
  return (
    <Link to={props.link} >
      <div className=" w-fit flex justify-center m-auto">
        <div
          className={
            "m-auto rounded-md bg-gray-100 justify-center my-4 p-4 w-fit px-12 text-black shadow-sm"
          }
        >
          <p className="flex justify-center text-xs font-bold"> {props.text}</p>
        </div>
      </div>
    </Link>
  );
};

export default SecondaryButton;
