import React from "react";
import Button from '../../components/mainButton/MainButton'

function Header(props) {
  return (
    <div className="overflow-hidden wrapper relative flex justify-center items-center w-screen h-screen">
      {props.children}
      <div className={`${props.classChangeText ? `${props.classChangeText}` : 'absolute'}`}>
        <p className="font-semibold text-3xl">{props.headerText}</p>
        <p className="sm: w-3/4">
          {props.subheadingText}
        </p>

        <Button color="bg-red-800" link={props.buttonLink} text={props.buttonText}>Hello</Button>
      </div>

      <img className="min-h-screen object-cover" src={props.image}></img>
    </div>
  );
}

export default Header;
