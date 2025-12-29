import "./MainFooter.css";
import GradientText from '../../UI/GradientText/GradientText';
import logo from "../../assets/Logo/GPT-3.svg";

const MainFooter = () => {
  return (
      <section className='main_footer layout'>
        <header className='main_footer__header'>
          <GradientText>
               <h2>Do you want to step in to the <br/> future before others</h2>
          </GradientText>
          <button>Request Early Access</button>
        </header>
        <div className="main_footer__container">
                <div className="main_footer_img">
                 <ul>
                  <li><img src={logo} alt='Gpt-3' loading='eager' width={150} height={100} /></li>
                  <li>Crechterwoord K12 182 DK <br/>Alknjkcb, All Rights Reserved</li>
                </ul> 
                </div>
                <ul>
                  <h3>Links</h3>
                  <li>Overons</li>
                  <li>Social Media</li>
                  <li>Counters</li>
                  <li>Contact</li>
                </ul>
                <ul>
                  <h3>Company</h3>
                  <li>Term & Condition</li>
                  <li>Privacy Policy</li>
                  <li>Contact</li>
                 
                </ul>
                <ul>
                  <h3>Get in touch</h3>
                  <li>Crechterwoord K12 <br/>182 DK Alknjkcb</li>
                  <li>085-132567</li>
                  <li>info@payme.net</li>
                  
                </ul>
            </div>
        
      </section>
    
  );
};

export default  MainFooter;