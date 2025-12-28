
import Banner from "../components/Banner/Banner";
import Client from "../components/Client/Client";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Feature from "../components/Feature/Feature";
import Register from "../components/Register/Register";
import Blog from "../components/blog/Blog";

const Home = () => {
  return (
    <>
       <Banner />
       <Client/>
       <About/>
       <Services/>
       <Feature/>
       <Register/>
       <Blog/>
    </>
  );
};

export default Home;