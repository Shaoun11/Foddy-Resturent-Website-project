import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Mainlayout from './MainLayout/Mainlayout.jsx'
import Home from './Components/Home/Home.jsx'
import Errorpage from './Components/Error.jsx'
import AllFood from './Components/pages/ALLFood/AllFood.jsx'
import {  HelmetProvider } from 'react-helmet-async'

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const routes = createBrowserRouter([{
  path: "/",
  element: <Mainlayout></Mainlayout>,
  errorElement: <Errorpage></Errorpage>,
  children: [
    {
      path: "/",
      element: <Home></Home>,
      loader: () => fetch('http://localhost:5000/allfoods')
    },
    {
      path: "/allfood",
      element:<AllFood></AllFood>,
      loader:()=>fetch('http://localhost:5000/allfoods')
    }
  ]
}


])

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <QueryClientProvider client={client}>
    <HelmetProvider>
   <RouterProvider router={routes} >

</RouterProvider>
   </HelmetProvider>
    </QueryClientProvider>
   
  </React.StrictMode>,
)
