import React from 'react'
import Home from './Pages/Home.jsx';
import MainHeader from './components/mainHeader/MainHeader';
import MainFooter from './components/mainFooter/MainFooter';

const App = () => {
  return (
    <div className="App">
      <div className='blur_circle'/>
       <MainHeader />
      <main>
        <Home />
      </main>
       <MainFooter />
    </div>
  );
};

export default App;