import React, { useRef } from "react";

const Marquee = () => {
  const marqueeRef = useRef(null);

  const handleMouseOver = () => {
    marqueeRef.current.stop();
  };

  const handleMouseOut = () => {
    marqueeRef.current.start();
  };

  return (
    <marquee ref={marqueeRef} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro animi nobis neque, fugiat minus sit ratione cum sequi voluptatem eos!
    </marquee>
  );
};

export default Marquee;
