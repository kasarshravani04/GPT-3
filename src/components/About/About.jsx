import React from 'react'
import "./About.css";
import GradientText from "../../UI/GradientText/GradientText";


const data = [
  {
    id: 101,
    title: "Chatbots",
    para: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
  },
  {
    id: 102,
    title: "Knowledgebase",
    para: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
  },
  {
    id: 103,
    title: "Education",
    para: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b ",
  },
];


const About = () => {
  return (
    <section className='about_section layout'>
      <div className='about_section_container'>
        <header>
            <span>
             <span className='gradient_line'/>
              <h2>What is GPT-3?</h2>
            </span>
            <p>
              We so opinion friends me message as delight.
              Whole front do of plate heard oh ought. 
              His defective nor convinced residence own.
              Connection has put impossible own apartments boisterous. 
              At jointure ladyship an insisted so humanity he. 
              Friendly bachelor entrance to on by.
            </p>
        </header>
        <div className='about_section__2'>
          <GradientText>
              <h2>The possibilities are beyond <br/> your imagination</h2>
          </GradientText>
          <a href='#'>Explore The Library</a>
        </div>
        <div className='about_section_cards'>
             {data.map((item) => (
               <div
                  key={item.id}
                  className="about_section__card">
                  <span className="gradient_line" />
                  <h3>{item.title}</h3>
                  <p>{item.para}</p>
               </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default About;