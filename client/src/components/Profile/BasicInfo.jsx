import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { FaUser } from "react-icons/fa";
function BasicInfo() {
  const { PRINCIPAL_USER } = useContext(UserContext);

  return (
    <div>
      {!PRINCIPAL_USER ? (
        "cargando"
      ) : (
        <div className=" w-full flex flex-col justify-center   bg-zinc-800 h-64 px-2 rounded-t-lg ">
          <div className="flex items-center">
            <div>
              <div>
                <FaUser className="bg-zinc-900 rounded-full  p-2 text-white text-5xl" />
              </div>
            </div>
            <div>
              <div className="text-white font-bold text-xl ml-3">
                @{PRINCIPAL_USER.username}
              </div>
            </div>
          </div>
          <div className="flex mt-5">
            <div className="text-white font-bold text-xl ml-3">
              Siguiendo: {PRINCIPAL_USER.ACCOUNTS_FOLLOW.length}
            </div>
            <div className="text-white font-bold text-xl ml-3">
              Seguidores: {PRINCIPAL_USER.ACCOUNTS_FOLLOWERS.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BasicInfo;
