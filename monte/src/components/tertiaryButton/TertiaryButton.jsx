import React from "react";
import { Link } from "react-router-dom";

const TertiaryButton = (props) => {
  return (
    <div className={` ${props.position==="center" && "m-auto"} flex justify-center max-h-fit w-fit drop-shadow-md`}>
      <Link to={props.link}>
        <div
          className={
            `m-auto h-fit rounded-md ${props.buttonColor} justify-center p-4 w-fit px-6 text-black shadow-sm`
          }
        >
          <p className="overflow-hidden flex justify-center text-xs font-semibold text-center">
            {" "}
            {props.text}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default TertiaryButton;
