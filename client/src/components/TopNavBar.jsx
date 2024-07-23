import React, { useContext, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { UserContext } from "../Context/UserContext";
import LoginWindow from "./Login/LoginWindow";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import DropDownButtons from "./Topnavbar/DropDownButtons";
function TopNavBar() {
  const { PRINCIPAL_USER } = useContext(UserContext);
  const [isOpen, setisOpen] = useState(false);
  const [isOpenDropdown, setisOpenDropdown] = useState(false)
  return (
    <div className="flex justify-around h-16 items-center  bg-zinc-900">
      {isOpen ? <LoginWindow setOpen={setisOpen} /> : null}
      <div>
        <img src="../../public/TikTok_logo.svg" width={125} alt="" />
      </div>
      <div className="flex py-3 bg-zinc-700 rounded-3xl px-5">
        <input
          type="text"
          className="w-96 text-white outline-none placeholder:text-zinc-500 bg-zinc-700 pr-10 border-r border-zinc-200"
          placeholder="Buscar"
        />
        <button className="text-zinc-500 ml-4">
          <FaMagnifyingGlass />
        </button>
      </div>
      {PRINCIPAL_USER ? (
        <div>
          <div className="flex justify-between  w-60">
          <button className="flex text-white items-center font-bold text-xl justify-between  px-3  rounded-sm bg-zinc-800">
            <FaPlus />
            <p className="mx-3 ">Cargar</p>
          </button>
          <button className="bg-zinc-800 rounded-full p-3 text-white text-3xl" onMouseEnter={() => setisOpenDropdown(!isOpenDropdown)}>
          <FaUser />
          </button>
        </div>
        {
          isOpenDropdown ? <div className="bg-zinc-800 flex flex-col my-2 absolute w-56 rounded-md px-1 py-1" onMouseLeave={() => setisOpenDropdown(false)}>
          <DropDownButtons text={"Perfil"}/>
          <DropDownButtons text={"Cargar"}/>
          <DropDownButtons text={"Cerrar sesion"} styleClass={"border-t "} buttonFunc={() => {
            window.localStorage.removeItem("user")
            window.location.reload()
          }}/>
        </div> : null
        }
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              setisOpen(true);
            }}
            className="bg-red-500 py-2 px-10 rounded-xl text-white font-bold text-xl"
          >
            Log in
          </button>
        </div>
      )}
    </div>
  );
}

export default TopNavBar;
