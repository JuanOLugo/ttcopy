import React from 'react'
import ButtonExplo from './ButtonExplo'
import { IoMdHome } from "react-icons/io";
import { FaUser, FaUserFriends} from "react-icons/fa";
import AccountsYouFollow from './AccountsYouFollow';
function LeftNavBar() {
  return (
    <div className='flex flex-col  '>
      <div className='my-5'>
        <ButtonExplo text={"Para ti"} Icon={<IoMdHome />} isNew={false}/>
        <ButtonExplo text={"Siguiendo"} Icon={<FaUserFriends/>} isNew={true}/>
        <ButtonExplo text={"Perfil"} Icon={<FaUser />} isNew={false}/>
      </div>

      <AccountsYouFollow/>

      <div className='mx-3 my-6'>
        <h1 className='font-bold text-zinc-700'>Company</h1>
        <h1 className='font-bold text-zinc-700'>Program</h1>
        <h1 className='font-bold text-zinc-700'>Terms & Polices</h1>
        <p className='text-xs text-zinc-700 my-5'>2024 TikTok</p>
      </div>

    </div>
  )
}

export default LeftNavBar