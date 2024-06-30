import "./Testimonials.css";

import quote from "../../assets/icons/quote.png";
import mic from "../../assets/icons/mic.png";
import small from "../../assets/icons/girl1.png";
import large from "../../assets/icons/girl2.png";

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <div className="testimonials">
        <div className="title">
          <img src={quote} alt="quote" />
          <h2>Testimonials</h2>
        </div>
        <p>
          In a fast growing and ever changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like minded people.
          Websites like hobbycue.com is a great service which helps me get in
          touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and
          services that I can avail, which I can be assured is going to be of
          great quality as it comes recommended by people of the hobbycue
          community. To have discussions, to get visibility, and to be able to
          safely explore various hobbies and activities in my city, all under
          one roof, is an excellent idea and I highly recommend it.
        </p>
        <div className="info">
          <div className="audio-section">
            <audio controls className="audio">
              <source src="horse.ogg" type="audio/ogg" />
              <source src="horse.mp3" type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio>

            <div className="mic-img">
              <img src={mic} alt="mic" className="mic" />
              <img src={small} alt="small" />
            </div>
          </div>
          <div className="profile">
            <img src={large} alt="large" />
            <div className="name-pro">
              <h2>Shubha Nagarajan</h2>
              <span>Classical Dancer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
