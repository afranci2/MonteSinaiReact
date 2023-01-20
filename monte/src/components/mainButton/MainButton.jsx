import React from "react";
import { Link } from "react-router-dom";

const MainButton = (props) => {
  return (
    <Link to={props.link}>
      {" "}
      <div>{props.text}</div>
    </Link>
  );
};

export default MainButton;
