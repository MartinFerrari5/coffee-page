import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Footer = () => {
    const navigate = useNavigate()
    const year = new Date().getFullYear()
  return (
    <div className='bg-black text-white '>
     <div className='flex md:flex-row flex-col justify-around align-middle p-3'>
     <h2 className='my-auto text-2xl text-center'>BlogdeCafe</h2>
      <nav className='text-white text-center'>
          <button className='m-1 hover:text-orange-200' onClick={()=>{
            navigate("/")
          }}>Inicio</button>
          <button className='m-1 hover:text-orange-200' onClick={()=>{
            navigate("/nosotros")
          }}>Nosotros</button>
          <button className='m-1 hover:text-orange-200' onClick={()=>{
            navigate("/cursos")
          }}>Cursos</button>
          <button className='m-1 hover:text-orange-200' onClick={()=>{
            navigate("/contacto")
          }}>Contacto</button>
      </nav>
     </div>
     <h6 className='text-center text-sm'>Todos los derechos reservado {year}</h6>
    </div>
  )
}
