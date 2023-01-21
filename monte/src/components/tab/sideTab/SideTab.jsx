import React from "react";
import { Link } from "react-router-dom";
import { Tab, Card, SecondaryButton } from "../../../components/index";
import SocialMedia from "../../../components/tab/sideTab/SocialMedia";

const SideTab = (props) => {
  return (
    <Tab backgroundColor="bg-gray-100">
      <div className="container bg-red-500 h-80 flex flex-col gap-4">
        <p className="text-black text-md ">Siguenos </p>
        <p className="text-black text-sm ">
          Inscríbase ahora como voluntario y vea lo que Dios puede hacer a
          través de usted.
        </p>
        <div className="content bg-blue-400">
          <SocialMedia></SocialMedia>
        </div>
      </div>
    </Tab>
  );
};

export default SideTab;
