import "../css/contact.css";

function Contact() {
    return (
        <div className = "contact-cont">
            <h1> Contact Me</h1>
      <div className="contact-me">
        <a href="https://www.linkedin.com/in/michael-arthur-0614ba204/" target="_blank" rel="noopener noreferrer" >
            <img src="/linkedin.png" alt="LinkedIn Profile" className="linkedin-image"/>
        </a>

        <a href="https://github.com/MichaelArthur224" target="_blank" rel="noopener noreferrer" >
            <img src="/github.png" alt="Github Profile" className="linkedin-image"/>  
        </a>

        <a href="https://docs.google.com/document/d/1AD4q3bX8vlmXn6xvvrpV46anyQ7qMuWQYxbd34cLAaU/edit?usp=sharing" target="_blank" rel="noopener noreferrer" >
            <img src="/email.png" alt="Email Profile" className="linkedin-image"/>
        </a>
      </div>
      </div>
    );
  }
  
  export default Contact;
  