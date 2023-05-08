import "./Contact.css"
import Mail from "./Mail.js"

function Contact(props) {
  return (
    <section className="Contact" id="contact">
      <div>
        <img className="contact-img" src="../../imgs/contact.png" alt="contact-background"/>
        <div className="contact-info">
          <p>adricastro1196@gmail.com</p>
          <Mail/>

        </div>
      </div>
    </section>
  );
}

export default Contact;
