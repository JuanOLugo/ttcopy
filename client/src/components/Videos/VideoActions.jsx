import React from 'react'
import { BiSolidLike } from "react-icons/bi";
import { FaCommentDots } from "react-icons/fa";
import { BsFillSave2Fill } from "react-icons/bs";
function VideoActions({VideoData}) {

    console.log(VideoData)

  return (
    <div className='flex w-96 justify-around text-white'>
        <div className='bg-zinc-700 px-3 py-2 text-center text-2xl rounded-full'>
            <button><BiSolidLike /></button>
        </div>
        <div className='bg-zinc-700 px-3 py-2 text-center text-2xl rounded-full'>
            <button><FaCommentDots /></button>
        </div>
        <div className='bg-zinc-700 px-3 py-2 text-center text-2xl rounded-full'>
            <button><BsFillSave2Fill /></button>
        </div>
    </div>
  )
}

export default VideoActions