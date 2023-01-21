import React from "react";
import { Link } from "react-router-dom";
import { Tab, Card, SecondaryButton } from "../../../components/index";

const MobileCard = (props) => {
  return <Tab imagePosition={props.imagePosition}
  headerText={props.headerText}
  subheadingText={props.subheadingText}
  buttonLink={props.buttonLink}
  buttonText={props.buttonText}
  image={props.image}
  contentPosition="bottom"/>
};

export default MobileCard;
