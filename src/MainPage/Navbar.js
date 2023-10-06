import React from 'react'

import { Link } from 'react-router-dom'


import kenvueImg from '../Images/Kenvue.png'
import employeeImg from '../Images/employee.jpg'

import './Navbar.css'

import {CiSettings} from "react-icons/ci"
import {IoNotificationsOutline} from "react-icons/io5"
import {BsChevronDown} from "react-icons/bs"


const Navbar = () => {

  return (

    <div className='navbar-container'>

       <div >
            <img alt='' src={kenvueImg} className='kenvue-icon' />
      </div>


      <div className='navtabs-container'>

        <div><a href='#about' className='navs'>About</a></div>

       
        <Link to='/Main/Admin' className='link'>
          <div><a href='#admin' className='navs'>Administration</a></div>
        </Link>


        <Link to='/Main/Search' className='link'>
          <div><a href='#search' className='navs'>Search</a></div>
        </Link>
       
      </div>


      <div className='sernot-container'>
        <p className='set-icon'><CiSettings /></p>
        <p className='not-icon'><IoNotificationsOutline /></p>
      </div>


      <div className='profile-container'>

        <div className='profile-info'>
            <img  alt='' src={employeeImg} className='employee-icon' />
            <p className='name'>Kalyan.G <br/><span className='subname'>Admin</span></p>
            <h3 className='dropdown'><BsChevronDown/></h3>
        </div>

      </div>


    </div>

    

  )
  
}

export default Navbar

