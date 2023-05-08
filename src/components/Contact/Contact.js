import "./Contact.css"
import Mail from "./Mail.js"

function Contact(props) {
  return (
    <section className="Contact" id="contact">
      <div>
        <img className="contact-img" src="../../imgs/contact.png" alt="contact-background"/>
        <div className="contact-info">
          <h1>Let's Chat!</h1>
          <h5>adricastro1196@gmail.com</h5>
          <Mail/>
        </div>
      </div>
    </section>
  );
}

export default Contact;
