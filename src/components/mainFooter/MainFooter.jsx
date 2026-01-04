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
                  <img src={logo} alt='Gpt-3' loading='eager' width={150} height={100}/>
                  <p>
                    Crechterwoord K12 182 DK <br/>
                    Alknjkcb, All Rights Reserved
                  </p>
                </div>
                <nav className="footer_nav">
                <ul>
                  <li className="footer-title">Links</li>
                  <li><a href="#">Overons</a></li>
                  <li><a href="#">Social Media</a></li>
                  <li><a href="#">Counters</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
                <ul>
                  <li className="footer-title">Company</li>
                  <li><a href="#">Term & Condition</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Contact</a></li>
                 
                </ul>
                <ul>
                  <li className="footer-title">Get in touch</li>
                  <li><a href="#">Crechterwoord K12 <br/>182 DK Alknjkcb</a></li>
                  <li><a href="tel:085132567">085-132567</a></li>
                  <li><a href="mailto:info@payme.net">info@payme.net</a></li>
                </ul>
                </nav>
            </div>
        
      </section>
    
  );
};

export default  MainFooter;