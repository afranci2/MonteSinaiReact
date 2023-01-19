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

function Home() {
  return (
    <div>
      <Navbar />
      <Header>
        <img
          className="w-4/6 h-auto flex place-content-center justify-center absolute m-auto z-50 md:h-4/6 md:w-auto"
          src={Logo}
        />
        <Video video={HeroVideo} />
      </Header>
      <Footer />
    </div>
  );
}

export default Home;
