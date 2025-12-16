import React from 'react'
import "./Button.css";
const Button = ({ active , children}) => {
    let style = {};
    if (active){
        style.background = "var(--pry=btn)";
    }else{
        style.background = "transparent";
    }
  return (
    <button className="main_button" style={style}>
      {children}
    </button>
  );
};

export default Button