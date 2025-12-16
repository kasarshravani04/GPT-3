import React from 'react'
import "./MainHeader.css";
import "../../assets/Logo/GPT-3.svg";

const MainHeader = () => {




  return (
     <header className="main_header layout">
        <div className="main_header__logo">
            <img src={logo} alt='Gpt-3' loading='eager' width={150} height={100} />
        </div>
        <nav style={style}>
            <ui>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">What is GPT?</a>
                </li>
                <li>
                    <a href="#">OpenAI</a>
                </li>
                <li>
                    <a href="#">Case Studies</a>
                </li>
                <li>
                    <a href="#">Library</a>
                </li>
            </ui>
        </nav>

     </header>
  )
}

export default MainHeader