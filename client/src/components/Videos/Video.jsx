import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

function Video({VideoData}) {
  
  const [isPlay, setisPlay] = useState(true);
  const videoRef = useRef();



  return (
    <>
      <div className="w-3/5 bg-zinc-900 h-screen flex justify-center items-center">
        <button
          className="text-white text-3xl bg-zinc-800 px-3 py-1 rounded-full absolute left-5 top-7 z-10 "
          onClick={() => {
            history.back();
          }}
        >
          X
        </button>
        <video
          src={`http://localhost:3456${VideoData.VIDEO_PATH}`}
          className="h-full"
          autoPlay
          loop
          ref={videoRef}
        ></video>
        <button
          className="w-3/5 absolute top-0 h-full text-white font-bold text-3xl"
          onClick={() => {
            if (isPlay) {
              videoRef.current.pause();
              setisPlay(false);
            } else {
              videoRef.current.play();
              setisPlay(true);
            }
          }}
        >
          {isPlay ? "" : "PAUSE"}
        </button>
      </div>
    </>
  );
}

export default Video;
