import React from "react";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Client from "../components/Client/Client";


const Home = () => {
  return (
    <>
       <Banner />
       <Client/>
       <About/>
    </>
  );
};

export default Home;