import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Contact from './Component/Contact'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/contact',
      element: <Contact/>
    }
  ])

  

  

  return (
    <>

    <Navbar />
    <RouterProvider router={router} ></RouterProvider>
    
     
    </>
  )
}

export default App
