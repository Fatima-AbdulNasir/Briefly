import React, { useState } from 'react';
import '../styles/Interaction.css';
import intpic from "../images/free-url-shortener.png";

const Interaction = () => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');
 const [phoneNumber, setPhoneNumber] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    // Send message logic goes here
    alert('Message sent');
 };

 return (
    <div id ="interaction" className="interaction">
      <h1><line>Let's Interact</line></h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
        />
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message Here"
        />
        <input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone number"
        />
        <button type="submit">Send Message</button>
        <div className="interpic">
        <img src={intpic} alt="" />
        </div>
      </form>
    </div>
 );
};

export default Interaction;
