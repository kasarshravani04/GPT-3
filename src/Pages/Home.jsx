import MainHeader from "../components/mainHeader/MainHeader";
import Banner from "../components/Banner/Banner";
import Client from "../components/Client/Client";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Feature from "../components/Feature/Feature";
import Register from "../components/Register/Register";
import Blog from "../components/blog/Blog";
import MainFooter from "../components/mainFooter/MainFooter";


const Home = () => {
  return (
    <>
       <MainHeader/>
       <Banner />
       <Client/>
       <About/>
       <Services/>
       <Feature/>
       <Register/>
       <Blog/>
       <MainFooter/>
    </>
  );
};

export default Home;