import React, { useRef, useState } from 'react'
import axios from 'axios'
function EditVideo({file}) {
    
    const size = file.size.toLocaleString("es-ES").split(".")[0]
    const textArea = useRef(null)
    const [description, setdescription] = useState(null)
    const formData = new FormData()
    const uploadFile = async dataToSend => {

        formData.append("file", file)
        formData.append("description", description)

        const data = await axios.post("http://localhost:3456/api/upload/video", formData , {
            headers: {
                "Content-Type": 'multipart/form-data',
                Authorization: "bearer " + window.localStorage.getItem("user")
            }
        })

        console.log(data)
    }

    const handleClickUpload = () => {
        if(description && file){
            uploadFile(file)
        }else alert("error")
    }

  return (
    <div >
        <div className='bg-zinc-800 px-4 py-3 rounded-lg'>
            <div>
                <h1 className='text-white text-2xl font-bold'>{file.name}</h1>
            </div>
            <div>
                <h1 className='text-white text-xl font-normal'>Tamaño: {size} {Number(size) > 1024000000000 ? "GB" : "MB"}</h1>    
            </div>
        </div>
        <div className='bg-zinc-800 px-4 py-3 rounded-lg flex justify-evenly items-center my-10'>
            <div className='bg-zinc-700 w-6/12 rounded-md p-2'>
                <textarea ref={textArea} onChange={(e) =>  setdescription(e.target.value)} className='resize-none outline-none w-96 h-28 bg-zinc-700 rounded-md p-3 placeholder:text-white text-white font-semibold' placeholder='Ingresa una descripción'></textarea>
                <button className='text-zinc-400 cursor-pointer font-bold' onClick={() => {
                    textArea.current.value += "#"
                }}>
                    #
                   Hashtags
                </button>
            </div>
            <div>
                <button className='bg-red-500 text-white px-5 py-2 rounded-md font-bold ' onClick={handleClickUpload}>Publicar</button>
                
            </div>
        </div>
    </div>
  )
}

export default EditVideo