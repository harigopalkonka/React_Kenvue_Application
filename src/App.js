import './App.css';

import { Routes, Route } from 'react-router-dom';

import LoginPage from './LoginPage/LoginPage';

import MainPage from './MainPage/MainPage';

import SearchPage from './SearchPage/ClickSearchPage'

import AdminPage from './AdministrationPage/AdminPage';

import DocumentDetails from './DocumentDetails/DocumentDetails';
import OrderResubmission from './OrderResubmission/OrderResubmission';


function App() {
  return (
    <div className="App">

      {/* loginpage  */}
      {/* <div>
        <LoginPage/>
      </div> */}


      {/* MainPage  */}
      {/* <div>
        <MainPage/>
      </div> */}
      
      {/* SearchPage */}
      {/* <div>
        <SearchPage/>
      </div> */}

      {/* AdministrationPage  */}
      {/* <div>
        <AdminPage/>
      </div> */}


      {/* Serach in input open document Details  */}
      {/* <div>
        <DocumentDetails/>
      </div> */}

      <div>
        <OrderResubmission/>
      </div>




      {/* All Pages Routeing  */}
      {/* <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Main" element={<MainPage />} />
        <Route path='/Main/Search' element={<SearchPage/>} /> 
        <Route path='/Main/Admin' element={<AdminPage/>} />
      </Routes>  */}



    </div>
  );
}

export default App;
