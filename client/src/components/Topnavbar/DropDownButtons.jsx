import React from 'react'

function DropDownButtons({text, icon, styleClass, buttonFunc}) {
  return (
    <button className={`font-bold text-xl text-white  mt-2 text-start   w-full ${styleClass} `} onClick={buttonFunc}>
       <label className='ml-1 cursor-pointer '> {icon} {text}</label>
    </button>
  )
}

export default DropDownButtons