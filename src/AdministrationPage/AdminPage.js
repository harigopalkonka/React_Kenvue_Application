import React, { useState } from "react";

import "./AdminPage.css";

import Navbar from "../MainPage/Navbar";
import Input from "../SearchPage/SerachInput/Input";

import { RiDeleteBinLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div>
        <Navbar />
        <Input />
      </div>

      <h1 className="Adminheading">Administration</h1>

      <div className="tab-container">
        <div className="tab-section">
          <div className="tab-buttons">
            <button
              className={activeTab === "tab1" ? "active" : ""}
              onClick={() => handleTabClick("tab1")}
            >
              Document Type(4)
            </button>
            <button
              className={activeTab === "tab2" ? "active" : ""}
              onClick={() => handleTabClick("tab2")}
            >
              Users
            </button>
            <button
              className={activeTab === "tab3" ? "active" : ""}
              onClick={() => handleTabClick("tab3")}
            >
              Roles
            </button>
            <button
              className={activeTab === "tab4" ? "active" : ""}
              onClick={() => handleTabClick("tab4")}
            >
              Misc
            </button>
          </div>

          <div>
            <button className="addbtn-container">Add Item</button>
          </div>
        </div>

        <div className="tab-content">
          {activeTab === "tab1" && (
            <div>
              <table>
                <thead className="table-head">
                  <tr>
                    <th scope="col">Document Types</th>
                    <th scope="col">Document Types Name</th>
                    <th scope="col">Division</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>RAPID_ERROR</td>
                    <td>RAPID_ERROR</td>
                    <td>
                      RAPID
                      <span className="admin-col">
                        <RiDeleteBinLine />
                        <CiEdit />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>RAPID_ITEM</td>
                    <td>RAPID_ITEM</td>
                    <td>
                      RAPID
                      <span className="admin-col">
                        <RiDeleteBinLine />
                        <CiEdit />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>RAPID_OUTBOUND_TRANSACTION</td>
                    <td>RAPID_OUTBOUND-TRANSACTION</td>
                    <td>
                      RAPID
                      <span className="admin-col">
                        <RiDeleteBinLine />
                        <CiEdit />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>RAPID_SAP_DOWNLOAD</td>
                    <td>RAPID_SAP_DOWNLOAD</td>
                    <td>
                      RAPID
                      <span className="admin-col">
                        <RiDeleteBinLine />
                        <CiEdit />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {activeTab === "tab2" && <div>Content for Tab 2</div>}
          {activeTab === "tab3" && (
            <div>
              <table>
                <thead className="table-head">
                  <tr>
                    <th scope="col">Role ID</th>
                    <th scope="col">Role Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Support</td>
                    <td>Support<span className="admin-col-1"><RiDeleteBinLine />
                      <CiEdit /></span></td>
                  </tr>
                  <tr>
                    <td>Admin</td>
                    <td>Administrator<span className="admin-col-2"><RiDeleteBinLine />
                      <CiEdit /></span></td>
                    
                  </tr>
                  <tr>
                    <td>Admin</td>
                    <td>Administrator<span className="admin-col-2"><RiDeleteBinLine />
                      <CiEdit /></span></td>
                    
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {activeTab === "tab4" && <div>Content for Tab 4</div>}
        </div>
      </div>
    </div>
  );
}

/*
      {/* <div className='Tab-container'>

        <div className="tab-buttons">

          <div className='all-tabs'>

            <div className='tab-first'>

              <button
                className={activeTab === 'tab1' ? 'active' : ''} 
                onClick={() => handleTabClick('tab1')}
              >Document Type (4)</button>

              <button
                className={activeTab === 'tab2' ? 'active' : ''}
                onClick={() => handleTabClick('tab2')}
                >
                  Users
              </button>

              <button
                  className={activeTab === 'tab3' ? 'active' : ''}
                  onClick={() => handleTabClick('tab3')}
                >
                  Roles
              </button>

              <button
                  className={activeTab === 'tab4' ? 'active' : ''}
                  onClick={() => handleTabClick('tab4')}
                >
                  Misc
              </button>

            </div>

            <div >
              <button className='add-button'>+ Add Item</button>
            </div>
              
          </div>

        </div>

      </div>


      <div className="admin-table">
              
        {activeTab === 'tab1' && <div>
                                  
          <table>
            <thead className='table-head'>
              <tr>
                  <th scope='col' >Document Types</th>
                  <th scope='col' >Document Types Name</th>
                  <th scope='col' >Division</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>RAPID_ERROR</td>
                <td>RAPID_ERROR</td>
                <td>RAPID<RiDeleteBinLine/><CiEdit/></td>
            </tr>
            <tr>
                <td>RAPID_ITEM</td>
                <td>RAPID_ITEM</td>
                <td>RAPID<RiDeleteBinLine/><CiEdit/></td>


            </tr>
            <tr>
              <td>RAPID_OUTBOUND_TRANSACTION</td>
              <td>RAPID_OUTBOUND-TRANSACTION</td>
              <td>RAPID<RiDeleteBinLine/><CiEdit/></td>

            </tr>
            <tr>
              <td>RAPID_SAP_DOWNLOAD</td>
              <td>RAPID_SAP_DOWNLOAD</td>
              <td>RAPID<RiDeleteBinLine/><CiEdit/></td>

            </tr>
            
            </tbody>

          </table>

          </div>}
            {activeTab === 'tab2' && <div>Content for Tab 2</div>}
            {activeTab === 'tab3' && <div>
              
            <table>
            <thead className='table-head'>
              <tr>
                  <th scope='col' >Role ID</th>
                  <th scope='col' >Role Name</th>
                  <th></th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>Support</td>
                <td>Support</td>
                <td><RiDeleteBinLine/><CiEdit/></td>
            </tr>
            <tr>
                <td>Admin</td>
                <td>Administrator</td>
                <td><RiDeleteBinLine/><CiEdit/></td>

            </tr>
            <tr>
              <td>Admin</td>
              <td>Administrator</td>
              <td><RiDeleteBinLine/><CiEdit/></td>

            </tr>
            </tbody>

          </table>

              </div>}
            {activeTab === 'tab4' && <div>Content for Tab 4</div>}
        </div> */
