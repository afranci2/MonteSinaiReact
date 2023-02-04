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
import ConocernosHero from "../../assets/img/pastora.jpg";
import Javier from "../../assets/img/javier.jpg";
import ConocernosVideo from "../../assets/video/Monte Sinai Promo2.mp4";

function Conocernos() {
  return (
    <div>
      <Navbar />
      <Header image={ConocernosHero} headerText="efwe" />
      <BodySectionImageLeft
        image={Javier}
        headingText="efwefwefewf"
        subheadingText={"fwefwefw"}
        buttonText={"fewfe"}
      ></BodySectionImageLeft>
      <Header
        video={ConocernosVideo}
        contentPosition="center"
        headerText="Un Mensaje del Presidente"
        subheadingText={
          <div>
            <p>
              A lo largo de este movimiento, el fuego seguirá ardiendo en cada
              corazón como en el día de Pentecostés.
            </p>
            <br></br>
            <p className="font-light">
              Deja que Dios encienda el fuego dentro de ti.
            </p>
          </div>
        }
        buttonText="Historia"
      ></Header> 
    </div>
  );
}

export default Conocernos;
