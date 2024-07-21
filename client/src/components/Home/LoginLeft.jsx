import React, { useContext, useState } from 'react'
import { UserContext } from '../../Context/UserContext'
import LoginWindow from '../Login/LoginWindow'
function LoginLeft() {

    const {USER_PRINCIPAL} = useContext(UserContext)
    const [goLogin, setgoLogin] = useState(false)

  return (

        <div className='text-white flex flex-col justify-center my-5'>
            {goLogin ? <LoginWindow setOpen={setgoLogin}/> : null}      
                <>
                    <p className='text-zinc-600 mx-3 w-60 text-lg'>Log in to follow creators, like videos, and view comments.</p>
                    <button className='py-4 my-4 w-60  border-2 hover:bg-red-500 hover:bg-opacity-20 border-red-500 rounded-md text-red-500 mx-3 bg-zinc-800' onClick={() => {
                        setgoLogin(!goLogin)
                    }}>
                    Log in
                    </button>
                </>
        
        </div> 
  )
}

export default LoginLeft