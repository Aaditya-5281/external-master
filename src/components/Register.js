import React from 'react'
import "./Register.css"
function Register(){
  return (
    <div className='register d-flex justify-content-center align-items-center'>
        <div className='bg-white p-5 rounded-3'>
            <h1 className='text-info text-center'>Register</h1>
            <form>
                <div className='mb-3'>
                    <input className="form-control" type="text" id="f" placeholder="First Name"/>
                </div>
                <div className='mb-3'>
                    <input className="form-control" type="text" id="l" placeholder="Last Name"/>
                </div>
                <div className='mb-3 row'>
                    <div className='col'>
                        <input className="form-control" type="email" id="e" placeholder="Email" />
                    </div>
                    <div className='col'>
                        <input className="form-control col" type="password" id="p" placeholder="Password" />
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor="">Date of Birth</label>
                    <input className="form-control " type="date" id="l" placeholder="Last Name" />
                </div>
                <label class="form-check-label d-block">Gender</label>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">Male</label>
                </div>
                <div class="form-check form-check-inline mb-3">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio2">Female</label>
                </div>
                <div className='text-center'>
                    <button type='submit' className='btn btn-success'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register