import React from "react";
import { Link } from "react-router-dom";
import { Card, SecondaryButton } from "../../components/index";

const Tab = (props) => {
  return (
    <div className="my-8 relative overflow-hidden rounded-xl backdrop-blur-sm drop-shadow-lg">
      <div className="whole h-[40rem]">
        <img
          className={`min-h-full w-full object-cover ${props.imagePosition}`}
          src={props.image}
        />

        <div
          className={`p-8 text-center rounded-md ${props.contentPosition}-0 absolute z-50 content bg-red-800/90 w-full`}
        >
          <div className="text flex flex-col gap-4">
            <p className="font-semibold text-2xl">{props.headerText}</p>
            <p className="text-sm">{props.subheadingText}</p>
          </div>
          <div className="button mt-8">
            <SecondaryButton text={props.buttonText} link={props.link} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
