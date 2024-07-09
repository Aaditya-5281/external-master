import React from 'react'
import "./Login.css"
function Login() {
  return (
    <div className='login d-flex justify-content-center align-items-center'>
        <div className='bg-white p-5 rounded-3'>
            <h1 className='text-info text-center'>Login</h1>
            <form>
                <div className='mb-3 row'>
                    <input className="form-control" type="email" id="e" placeholder="Email" />    
                </div>
                <div className='mb-3 row'>
                    <input className="form-control col" type="password" id="p" placeholder="Password" />
                </div>
                <div className='text-center'>
                    <button type='submit' className='btn btn-success'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login