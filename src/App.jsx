import React from 'react'
import Home from "./Pages/Home";
import MainHeader from './components/mainHeader/MainHeader';
import MainFooter from './components/mainFooter/MainFooter';

const App = () => {
  return (
    <div className="App">
       <MainHeader />
      <main>
        <Home />
      </main>
      <MainFooter />

    </div>
  );
};

export default App;