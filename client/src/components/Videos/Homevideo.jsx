import React, { useEffect, useState } from "react";
import Video from "./Video";
import InfoVideo from "./InfoVideo";
import CommentsVideo from "./CommentsVideo";
import axios from "axios";
import { useParams } from "react-router-dom";
import VideoActions from "./VideoActions";


function Homevideo() {
  const { user, videoid } = useParams();
  const [videoData, setvideoData] = useState(null);
  const getVideo = async () => {
    const data = await axios.post(
      "http://localhost:3456/api/video/getuservideo",
      { user: user.split("@")[1], videoid }
    );
    setvideoData(data.data.video);
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <>
      {videoData ? (
        <div className="absolute z-50 bg-zinc-900 w-full h-full top-0 flex">
          <Video VideoData={videoData} />
          <div className="flex flex-col items-center justify-around w-2/5">
            <InfoVideo VideoData={videoData} />
            <VideoActions VideoData={videoData}/>
            <CommentsVideo VideoData={videoData} />
          </div>
        </div>
      ) : (
        "Cargando"
      )}
    </>
  );
}

export default Homevideo;
