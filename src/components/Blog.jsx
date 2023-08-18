import React from 'react'
import datos from '../datos'
import { useNavigate } from 'react-router-dom'
export const Blog = () => {
    const navigate = useNavigate()
  return (
    <div>
      <h3 className='font-bold text-xl'>Nuestro Blog</h3>
      <div>
        {datos.map((dato, index)=>{
            return (
                <article key={index} onClick={()=>{
                    navigate(`/art/${index}`)
                }} className='p-3 border-l-2 border-orange-300'>
                <img src={dato.img} alt="coffee" />
                <p className='border-b-2 border-b-orange-400 w-fit text-xl my-2'>{dato.title}d</p>
                <p>{dato.content}</p>
                <button className='p-2 bg-orange-900 text-white  rounded-md hover:bg-orange-800'>Leer Más</button>
            </article>
            )
        })}
      </div>
    </div>
  )
}


