import React from "react";
import {
  Banner,
  Banner2,
  TextLeftTab,
  TextRightTab,
  MobileCard,
  SideTab,
  SocialMedia,
} from "../../components/index";
import {
  Navbar,
  Footer,
  Header,
  Video,
  DefaultBody,
  HomeTab,
  BodyImageText,
  BodySectionImageLeft,
  BodySectionImageRight,
} from "../../sections/index";
import HeroVideo from "../../assets/video/church intro video.mp4";
import ConocernosHero from '../../assets/img/pastora.jpg'

function Conocernos() {
  return (
    <div>
      <Navbar />
      <Header image={ConocernosHero} headerText="efwe"/>

     
    </div>
  );
}

export default Conocernos;
