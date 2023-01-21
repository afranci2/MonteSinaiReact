import React from "react";
import { Link } from "react-router-dom";

const TertiaryButton = (props) => {
  return (
    <div className=" flex justify-center m-auto max-h-fit w-fit py-4">
      <Link to={props.link}>
        <div
          className={
            "m-auto h-fit rounded-md bg-yellow-400 justify-center p-4 w-fit px-12 text-black shadow-sm"
          }
        >
          <p className="overflow-hidden flex justify-center text-xs font-bold">
            {" "}
            {props.text}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default TertiaryButton;
