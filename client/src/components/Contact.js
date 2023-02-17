import React, { useState } from 'react'
import './Contact.css';
import imgBack from '../images/im4.jpg'
import load1 from '../images/load2.gif';
import axios from 'axios';
import {toast} from 'react-toastify';


const Contact = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [banner, setBanner] = useState('');
const [bool, setBool] = useState(false);

// handle inputs
const handleName = (e)=>{
    setName(e.target.value)
    
}

const handleEmail = (e)=>{
    setEmail(e.target.value)
    
}

const handleMessage = (e)=>{
    setMessage(e.target.value)
    
}


const formSubmit= async (e)=>{
e.preventDefault();

try {
    
let data = {
    name,
    email,
    message
}

setBool(true);

const res = await axios.post(`/contact`, data);

if(name.length===0 || email.length===0 || message.length===0){

  setBanner(res.data.msg);
  toast.error(res.data.msg);
  setBool(false);

}


else if(res.status===200){
  setBanner(res.data.msg);
  toast.success(res.data.msg);
  setBool(false);


  setName('');
  setEmail('');
  setMessage('')

}

} catch (err) {
   console.log(err); 
}




}


    return (
        <div className="main-container">
           
          <div className="central-form">
            <h2 className="title">Contact form</h2>

            <div className="back-form">
                <div className="img-back">
                    <h4>Send your message</h4>
                    <img src={imgBack} alt=""/>
                </div>

                <form onSubmit={formSubmit} >
                   <p>{banner}</p>

                 <label htmlFor="name">Name</label>
                 <input type="text" 
                 onChange={handleName}
                 value={name}
                 placeholder="your name..."
                 
                 />

                <label htmlFor="email">Email</label>
                 <input type="email" 
                  onChange={handleEmail}
                  value={email}
                 placeholder="your email..."
                 
                 />

                <label htmlFor="message">Message</label>
                 <textarea
                  type="text" 
                  onChange={handleMessage}
                  value={message}
                 placeholder="your message..."
                 name="message"
                 />

                <div className="send-btn">
    <button type="submit">Send <i className="fas fa-paper-plane"></i>{bool? <b className="load"><img src={load1} alt="load1"/></b>:''}</button>
                </div>

                </form>
            </div>
          </div>

        </div>
    )
}

export default Contact
