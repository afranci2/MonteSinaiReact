import React from "react";
import { Link } from "react-router-dom";

const SecondaryButton = (props) => {
  return (
    <div className=" w-full flex justify-center m-auto py-4">
      <Link to={props.link}>
        <div
          className={
            "m-auto rounded-md bg-zinc-100 justify-center p-4 w-fit px-12 text-black shadow-sm"
          }
        >
          <p className="flex justify-center text-xs font-bold"> {props.text}</p>
        </div>
      </Link>
    </div>
  );
};

export default SecondaryButton;
