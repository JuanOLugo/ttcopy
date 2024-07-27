import React from "react";
import BasicInfo from "./BasicInfo";
import Videos from "./Videos";

function ProfilePage() {
  return (
    <div className="  w-full top-0 z-20 h-5/6 ">
      <div className="w-3/5 bg-zinc-800  mx-auto mt-4 h-full ">
        <BasicInfo />
        <Videos/>
      </div>
    </div>
  );
}

export default ProfilePage;
