import ReactPlayer from "react-player";
import React, { useRef } from "react";
const VIDEO_PATH = "https://youtu.be/xlhY7JH472E";

function VideoPlayer() {
  const playerRef = useRef(null);
  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={VIDEO_PATH}
        controls={true}
        width="100%"
        height="40vh"
        style={{ border: "8px solid red", padding: "10px" }}
      />
    </div>
  );
}
export default VideoPlayer;
