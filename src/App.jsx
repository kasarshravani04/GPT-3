import React from 'react'
import Home from './Pages/Home.jsx';
import MainHeader from './components/mainHeader/MainHeader';
import MainFooter from './components/mainFooter/MainFooter';
import Register from './Pages/Register.jsx';
import Login from './Pages/Login.jsx';

  
import {
     BrowserRouter,
     Route,
     Routes,
}from "react-router-dom";


const App = () => {
  return (
    <div className="App">
      <div className='blur_circle'/>
          
      
          <BrowserRouter>
                <Routes>
                    <Route index element = {<Home/>}/>
                    <Route path='/login' element = {<Login/>}/>
                    <Route path="/register" element = {<Register/>}/>
                </Routes>
          </BrowserRouter>
      
        
    </div>
  );
};

export default App;