import React, { useContext, useEffect, useState } from 'react'
import Login from './Login'
import Singup from './Singup'
import { UserContext } from '../../Context/UserContext'
function LoginWindow({setOpen}) {

    const [sOl, setsOl] = useState(false)
    const {USER_PRINCIPAL} = useContext(UserContext)

    useEffect(() => {
        if(USER_PRINCIPAL){
            setOpen(false)
        }
    }, [USER_PRINCIPAL])
    

  return (
    <div className='bg-black bg-opacity-30 text-white  w-full h-screen  z-10 absolute top-0 flex items-center'> 
        <div className='bg-zinc-900 w-2/6 h-5/6 mx-auto rounded-lg flex flex-col justify-between'>
        <button className='bg-zinc-800 absolute text-xl p-3 rounded-full font-bold m-3 text-white' onClick={() => {
            setOpen(false)
        }}>X</button>
        {!sOl ? <Login/> : <Singup/>}
        <div className='border-t   '>
        {sOl ? <div className='flex text-sm justify-center my-3'> 
            <p>Ya tiene cuenta?</p>
            <button className='ml-1 text-red-500' onClick={() => {
                setsOl(false)
            }}>Inicia sesion</button>
        </div> : <div className='flex text-sm justify-center my-3'> 
            <p>No tienes cuenta? </p>
            <button className='ml-1 text-red-500' onClick={() => {
                setsOl(true)
            }}>Registrate</button>
        </div>}
        </div>
        </div>
    </div>
  )
}

export default LoginWindow