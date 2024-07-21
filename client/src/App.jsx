import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Enrouter, Route, Routes} from "react-router-dom"
import Home from './components/Home'
import TopNavBar from './components/TopNavBar'
import axios from 'axios'
import { UserContext } from './Context/UserContext'
function App() {
  
  const {USER_PRINCIPAL, setPRINCIPAL_USER} = useContext(UserContext)
  const user_token = window.localStorage.getItem("user")
  const [loading, setloading] = useState(false)
  const login_with_token = async () => {
    setloading(true)
    const data = await axios.post("http://localhost:3456/api/session/getaccess", {}, {
      headers: {
        Authorization: "bearer " + user_token
      }
    })
    console.log(data)
    if(data.data.user){
      setPRINCIPAL_USER(data.data.user)
    }
    setloading(false)
  } 
  

  useEffect(() => {
    if(user_token){

      login_with_token()
      
    }
  }, [])
  

  return (
    <>
    {
      !loading ? <>

<TopNavBar/>
      <Enrouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Enrouter>
      
      </> : <div className='bg-zinc-900'> </div>
    }
    </>
  )
}

export default App
