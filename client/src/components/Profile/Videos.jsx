import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {UserContext} from "../../Context/UserContext"
function Videos() {
  const [isOnTarget, setisOnTarget] = useState({
    videos: true,
    likes: false,
  });

  const [videos, setvideos] = useState(null);

  useEffect(() => {
    getVideosForProfile();
  }, []);

  const {PRINCIPAL_USER} = useContext(UserContext)

  const getVideosForProfile = async () => {
    const data = await axios.post(
      "http://localhost:3456/api/profile/getvideos",
      {},
      {
        headers: {
          Authorization: "bearer " + window.localStorage.getItem("user"),
        },
      }
    );

    setvideos(data.data.videos);
  };

  const videoREF = useRef([]);

  return (
    <div className="text-white">
      <div className="bg-zinc-900 mx-auto py-3 text-xl font-bold w-5/6 rounded-lg">
        <button
          className={`px-2 ml-3 py-1 ${
            isOnTarget.videos
              ? "border-b  border-white transition-all"
              : "transition-all"
          }`}
          onMouseEnter={() => setisOnTarget({ videos: true, likes: false })}
        >
          Videos
        </button>
        <button
          className={`px-2 py-1 ${
            isOnTarget.likes
              ? "border-b border-white transition-all"
              : "transition-all"
          }`}
          onMouseEnter={() => setisOnTarget({ videos: false, likes: true })}
        >
          Me gusta
        </button>
      </div>
      <div className="bg-zinc-900 h-72 over w-5/6 mx-auto mt-6 rounded-lg overflow-y-scroll grid grid-cols-3  gap-2 ">
        {!videos ? (
          <h1>Cargando</h1>
        ) : videos.length === 0 ? (
          <div>
            <h1>No hay videos</h1>
          </div>
        ) : isOnTarget.videos ? (
          videos.map((e, i) => {
            return (
              <div className="bg-black  h-56 flex items-center mx-5 my-5 hover:shadow-lg hover:shadow-zinc-900 transition-all ">
                <Link to={`/video/@${PRINCIPAL_USER.username}/${e.id}`}>
                  <video
                    src={"http://localhost:3456" + e.VIDEO_PATH}
                    ref={(el) => (videoREF.current[i] = el)}
                    onMouseEnter={() => {
                      videoREF.current[i].play();
                      videoREF.current[i].volume = 0;
                    }}
                    onMouseLeave={() => {
                      videoREF.current[i].pause();
                      videoREF.current[i].currentTime = 0;
                      videoREF.current[i].volume = 0;
                    }}
                    className="h-44 w-36 mx-auto"
                  ></video>
                </Link>
              </div>
            );
          })
        ) : (
          <h1>hola</h1>
        )}
      </div>
    </div>
  );
}

export default Videos;
