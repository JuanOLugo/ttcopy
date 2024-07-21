import React, { useContext, useState } from 'react'
import axios from 'axios'
import { UserContext } from '../../Context/UserContext'
function Singup() {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [err, seterr] = useState()
    const {setPRINCIPAL_USER} = useContext(UserContext)
    const handleSubmit = async (e) => {
        e.preventDefault()

        if(password === "" || username === "") return seterr("Rellena las credenciales")
        const data_to_send = {
            username,
            password
            }
        const data = await axios.post("http://localhost:3456/api/session/createuser", data_to_send)
        
        setPRINCIPAL_USER(data.data.user)
        window.localStorage.setItem("user", data.data.token)

    }

  return (
    <div className='flex flex-col w-full items-center '>
        <h1 className='text-2xl font-bold text-center my-5'>Registrate</h1>
        <form className=' flex flex-col ' onSubmit={handleSubmit}>
            <h1 className=' font-bold text-xl my-4'>Rellena tus credenciales</h1>
            <div className='flex flex-col '>
                <div className=''>
                <input type="text" placeholder='Nombre de usuario' className='w-72 py-3 bg-zinc-700 outline-none rounded-sm px-6' onChange={(e) => {
                    setusername(e.target.value)
                }}/>
                </div>
                <div className='mt-5'>
                <input type="password" placeholder='Contraseña' className='w-72 py-3 bg-zinc-700 outline-none rounded-sm px-6' onChange={(e) => {
                    setpassword(e.target.value)
                }}/>
                </div>
            </div>
            {password === "" || username === "" ? <p className='my-5 bg-zinc-800 text-zinc-700 w-48 mx-auto py-2 rounded-md text-center font-bold'>Registrate</p> : <button className='my-5 bg-red-500 w-48 mx-auto py-2 rounded-md font-bold'>Registrate</button>}
            
        </form>
    </div>
  )
}

export default Singup