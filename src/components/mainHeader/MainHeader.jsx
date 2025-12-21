import React from 'react';
import './MainHeader.css';
import  logo  from '../../assets/Logo/GPT-3.svg';
import Button from '../../UI/Button/Button';
import { useState } from 'react';

const MainHeader = () => {
    const [open,setOpen] = useState(false);
       console.log("component rendered", open);
    return (
    <header className="main_header layout">
        <div className="main_header__logo">
            <img src={logo} alt='Gpt-3' loading='eager' width={150} height={100} />
        </div>
        <nav 
        style={open ? {top : "0%"} : {top : "-2000%"}}>
            <ul>
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
            </ul>
        </nav>
        <div className="main_header__button">
            { <Button active ={false}>Sign In </Button> }
            {<Button active = {true}>Sign Up</Button> }
        </div>
        <label className="main_header__hamburger">
        <input type="checkbox"
          checked = {open}
          onChange={() => setOpen((prev) => !prev)} />
        <svg viewBox='0 0 32 32'>
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
        </label>
    </header>

  );
};

export default MainHeader;