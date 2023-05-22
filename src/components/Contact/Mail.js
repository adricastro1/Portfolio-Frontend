import './Mail.css'
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Modal } from 'rsuite';


function Mail() {

  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then((result) => {
        console.log(result.text);
        form.current.reset();
        setIsSuccess(true);
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <div>
      {isSuccess &&
        <p className='sent'>Email sent successfully!</p>
      }
      <form ref={form} onSubmit={sendEmail}>
        <div className='form-top'>
          <div>
            <label>Name:</label>
            <input type="text" name="user_name" required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="user_email" required />
          </div>
        </div>
        <label>Message:</label>
        <textarea name="message" rows='4' required></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Mail;