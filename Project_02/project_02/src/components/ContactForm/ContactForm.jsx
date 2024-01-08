import Buttons from '../Buttons/Buttons';
import styles from './contactForm.module.css';
import {MdMessage} from 'react-icons/md';
import {FaPhoneAlt} from 'react-icons/fa';
import {HiMail } from 'react-icons/hi';
import {useState} from 'react';

const ContactForm = () => {
    
  const [name,setName] = useState("Roshan"); 
  const [email,setEmail] = useState("Roshan@gmail.com");
  const [text,setText] = useState("Hello Fermion Infotech!!!");

  
  const onSubmit = (event) => {
    event.preventDefault();

   setName(event.target[0].value);
   setEmail(event.target[1].value);
   setText(event.target[2].value);

  };



  return (
    <section className={styles.container}>

    <div className={styles.contact_form}>
    <div className={styles.top_btn}>
    <Buttons text="VIA SUPPORT CHAT" icon={<MdMessage fontSize= "24px"/>}/>
    
    <Buttons text="VIA CALL" icon={<FaPhoneAlt fontSize= "24px"/>}/>
    </div>
    <Buttons isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize= "24px"/>}/>

    <form 
    onSubmit={onSubmit}
    >

     <div className={styles.form_control}>
      <label htmlFor='name'>Name</label>
      <input type='text' name='name' />
     </div>

     <div className={styles.form_control}>
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' />
     </div>
    
     <div className={styles.form_control}>
      <label htmlFor='text'>TEXT</label>
      <textarea name='text'  rows="8"/>
     </div>
     
     <div style={{
      display:'flex',
      justifyContent:'end',
     }}>

     <Buttons  text="Submit Button" />
     </div>
     <div>{name + " " + email + " " + text}</div>
    </form>
    </div>
    <div className={styles.contact_Image}> 
    <img src='./images/service_24_7.svg' alt='Contact image'/>
    </div>
    </section>
  );  
};

export default ContactForm;