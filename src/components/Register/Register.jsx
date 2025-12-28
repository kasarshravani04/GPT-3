import React from 'react'
import "./Register.css";
const Register = () => {
  return (
   <section className='register_section layout'>
    <div className='register_section__container'>
        <div className='register_section_text'>
          <h4>Request Early Access to Get Started</h4>
          <h2>Register today & start exploring the endless possiblities.</h2>
         </div>
        <button className='register_section_btn' type='button'>Get Started</button>
    </div>
   </section>
  );
};

export default Register;