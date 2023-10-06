import React from 'react'

import './OrderResubmissin.css'

import {BsChevronRight} from 'react-icons/bs'
import {TiArrowUnsorted} from "react-icons/ti"


import Navbar from '../MainPage/Navbar'
import Input from '../SearchPage/SerachInput/Input'


const OrderResubmission = () => {
  return (
    <div>

      <div>
        <Navbar/>
        <Input/>
      </div>

      <div className='search-container'>
        <div className='search-innercontainer'>
            <p><a href='#search' className="search-anchor">Search</a></p>
            <p className='search-arrow'><BsChevronRight/></p>
            <p className='search-next'><a href='#doc' className='search-anchor'>Document Details</a></p>
            <p className='search-arrow'><BsChevronRight/></p>
            <p>Order Resubmission</p>
        </div>
        <p className='order-header'>Order Resubmission</p>
      </div>

      <div className='header-below'>
        <p className='paragraph'>Internal Doc ID:</p>
        <p className='paragraph1'>FileName:</p>
      </div>

      <div className='table-container'>
      <table>
                        <thead className='table-head'>
                            <tr>
                                <th scope='col'>Item Number<TiArrowUnsorted/></th>
                                <th scope='col'>Material Number<TiArrowUnsorted/></th>
                                <th scope='col'>Sales Unit<TiArrowUnsorted/></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Item 10</td>
                                <td><input value='000983214566' className='tinput'/></td>
                                <td><select className='option'><option>PC</option></select></td>
                            </tr>
                            <tr>
                                <td>Item 20</td>
                                <td><input value='000983214566' className='tinput'/></td>
                                <td><select className='option'><option>PC</option></select></td>
                            </tr>
                            <tr>
                                <td>Item 30</td>
                                <td><input value='000983214566' className='tinput'/></td>
                                <td><select className='option'><option>PC</option></select></td>
                            </tr>
                            <tr>
                                <td>Item 40</td>
                                <td><input value='000983214566' className='tinput'/></td>
                                <td><select className='option'><option>PC</option></select></td>
                            </tr>
                            <tr>
                                <td>Item 50</td>
                                <td><input value='000983214566' className='tinput'/></td>
                                <td><select className='option'><option>PC</option></select></td>
                            </tr>
                        </tbody>
                    </table>    
               
      </div>

      <div className='btn-container'>
        <button className='subbtn'>Submit</button>
      </div>

    </div>
  )
}

export default OrderResubmission
