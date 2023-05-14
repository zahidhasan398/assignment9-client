import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './component/Error.jsx';
import Home from './component/Home.jsx';
import Blog from './component/Blog.jsx';
import RecepeLay from './component/RecepeLay.jsx';
import ViewRecepe from './component/ViewRecepe.jsx';
import AuthProvider from './component/AuthProvider.jsx';
import Login from './component/Login.jsx';
import Register from './component/Register.jsx';
import PrivateRoute from './component/PrivateRoute.jsx';
const router=createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch("https://b7a10-chef-recipe-hunter-server-side-zahidhasan39-zahidhasan398.vercel.app/")
      },
      {
        path:"blog",
        element:<Blog></Blog>
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"register",
        element:<Register></Register>
      }
    ]
    

  }
  ,
  {
    path:"recepe",
    element:<PrivateRoute><RecepeLay></RecepeLay></PrivateRoute>,
    children:[
      {
        path:":id",
        element:<ViewRecepe></ViewRecepe>,
        loader: ({params})=>fetch(`https://b7a10-chef-recipe-hunter-server-side-zahidhasan39-zahidhasan398.vercel.app/chef/${params.id}`)
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
