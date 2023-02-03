import React from "react";
import Button from "../../components/mainButton/MainButton";
import Video from "../video/Video";

function Header(props) {
  return (
    <div className="overflow-hidden wrapper relative flex justify-center items-center w-screen h-screen ">
      <div
        className={`${
          props.classChangeText
            ? `${props.classChangeText}`
            : "w-11/12 z-50 absolute text-center justify-center m-auto md:w-1/2 gap-4 flex flex-col"
        } ${!props.headerText && "hidden"} `}
      >
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-4xl">{props.headerText}</p>
          <div
            className={`${
              props.contentPosition === "center"
            } ? "m-auto" : " sm: w-3/4" `}
          >
            {props.}
          </div>
        </div>
        <div className={props.buttonText ? "button flex py-6" : "hidden"}>
          <Button
            buttonColor={
              props.buttonColor
             ? `${props.buttonColor}` : "bg-red-800" }
            link={props.buttonLink}
            text={props.buttonText}
            buttonPosition={props.contentPosition}
          ></Button>
        </div>
      </div>
      {props.children}
      

        <img className="min-h-screen object-cover " src={props.image} />
      <Video className={props.video ? "hidden" : ""} video={props.video} />
    </div>
  );
}

export default Header;