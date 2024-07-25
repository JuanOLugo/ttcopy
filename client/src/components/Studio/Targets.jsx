import React from 'react'

function Targets({text, icon , title}) {
  return (
    <div className=' w-3/4 m-3'>
        <div className='flex items-center text-zinc-600 f'>
            <label className='mr-1 text-xl '>{icon}</label>
            <label className='font-bold text-lg'>{title}</label>
        </div>
        <div>
            <label className='text-zinc-600 font-normal'>{text}</label>
        </div>
    </div>
  )
}

export default Targets