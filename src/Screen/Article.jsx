import React from 'react'
import { useParams } from 'react-router-dom'
import datos from '../datos'
export default function Article() {
    const arr = useParams().number
    
   
  return (
    <div className='w-11/12 md:w-10/12 my-2 mx-auto'>
      <img src={ datos[arr].img} alt="coffee" />
      <p className='text-center text-xl font-bold'>{datos[arr].title}</p>
      <p className='border-l-2 p-2 border-l-orange-400'>{datos[arr].content}</p>
    </div>
  )
}
