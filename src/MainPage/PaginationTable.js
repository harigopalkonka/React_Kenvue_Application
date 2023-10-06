import React,{useState} from 'react'

import "./PaginationTable.css"

import {AiOutlineFilePdf} from "react-icons/ai"
import {AiOutlineFileExcel} from "react-icons/ai"
import {CiFilter} from "react-icons/ci"
import {TiArrowUnsorted} from "react-icons/ti"

const Table = () => {

  const itemsPerPage = 9; 
  const [currentPage, setCurrentPage] = useState(1); 

  const data = [
    {externalid:1,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:2,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:3,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:4,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:5,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:6,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:7,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:8,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:10,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:11,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:12,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:13,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:14,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:15,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:16,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:17,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:18,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:19,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:20,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:21,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:22,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:23,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:24,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:25,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:26,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:27,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:28,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},
    {externalid:29,documenttype:"OrderCanonical",state:"Document sent to SAP",timereceived:"12-10-2023:12:56:18 AM",sender:"CA105_JNJ_CONAP",recevier:"CA105_JNJ_CONAP",status:"Comploted"},

  ];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };


  return (

    <div className='pgtable-page'>

      <div className='pgtable-container'>

        <h2 className='pgcount-header'>423 Query Results</h2>

        <div className='pgtable-icons'>

            <p className='pgtable-icon'><AiOutlineFilePdf/></p>

            <p className='pgtable-icon'><AiOutlineFileExcel/></p>

        </div>

      </div>

      <div className='pgtable'>

            <table>

                <thead className='pgtable-head'>

                    <tr>
                        <th scope='col' >External ID <TiArrowUnsorted/></th>
                        <th scope='col' >Document Type <TiArrowUnsorted/></th>
                        <th scope='col' >State <TiArrowUnsorted/></th>
                        <th scope='col' >Time Received <TiArrowUnsorted/></th>
                        <th scope='col'>Sender <TiArrowUnsorted/> <CiFilter/></th>
                        <th scope='col' >Receiver <TiArrowUnsorted/> <CiFilter/></th>
                        <th scope='col' >Status <TiArrowUnsorted/> <CiFilter/></th>
                    </tr>

                </thead>

                <tbody>
                    {currentData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.externalid}</td>
                            <td>{item.documenttype}</td>
                            <td>{item.state}</td>
                            <td>{item.timereceived}</td>
                            <td>{item.sender}</td>
                            <td>{item.recevier}</td>
                            <td>{item.status}</td>
                        </tr>
                    ))}
                </tbody>

        </table>
        
      </div>
      
      
        <div className='pgTableBelowSection'>

          <div>
            <p>Showing of  <select className='pgselect'>
              <option>10</option>
              <option>15</option>
              <option>20</option>
              </select>  100 Entries</p>
          </div>
          

          <div className="pgpagination">

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className='pgTablebutton'
              >
                {index + 1}
              </button>
            ))}
              
          </div>

        </div>
        

      

    </div>
  )
}


export default Table
