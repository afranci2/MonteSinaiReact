import React from "react";

function Header(props) {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      {props.children}
      <img className="blur-sm h-screen w-auto" src={props.image}></img>
    </div>
  );
}

export default Header;
