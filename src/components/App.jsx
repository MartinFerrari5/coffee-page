import React from 'react'
import {CoffeeHeader} from "./CoffeeHeader"
import {Data} from "../Screen/Data"
import {Nosotros} from "./Nosotros"
import Article from '../Screen/Article'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Footer } from './Footer'
import { Cursos } from './Cursos'

const router = createBrowserRouter([{
  path:"/",
  element: <>
  <CoffeeHeader />
  <Data />
  <Footer />
  </>
},
{
  path:"/art/:number",
  element: <>
  <CoffeeHeader />
  <Article />
  <Footer />
  </>
},
{
  path:"/nosotros",
  element: <>
  <CoffeeHeader />
  <Nosotros />
  <Footer />
  </>
},
{
  path:"/cursos",
  element: <>
  <CoffeeHeader />
  <Cursos />
  <Footer />
  </>
}
])

const App = () => {
  return (
    <div className=''> 
      <RouterProvider router={router} />
      
    </div>
  )
}

export default App
