import React, { useEffect, useState } from 'react'
import Upload from './Upload'
import EditVideo from './EditVideo'

function StudioHome() {

  const [file, setfile] = useState(null)

  
  return (
    <div className='bg-zinc-900 flex flex-col justify-center items-center relative  '>
        {
          !file ? <Upload setFile={setfile}/> : <EditVideo file={file}/>
        }
        
    </div>
  )
}

export default StudioHome