import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Mainlayout from './MainLayout/Mainlayout.jsx'
import Home from './Components/Home/Home.jsx'

const routes=createBrowserRouter([{
  path:"/",
  element:<Mainlayout></Mainlayout>,
  children:[
    {
    path:"/",
    element:<Home></Home>
  },
]
}


])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} >

    </RouterProvider>
  </React.StrictMode>,
)
