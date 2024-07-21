import React, { useContext } from 'react'
import LoginLeft from './LoginLeft'
import { UserContext } from '../../Context/UserContext'
import { Link } from 'react-router-dom'
function AccountsYouFollow() {

    const {PRINCIPAL_USER} = useContext(UserContext)

  return (
    <>
        {
            !PRINCIPAL_USER ? <LoginLeft/> : <div className='ml-3 text-white font-bold '>
            <h1 >Cuentas que sigues</h1>
            <div className="">
            {
               PRINCIPAL_USER.ACCOUNTS_FOLLOW.length === 0 ? <button className='bg-red-500 w-40 px-5 py-2 text-white rounded-xl my-2 '><Link to={"/explora"}>Explora</Link></button> :  PRINCIPAL_USER.ACCOUNTS_FOLLOW.map(e => {
                return (
                    <div>
                        <h1>{e.username}</h1>
                    </div>
                )
            })
            }
            </div>
        </div>
        }   
    </>
  )
}

export default AccountsYouFollow