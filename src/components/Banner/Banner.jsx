import React from "react";
import "./Banner.css";
import banner_img from "../../assets/Banner/Banner.png";
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
      </div>
      <div className='banner_section__right'>
        <img src={banner_img} alt='AI'  loading='eager' width={300} height={400}/>
      </div>
    </section>
  );
};

export default Banner;