import React from "react";
import { TertiaryButton } from "../../../components";
import PropTypes from "prop-types";

const BodyImageText = (props) => {
  return (
    <div className="h-fit md:h-[38rem] relative text-black bg-gradient-to-t from-black/10 to-black/0 py-8 ">
      <div className=" h-full content flex  flex-col w-3/4 m-auto gap-12 md:flex-row">
        {props.imagePosition === "right" ? (
          <img className=" h-full object-cover md:p-4 md:ml-12" src={props.image} />
          
        ) : (
          <div></div>
        )}
        {props.imagePosition === "left" ? (
          <img className=" h-full object-cover md:p-4 md:ml-12" src={props.image} />
          ) : (
          <div></div>
        )}
        <div className="align-center md:m-auto flex flex-col gap-4">
          <p className="text-3xl ">{props.headingText}</p>
          <p className="text-sm">
          {props.subheadingText}
          </p>
          <TertiaryButton
            buttonColor="bg-yellow-400"
            text={props.buttonText}
            margin="mt-4"
            link={props.buttonLink}
          ></TertiaryButton>
        </div>
        {props.imagePosition === "left" ? (
          <img className=" h-full object-cover md:p-4 md:ml-12" src={props.image} />
          ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

BodyImageText.propTypes = {
  children: PropTypes.oneOf(["left", "right"]),
  image: PropTypes.string.isRequired,
};

export default BodyImageText;
