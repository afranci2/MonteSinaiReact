import React from "react";
import { Link } from "react-router-dom";
import { Card, SecondaryButton } from "../../components/index";

const Tab = (props) => {
  return (
    <div className="my-8 relative overflow-hidden rounded-xl backdrop-blur-sm drop-shadow-lg">
      <div
        className={`whole h-[${props.height}em] bg-${props.backgroundColor}` }
      >
              {props.children}
        <img
          className={`min-h-full w-screen object-cover ${props.imagePosition}`}
          src={props.image}
        />
        
        <div
          className={` flex p-8 text-center rounded-md ${props.contentPosition} absolute z-50 content ${props.contentHeight} items-center bg-red-800/90 ${props.contentWidth}`}
        >
            
          <div className="flex flex-col m-auto">
            
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
    </div>
  );
};

export default Tab;
