import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Mainlayout from './MainLayout/Mainlayout.jsx'
import Home from './Components/Home/Home.jsx'
import Errorpage from './Components/Error.jsx'
import AllFood from './Components/pages/ALLFood/AllFood.jsx'
import {  HelmetProvider } from 'react-helmet-async'
import {useQuery,useMutation,useQueryClient,QueryClient,QueryClientProvider,} from '@tanstack/react-query'
import FoodDetails from './Components/Details/FoodDetails.jsx'
import Login from './Components/Authentication/Login.jsx'
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx'
import Register from './Components/Authentication/Register.jsx'
import Blog from './Components/Blog/Blog.jsx'
import OrderPage from './Components/OrderPage/OrderPage.jsx'
import MyOrder from './Components/OrderPage/MyOrder.jsx'
import AddFood from './Components/AddFood/AddFood.jsx'
import MyAddedFood from './Components/AddFood/MyAddedFood.jsx'
import PrivateRoute from './Components/AuthProvider/PrivateRoute.jsx'
import Updated from './Components/AddFood/Updated.jsx'

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
    },
    {
      path: "/details/:id",
      element:<FoodDetails></FoodDetails>,
     loader:({params})=>fetch(`http://localhost:5000/foods/${params.id}`)
    },
    {
      path:"/blog",
      element:<Blog></Blog>
    },
    {
      path:"/orderpage/:id",
      element:<PrivateRoute><OrderPage></OrderPage></PrivateRoute>,
      loader:({params})=>fetch(`http://localhost:5000/foods/${params.id}`)
    },
    {
      path:"/myorder",
      element:<PrivateRoute><MyOrder></MyOrder></PrivateRoute>,
      loader:()=>fetch(`http://localhost:5000/order`)
    },
    {
      path:"/addfood",
      element:<PrivateRoute><AddFood></AddFood></PrivateRoute>
    },
    {
      path:"/myaddfood",
      element:<PrivateRoute><MyAddedFood></MyAddedFood></PrivateRoute>,
      loader:()=>fetch(`http://localhost:5000/addedfood`) 
    },
    {
       path:"/updated/:id",
       element:<Updated></Updated>,
      loader:({params})=>fetch(`http://localhost:5000/addedfood/${params.id}`) 
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/register",
      element:<Register></Register>
    }
  ]
}


])

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  <AuthProvider>
  <QueryClientProvider client={client}>
    <HelmetProvider>
   <RouterProvider router={routes} >

</RouterProvider>
   </HelmetProvider>
    </QueryClientProvider>
  </AuthProvider>
   
  </React.StrictMode>,
)
