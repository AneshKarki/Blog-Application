import "./Footer.css";
import { FaCopyright } from "react-icons/fa";
import { Element } from "react-scroll";


const Footer = () => {
  return (
    <>
    <Element name="footer">
    <div className="Footer">
        <div className="contactUS">
          <div>Contact Us</div>
          <div>FaceBook</div>
          <div> Instagram</div>
          <div>Mail</div>
        </div>
        <div className="what">
          <div>Drop you Email</div>
          <div>
            <input type="text" placeholder="abc@gmail.com" />
          </div>
        </div>
      </div> 
    </Element>
      
      <div style={{ backgroundColor: "black", color: "white" }}>
        <hr />
        <div style={{ padding: "10px", display: "flex" }}>
          <FaCopyright /> Anesh Karki.. 2025 All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
