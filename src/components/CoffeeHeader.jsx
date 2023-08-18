import React from 'react'
import { useNavigate } from 'react-router-dom'
// import {Helmet} from "react-helmet-async"
export const CoffeeHeader = () => {
  const navigate = useNavigate()
  return (
   <header className='flex flex-col'>
    
    {/* TOP */}
    <div className='flex flex-col md:flex-row text-center md:justify-around p-2'>
    
      <p className='text-white font-bold text-2xl'>Blogde<span className='text-orange-200'>Cafe</span></p>
        <nav className='text-white '>
          <button className='m-1 hover:text-orange-200' onClick={()=>{
            navigate("/")
          }}>Inicio</button>
          <button className='m-1 hover:text-orange-200' onClick={()=>{
            navigate("/nosotros")
          }}>Nosotros</button>
          <button className='m-1 hover:text-orange-200' onClick={()=>{
            navigate("/cursos")
          }}>Cursos</button>
          
      </nav>
    </div>
      {/* MIDDLE */}
        <div className='flex flex-col text-white text-center h-full  justify-center'>
          <h1 className='text-3xl font-bold'>Bienvenidos al Mundo del Café</h1>
          <h2>Donde se descubren aromas y nuevos sabores</h2>
        </div>
   </header>
  )
}


