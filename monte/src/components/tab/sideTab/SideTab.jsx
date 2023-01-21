import React from "react";
import { Link } from "react-router-dom";
import { Tab, Card, SecondaryButton } from "../../../components/index";
import SocialMedia from "../../../components/tab/sideTab/SocialMedia";

const SideTab = (props) => {
  return (
    <Tab height="32" backgroundColor="white">
      <p className="text-black text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius id itaque laboriosam error, vel aliquid aperiam magni, vitae commodi doloremque blanditiis ipsa ipsum vero perspiciatis explicabo impedit cupiditate magnam nihil! </p>
      <div className="content">
        <SocialMedia></SocialMedia>
      </div>
    </Tab>
  );
};

export default SideTab;
