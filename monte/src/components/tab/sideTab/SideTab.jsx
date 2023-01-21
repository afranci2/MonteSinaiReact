import React from "react";
import { Link } from "react-router-dom";
import { Tab, Card, SecondaryButton } from "../../../components/index";
import SocialMedia from "../../../components/tab/sideTab/SocialMedia";

const SideTab = (props) => {
  return (
    <Tab >
      <div className="container h-80 flex bg-neutral-200 flex-col gap-4 p-8">
        <p className="text-black text-lg font-semibold">{props.headerText} </p>
        <p className="text-black text-sm ">{props.subheaderText}</p>
        <div className={!props.buttonText ? "hidden" : "button mt-8"}>
          <SecondaryButton text={props.buttonText} link={props.link} />
        </div>
        {props.children}
      </div>
    </Tab>
  );
};

export default SideTab;
