import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Enrouter, Route, Routes} from "react-router-dom"
import Home from './components/Home'
import TopNavBar from './components/TopNavBar'
import axios from 'axios'
import { UserContext } from './Context/UserContext'
import StudioHome from './components/Studio/StudioHome'
import ProfilePage from './components/Profile/ProfilePage'
import LeftNavBar from './components/Home/LeftNavBar'
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
    <div className='bg-zinc-900 h-screen'>
    {
      !loading ? <>


      <Enrouter>
      <TopNavBar/>
      
        <div className='flex justify-between h-screen'>
        <LeftNavBar/>

        <Routes >
          <Route path='/' element={<Home/>}/>
          <Route path='/studio/upload' element={<StudioHome/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
        </Routes>
       
        </div>
      </Enrouter>
      
      </> : <div className='bg-zinc-900'> </div>
    }
    </div>
  )
}

export default App
