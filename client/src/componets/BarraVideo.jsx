import React from "react";
import videoBarra from "../componets/videos/video1.mp4";
import ReactPlayer from "react-player";

export default function BarraVideo() {
  return (
    <div style={{ width: "60%", height: "80%", position: "absolute" }}>
      <ReactPlayer url={videoBarra} width="100%" height="100%" playing loop />
    </div>
  );
}
