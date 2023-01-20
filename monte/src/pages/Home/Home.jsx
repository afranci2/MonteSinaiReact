import React from "react";
import {
  Navbar,
  Footer,
  Header,
  Video,
  DefaultBody,
  HomeTab,
} from "../../sections/index";
import HeroVideo from "../../assets/video/church intro video.mp4";
import Logo from "../../assets/logo/logo.png";
import Michael from "../../assets/img/section2.jpg";

function Home() {
  return (
    <div>
      <Navbar />
      <Header>
        <img
          className="backdrop-blur-sm w-4/6 h-auto flex place-content-center justify-center absolute m-auto z-50 md:h-1/3 md:w-auto"
          src={Logo}
        />
        <Video video={HeroVideo} />
      </Header>
      <Header
        image={Michael}
        classChangeText="absolute top-1/4 flex flex-col gap-2 w-10/12"
        headerText="Bienvenidos"
        subheadingText="Le invitamos a nuestro servicio de adoración en persona o en linea"
        buttonText="EN VIVO"
        buttonLink="/en-vivo"
      >
        <div className="bg-red-800/70 flex gap-4 bottom-0 services h-auto w-full absolute z-50">
          <div className="content">
            <p>HORARIOS DE SERVICIO GENERAL</p>
            <p>** Tiempos de servicio pueden variar según la ubicación **</p>
            <br></br>
            <div className="times">
              <p>
                Domingo <br></br>3:00 PM EST
              </p>
              <p>
                Martes <br></br>7:00 PM EST
              </p>
              <p>
                Jueves <br></br>7:30 PM EST
              </p>
            </div>
          </div>
        </div>
      </Header>
      <Footer />
    </div>
  );
}

export default Home;
