
import "./Banner.css";
import banner_img from "../../assets/Banner/Banner.png";
import c1 from "../../assets/Banner/c1.png";
import c2 from "../../assets/Banner/c2.png";
import c3 from "../../assets/Banner/c3.png";
import c4 from "../../assets/Banner/c4.png";
import c5 from "../../assets/Banner/c5.png";
import c6 from "../../assets/Banner/c6.png";
import GradientText from "../../UI/GradientText/GradientText";
import Button from "../../UI/Button/Button";

const Banner = () => {
  return (
    <section className='banner_section layout'>
      <div className='banner_section__left'>
          <GradientText>
            <h1>Let’s Build Something<br/>
                amazing with GPT-3<br/>
                OpenAI</h1>
          </GradientText>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. 
            Not thoughts all exercise blessing. 
            Indulgence way everything joy alteration boisterous the attachment. 
            Party we years to order allow asked of.
          </p>
          <div className="banner_section__input_box">
            <label htmlFor="Email"></label>
            <input type="email"  placeholder="your email address"  id="Email" name="Email" autoComplete="false"/>
            <Button active={true}>Get Started</Button>
          </div>
          
         <div className="banner__footer_section">
            <div className="img_container">  
            <img src={c1} alt="person 1" width={50} height={50} />
            <img src={c2} alt="person 2" width={50} height={50} />
            <img src={c3} alt="person 3" width={50} height={50} />
            <img src={c4} alt="person 4" width={50} height={50} />
            <img src={c5} alt="person 5" width={50} height={50} />
            <img src={c6} alt="person 6" width={50} height={50} />
            <span className="last_img">1.6K+</span>
            </div>
          <div>
             <p>
               1,600 people requested access a visit in last 24 hours
             </p>
          </div>
         </div>
      </div>
      <div className='banner_section__right'>
        <img src={banner_img} alt='AI'  loading='eager' width={300} height={400}/>
      </div>
    </section>
  );
};

export default Banner;