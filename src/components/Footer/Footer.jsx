import { Form, InputGroup } from "react-bootstrap";
import "./Footer.css";

import facebook from "../../assets/footer/facebook.png";
import twitter from "../../assets/footer/twitter.png";
import instagram from "../../assets/footer/instagram.png";
import pintarest from "../../assets/footer/pintarest.png";
import google from "../../assets/footer/google.png";
import youtube from "../../assets/footer/youtube.png";
import telegram from "../../assets/footer/telegram.png";
import email from "../../assets/footer/email.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <div className="links">
          <h3>Hobbycue</h3>
          <p>About Us</p>
          <p>Our Services</p>
          <p>Work with Us</p>
          <p>FAQ</p>
          <p>Contact Us</p>
        </div>
        <div className="links">
          <h3>How Do I</h3>
          <p>Sign Up</p>
          <p>Add a Listing</p>
          <p>Claim Listing</p>
          <p>Post a Query</p>
          <p>Add a Blog Post</p>
          <p>Other Queries</p>
        </div>
        <div className="links">
          <h3>Quick Links</h3>
          <p>Listings</p>
          <p>Blog Posts</p>
          <p>Shop / Store</p>
          <p>Community</p>
        </div>
        <div>
          <div className="links">
            <h3>Social Media</h3>
            <div className="social-icons">
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="facebook" />
              <img src={instagram} alt="facebook" />
              <img src={pintarest} alt="facebook" />
              <img src={google} alt="facebook" />
              <img src={youtube} alt="facebook" />
              <img src={telegram} alt="facebook" />
              <img src={email} alt="facebook" />
            </div>
          </div>
          <div className="links" style={{ marginTop: "40px" }}>
            <h3>Invite Friends</h3>
            <div>
              <InputGroup>
                <Form.Control
                  placeholder="Email ID"
                  aria-label="search"
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Text id="basic-addon1" className="search-btn">
                  <span className="input-btn">Invite</span>
                </InputGroup.Text>
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
      <div className="copy">© Purple Cues Private Limited</div>
    </footer>
  );
};

export default Footer;
