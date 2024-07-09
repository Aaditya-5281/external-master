import React from 'react'
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from "./Home"
import Register from "./Register"
import Login from "./Login"
import Cart from "./Cart"
import "./Root.css"
import RootLayout from './RootLayout'
const Root = () => {
    let router = createBrowserRouter([
        {
            path:'',
            element:<RootLayout/>,
            children:[
                {
                    path:'',
                    element:<Home/>
                },
                {
                    path:'register',
                    element:<Register/>
                },
                {
                    path:'login',
                    element:<Login/>
                },
                {
                    path:'cart',
                    element:<Cart/>
                }
            ]
        }
    ])
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default Root