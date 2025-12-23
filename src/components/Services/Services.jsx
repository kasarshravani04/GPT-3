import React from 'react'
import GradientText from '../../UI/GradientText/GradientText';
import "./Services.css";


const data = [
  {
    id: "item-1",
    title: "Improving end distrusts instantly",
    para: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    id: "item-2",
    title: "Become the tended active",
    para: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    id: "item-3",
    title: "Message or am nothing",
    para: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    id: "item-4",
    title: "Really boy law county",
    para: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
  },
];



const Services = () => {
  return (
    <section className='services_section layout'>
        <header className='services_section__left'>
            <GradientText>
               <h2> The Future is Now and<br/>You Just Need To Realize<br/>It. Step into Future Today<br/>& Make it Happen.</h2>
            </GradientText>   
            <p>Request Early Access to Get Started</p> 
        </header>
        <div className="services_section__right">
            {data.map((item) => (
            <div
              className="services_section__card"
              key={item.id}>
              <h3>
                <span className="gradient_line" />
                {item.title}
              </h3>
              <p>{item.para}</p>
           </div>
           ))}
        </div>
    </section>
  );
};

export default Services;