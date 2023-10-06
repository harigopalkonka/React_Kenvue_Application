import React from 'react'

import "./Input.css"

import {BsSearch} from "react-icons/bs"
import {MdOutlineArrowDropDown} from "react-icons/md"

const Input = () => {

  return (

    <div className='hederbelow-container' >

      <div className='searchinput-container'>
        <h2 className='search-icon'><BsSearch/></h2>
        <input type="text" className='input' placeholder="Search by keywords (e.g. 'ID','Document Type', 'Sender','Receiver' ..." />
      </div>

      <div className='advanced-container'>
        <p className='dropdown-header'>Advanced Search</p>
        <h2 ><MdOutlineArrowDropDown/></h2>
      </div>

      <div className='saved-container'>
        <p className='dropdown-header'>Saved Search</p>
        <h2><MdOutlineArrowDropDown/></h2>
      </div>

     
      <div>
        
      </div>

      
    </div>
    
  )
  
}


export default Input
