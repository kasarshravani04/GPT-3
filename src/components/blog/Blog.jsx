
import "./Blog.css";
import GradientText from '../../UI/GradientText/GradientText';
import blog1 from "../../assets/blog/blog1.png";
import blog2 from "../../assets/blog/blog2.png";
import blog3 from "../../assets/blog/blog3.png";
import blog4 from "../../assets/blog/blog4.png";
import blog5 from "../../assets/blog/blog5.png";


const data = [
  {
    id: "post-1",
    img: blog1,
    title:
      "GPT-3 and Open AI is the future. Let us explore how it is?",
    date: "Sep 26, 2021",
  },
  {
    id: "post-2",
    img: blog2,
    title:
      "GPT-3 and Open AI is the future. Let us explore how it is?",
    date: "Sep 26, 2021",
  },
  {
    id: "post-3",
    img: blog3,
    title:
      "GPT-3 and Open AI is the future. Let us explore how it is?",
    date: "Sep 26, 2021",
  },
  {
    id: "post-4",
    img: blog4,
    title:
      "GPT-3 and Open AI is the future. Let us explore how it is?",
    date: "Sep 26, 2021",
  },
  {
    id: "post-5",
    img: blog5,
    title:
      "GPT-3 and Open AI is the future. Let us explore how it is?",
    date: "Sep 26, 2021",
  },
];



const Blog = () => {
  return (
    <section className='blog_section layout'>
         <header>
            <GradientText>
                <h2>A lot is happening,<br/> We are blogging about it.</h2>
            </GradientText>
         </header>
         <div className='blog_section__cards'>
             {data.map((item) => (
          <div
            key={item.id}
            className={`blog_section__card card-${item.id}`}>
            <div>
              <div className="traingle" />
              <img
                src={item.img}
                alt={item.title}
                width={300}
                height={200}
                loading="lazy"
              />

              <span>{item.date}</span>
              <h3>{item.title}</h3>
            </div>
            <div>
              <a href="#">Read Full Article</a>
            </div>
          </div>
        ))}
         </div>
    </section>
  );
};

export default Blog;