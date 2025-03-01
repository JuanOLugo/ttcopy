import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import axios from "axios";

function InfoVideo({ VideoData }) {
  const { PRINCIPAL_USER } = useContext(UserContext);
  const [isClick, setisClick] = useState(false);

  if (PRINCIPAL_USER) {
    const filterIsFollowed = PRINCIPAL_USER.ACCOUNTS_FOLLOW.filter((e) => {
      return e === VideoData.USER_OWNER.id;
    });
    useEffect(() => {
      if (filterIsFollowed.length > 0) {
        setisClick(true);
      } else {
        setisClick(false);
      }
    }, []);
  }

  const follow_unfollow = async (action) => {
    const data = await axios.post(
      "http://localhost:3456/api/video/addanddeletefollow",
      {
        userFollowed: VideoData.USER_OWNER.id,
        user: PRINCIPAL_USER.id,
        action,
      }
    );
    console.log(data);
  };

  return (
    <div className="bg-zinc-700 text-white w-96 rounded-lg px-5 py-4 ">
      <div className="flex justify-between items-center capitalize">
        <div>
          <h1 className="font-bold text-xl">@{VideoData.USER_OWNER.username}</h1>
          <h1 className="font-extralight">{VideoData.VIDEO_DATE.split(" ")[1] }-{VideoData.VIDEO_DATE.split(" ")[2]}-{VideoData.VIDEO_DATE.split(" ")[3]}</h1>
        </div>
        {PRINCIPAL_USER ? PRINCIPAL_USER.username == VideoData.USER_OWNER.username ? (
          ""
        ) : (
          <div>
            <button
              className="bg-red-500 rounded-lg px-3 py-1 text-xl font-semibold"
              onClick={async () => {
                setisClick(!isClick);
                if (isClick) {
                  console.log("quita follow");
                  follow_unfollow("unfollow")
                } else {
                  console.log("mandar follw");
                  follow_unfollow("add")
                }
              }}
            >
              {isClick ? "Siguiendo" : "Seguir"}
            </button>
          </div>
        ) : (

          <div>

            <button className="bg-red-500 rounded-lg px-3 py-1 text-xl font-semibold">Logueate</button>

          </div>

        )}
      </div>

      <div className="mt-5 ">
        <p className="font-bold">{VideoData.VIDEO_NAME}</p>
      </div>


    </div>
  );
}

export default InfoVideo;
