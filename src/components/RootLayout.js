import React from 'react'
import {NavLink,Outlet} from "react-router-dom"
import "./RootLayout.css"
function RootLayout(){
  return (
    <div>
        <nav className='d-flex w-100 justify-content-between'>
            <NavLink className="nav-link" to="">
                <h1>Shopping Website (22071A0533)</h1>
            </NavLink>
            <ul className='d-flex flex-row list-unstyled p-0'>
                <li>
                    <NavLink className="nav-link" to="register">
                        Register
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="Login">
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="cart">
                        Cart
                    </NavLink>
                </li>
            </ul>
        </nav>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default RootLayout ;