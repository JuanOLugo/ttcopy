import React from 'react'
import { Link } from 'react-router-dom'

function ButtonExplo({text, Icon, isNew, goTo}) {
  return (
    <Link to={goTo} >
      <button className='flex max-w-72  items-center text-white px-4 py-1'>
        <div className='text-2xl'>{Icon}</div>
        <h1 className='font-bold text-2xl mx-2'>{text}</h1>
        {isNew ? <h1 className='text-sm font-bold bg-red-500 px-2 rounded-2xl '>Nuevo</h1> : null}
    </button>
    </Link>
  )
}

export default ButtonExplo