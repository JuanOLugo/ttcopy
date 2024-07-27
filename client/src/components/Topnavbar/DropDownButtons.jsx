import React from 'react'
import { Link } from 'react-router-dom'

function DropDownButtons({text, icon, styleClass, buttonFunc, goTo}) {
  return (
    <Link to={goTo}>
    <button className={`font-bold text-xl text-white  mt-2 text-start   w-full ${styleClass} `} onClick={buttonFunc}>
       <label className='ml-1 cursor-pointer '> {icon} {text}</label>
    </button>
    </Link>
  )
}

export default DropDownButtons