import React from "react";
import { Link } from "react-router-dom";
import { Tab, Card, SecondaryButton } from "../../../components/index";

const TextRightTab = (props) => {
  return <Tab imagePosition={props.imagePosition}
  headerText={props.headerText}
  subheadingText={props.subheadingText}
  buttonLink={props.buttonLink}
  buttonText={props.buttonText}
  image={props.image}
  contentPosition="bottom-0 left-0"
  contentWidth="w-5/12"
  contentHeight="h-full"
  height="20"
  width="w-screen"/>
};

export default TextRightTab;
