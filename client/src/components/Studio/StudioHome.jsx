import React, { useEffect, useState } from 'react'
import Upload from './Upload'
import EditVideo from './EditVideo'

function StudioHome() {

  const [file, setfile] = useState(null)

  
  return (
    <div className='bg-zinc-900 h-screen flex flex-col justify-center items-center absolute -z-20 w-full top-0'>
        {
          !file ? <Upload setFile={setfile}/> : <EditVideo file={file}/>
        }
        
    </div>
  )
}

export default StudioHome