import React, { useRef } from 'react'
import { IoIosCloudUpload } from "react-icons/io";
import Targets from './Targets';

import { FaCamera } from "react-icons/fa";
function Upload() {

    const inputFile = useRef(null)
    
    const handleFile = (e) => {
       const file =  e.target.files[0]
       if(file){
        const formData = new FormData()
        formData.append("file", file)
        console.log(formData.getAll("file"))
       }
    }

  return (
    <div className='bg-zinc-800 w-8/12 h-4/6 rounded-lg'>
        <input type="file" ref={inputFile} className='hidden' onChange={handleFile} accept='video/*'/>
        <div onClick={() => {inputFile.current.click()}} className='border-dashed border rounded-lg
         h-full flex cursor-pointer hover:bg-zinc-700 transition-all justify-center items-center'>
            <div>
                <div >
                <IoIosCloudUpload className='mx-auto text-7xl text-zinc-500'  />
                </div>
                <div>
                    <p className='text-white font-bold text-2xl'>Selecciona el video que quieras cargar</p>
                </div>
                <div>
                    <p className='text-white text-center'>O arrastra y sueltalo aqui</p>
                </div>
                <div className='flex justify-center'>
                    <button className=' bg-red-500 text-white font-bold text-xl px-4 py-1 my-5 rounded-xl'>
                        Seleccionar video
                    </button>
                </div>
            </div>
        </div>
        <div className='flex '>
        <Targets icon={<FaCamera />} title={"Tamaño y duracion"} text={"Tamaño máximo: 10 GB, duración del video: 60 minutos."}/>
        <Targets icon={<FaCamera />} title={"Tamaño y duracion"} text={"Tamaño máximo: 10 GB, duración del video: 60 minutos."}/>
        <Targets icon={<FaCamera />} title={"Tamaño y duracion"} text={"Tamaño máximo: 10 GB, duración del video: 60 minutos."}/>
        </div>
    </div>
  )
}

export default Upload