import React from 'react'

import { Link } from 'react-router-dom';


import kenvueimage from '../Images/Kenvue.png'
import employeedesk from '../Images/employeedesk.jpg'

import "./LoginPage.css"

const LoginPage = () => {


  return (

    <div >

        <div className='loginpage'>

            <div className='loginpage-leftside'>
                <div className='leftside'>
                <h1 className='login-header'><span className='h1'>Business</span><br/>
                <span className='h2'>Management</span><br/>
                <span className='h3'>System</span></h1>
                </div>

                <div>
                    <img alt='' src={employeedesk} className='empimage'/>
                </div>
            </div>



            <div className='loginpage-rightside'>

                <div>

                    <img alt='' src={kenvueimage} className='kenvue-image' />

                </div>

                <div className='form'>

                    <p className='loginpage-paragraph1'>ID</p>
                    <input type='text' className='login-input' />

                    <p className='loginpage-paragraph2'>Password</p>
                    <input type='password' className='login-input'/>

                    <p></p>
                    
                    <Link to="/Main">
                        <button className='button'>Login</button>
                    </Link>
                    
                </div>

            </div>

        </div>

    </div>

  )
}

export default LoginPage
