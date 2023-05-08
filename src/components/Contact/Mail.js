import './Mail.css'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Mail() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

    try {
      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID);
      console.log(result.text);
    } catch (error) {
      console.log('Error sending email:', error);
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameInput = e.target.elements['user_name'];
    const emailInput = e.target.elements['user_email'];
    const messageInput = e.target.elements['message'];

    if (!nameInput.value.trim()) {
      alert('Please enter your name.');
      return;
    }

    if (!emailInput.value.trim()) {
      alert('Please enter your email address.');
      return;
    }

    if (!validateEmail(emailInput.value)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!messageInput.value.trim()) {
      alert('Please enter a message.');
      return;
    }

    form.current.dispatchEvent(new Event('submit', { cancelable: true }));
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className='form-top'>
    <div>
      <label>Name:</label>
      <input type="text" name="user_name" required />
    </div>
    <div>
      <label>Email:</label>
      <input type="email" name="user_email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
    </div>
    </div>
      <label>Message:</label>
      <textarea name="message" rows='5' required></textarea>
      <input type="submit" value="Send" />
    </form>
  );
};
