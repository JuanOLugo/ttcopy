import React, { useState } from 'react'

function Videos() {

    const [isOnTarget, setisOnTarget] = useState({
        videos: true,
        likes: false
    })

  return (
    <div className='text-white'>
        <div className='bg-zinc-900 mx-auto py-3 text-xl font-bold w-5/6 rounded-lg'>
            <button className={`px-2 ml-3 py-1 ${isOnTarget.videos ? "border-b  border-white transition-all" : "transition-all"}`} onMouseEnter={() => setisOnTarget({videos: true, likes: false})}>Videos</button>
            <button className={`px-2 py-1 ${isOnTarget.likes ? "border-b border-white transition-all" : "transition-all"}`} onMouseEnter={() => setisOnTarget({videos: false, likes: true})}>Me gusta</button>
        </div>
        <div></div>
    </div>
  )
}

export default Videos