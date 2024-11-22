import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const SendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_4b31bci', 'template_rxbnjnm', form.current, {
        publicKey: '7d6TJ44P9vpdJk2uO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setShowSuccessMessage(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '50px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <center><h2>Contact Us</h2></center>
      <div style={{ textAlign: 'center' }}>
          <img
            src="data:image/jpeg;base64,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" 
            alt="Contact Us"
            style={{ maxWidth: '100%', height:'200px' ,padding:'10px'}}
          />
         </div>
      <form ref={form} onSubmit={SendEmail}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="to_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: '10px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="from_name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '10px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: '100%', padding: '10px' }}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 50px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
      {showSuccessMessage && (
        <div
          style={{
            marginTop: '20px',
            backgroundColor: '#28a745',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
            textAlign: 'center',
          }}
        >
          Message sent successfully!
        </div>
      )}
    </div>
  );
};

export default ContactUs;
