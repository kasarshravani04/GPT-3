
import Banner from "../components/Banner/Banner";
import Client from "../components/Client/Client";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Feature from "../components/Feature/Feature";
import Register from "../components/Register/Register";

const Home = () => {
  return (
    <>
       <Banner />
       <Client/>
       <About/>
       <Services/>
       <Feature/>
       <Register/>
    </>
  );
};

export default Home;