import React, { useContext, useState } from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { UserContext } from '../Context/UserContext';
import LoginWindow from './Login/LoginWindow';
import { Link } from 'react-router-dom';
function TopNavBar() {

    const {PRINCIPAL_USER} = useContext(UserContext)
    const [isOpen, setisOpen] = useState(false)
  return (
    <div className='flex justify-around h-16 items-center  bg-zinc-900'>
        {
            isOpen ? <LoginWindow setOpen={setisOpen}/> : null
        }
        <div>
            <img src="../../public/TikTok_logo.svg" width={125} alt=""   />
        </div>
        <div className='flex py-3 bg-zinc-700 rounded-3xl px-5'>
            <input type="text" className="w-96 text-white outline-none placeholder:text-zinc-500 bg-zinc-700 pr-10 border-r border-zinc-200"  placeholder='Buscar' />
            <button className='text-zinc-500 ml-4'><FaMagnifyingGlass /></button>
        </div>
        {
            PRINCIPAL_USER ? 
            <div>
                
            </div>
            : <div>
            <button onClick={() => {
                setisOpen(true)
            }} className='bg-red-500 py-2 px-10 rounded-xl text-white font-bold text-xl'>Log in</button>
        </div>
        }
    </div>
  )
}

export default TopNavBar