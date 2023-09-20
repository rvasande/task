import React from "react";
import ControlledCarousel from "../components/ControlledCarousel";
import Marquee from "../components/Marquee";
import ComponentOne from "../components/ComponentOne";
import ComponentTwo from "../components/ComponentTwo";
import ComponentThree from "../components/ComponentThree";
import YoutubeVideo from '../components/YoutubeVideo'
import ComponentFour from "../components/ComponentFour";
import ComponentFive from "../components/ComponentFive";

const HomeScree = () => {
  return (
    <main>
      <ControlledCarousel />
      <Marquee />
      <ComponentOne />
      <ComponentTwo />
      <ComponentThree />
      <YoutubeVideo />
      <ComponentFour />
      <ComponentFive />
    </main>
  );
};

export default HomeScree;
