import "./Client.css";
import client1 from "../../assets/client/google.png";
import client2 from "../../assets/client/slack.png";
import client3 from "../../assets/client/atlassian.png";
import client4 from "../../assets/client/dropbox.png";
import client5 from "../../assets/client/shopify.png";


const Client = () => {
  return (
   <section className='client_section layout'>
    <div>
      <img src={client1} 
           alt='google' 
           width={100} 
           height={50} 
           loading='lazy'
      />
      <img src={client2} 
           alt='slack' 
           width={100} 
           height={50} 
           loading='lazy'
      />
      <img src={client3} 
           alt='atlassian' 
           width={100} 
           height={50} 
           loading='lazy'
      />
      <img src={client4} 
           alt='dropbox' 
           width={100} 
           height={50} 
           loading='lazy'
      />
      <img src={client5} 
           alt='shopify' 
           width={100} 
           height={50} 
           loading='lazy'
      />
    </div>

   </section>
  );
};

export default Client;