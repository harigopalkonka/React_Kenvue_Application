import React ,{useState}from 'react'

import './DocumentDetails.css'

import {BsChevronRight} from 'react-icons/bs'
import {TiArrowUnsorted} from "react-icons/ti"


import Navbar from '../MainPage/Navbar'
import Input from '../SearchPage/SerachInput/Input'


const DocumentDetails = () => {

  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
    
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
            <p className='search-next'>Document Details</p>
        </div>
        <p className='header'>Document Details</p>
      </div>


      <div>
        
        <div className='doc-inputselect'>
            <input className='doc-input'/>
            <select className='doc-select'>
                <option></option>
                <option></option>
            </select>
        </div>

        <div className='middle-conatiner'>

            <div>
                <p>Available Actions</p>
            </div>
            <div>
            <select className='select'>
                    <option>Order ReSubmission</option>
                    <option></option>
                </select>
            </div>
            <div>
                <button className='invokebtn'>Invoke</button>
            </div>

        </div>
      </div>


      <div className='tab-container'>
      
      <div className='all-tabs'>

     
      <div className='tab-buttons'>

                <button
                className={activeTab === 'tab1' ? 'active' : ''} 
                onClick={() => handleTabClick('tab1')}
                >Document Status</button>

                <button
                className={activeTab === 'tab2' ? 'active' : ''}
                onClick={() => handleTabClick('tab2')}
                >
                Document Logs
                </button>

                <button
                    className={activeTab === 'tab3' ? 'active' : ''}
                    onClick={() => handleTabClick('tab3')}
                >
                    Parent Document
                </button>

                <button
                    className={activeTab === 'tab4' ? 'active' : ''}
                    onClick={() => handleTabClick('tab4')}
                >
                    Sibling Document
                </button>

                <button
                    className={activeTab === 'tab5' ? 'active' : ''}
                    onClick={() => handleTabClick('tab5')}
                >
                    Child Document
                </button>

                <button
                    className={activeTab === 'tab6' ? 'active' : ''}
                    onClick={() => handleTabClick('tab6')}
                >
                    Extended Properties
                </button>
            </div>

            <div>

            </div>

            
            <div className='tab-content'>
                {activeTab === 'tab1' && <div>
                    
                    <table>
                        <thead className='table-head'>
                            <tr>
                                <th scope='col'>Time Received<TiArrowUnsorted/></th>
                                <th scope='col'>State<TiArrowUnsorted/></th>
                                <th scope='col'>Document Content<TiArrowUnsorted/></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12-10-2023:12:56:18AM</td>
                                <td>Order Responcse Document Received From SAP</td>
                                <td>Order_jds.xml</td>
                            </tr>
                            <tr>
                                <td>12-10-2023:12:56:18AM</td>
                                <td>Order Responcse Document Received From SAP</td>
                                <td>Order_jds.xml</td>
                            </tr>
                            <tr>
                                <td>12-10-2023:12:56:18AM</td>
                                <td>Order Responcse Document Received From SAP</td>
                                <td>Order_jds.xml</td>
                            </tr>
                        </tbody>
                    </table>    
                </div>}
                {activeTab === 'tab2' && <div>Content for Tab 2</div>}
                {activeTab === 'tab3' && <div>Content for Tab 3</div>}
                {activeTab === 'tab4' && <div>Content for Tab 4</div>}
                {activeTab === 'tab5' && <div>Content for Tab 5</div>}
                {activeTab === 'tab6' && <div>Content for Tab 6</div>}

            </div>
      </div>

      </div>
    </div>
  )
}

export default DocumentDetails
