import { useNavigate } from "react-router-dom";
import heroPic2 from "../../../assets/photos/hero2.png";
import "../../../styles/contactStyles.css";

const HomeContact = () => {
  const navigate = useNavigate();
  const navToRoute = () => {
    navigate("/routetimeline");
  };
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1 className="contact-me-title">Contact Me</h1>
        <div class="input-container">
          {" "}
          <input type="name" id="name" name="name" placeholder="First Name" />
        </div>
        <div class="input-container">
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div class="input-container">
          <input
            type="message"
            id="message"
            name="message"
            placeholder="Type your message here..."
          />
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
