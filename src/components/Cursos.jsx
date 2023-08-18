import React from 'react'
import cursosData from '../cursosData'
export const Cursos = () => {
  return (
    <div className='grid grid-cols-1 my-2 gap-3 w-11/12 md:w-10/12 mx-auto'>
      {cursosData.map(data=>{
        return(
            <article className='flex flex-col md:flex-row border-l-2 border-l-orange-500 p-2 gap-2 '>
               <div className='w-10/12 m-0 text-center'>
               <img src={data.img} className=' w-full md:w-1/2 ' alt="coffee" />
               </div>
                <div>
                    <p className='text-center font-bold'>{data.title}</p>
                    <p className='text-center'>{data.content}</p>
                </div>
            </article>
        )
      })}
    </div>
  )
}
