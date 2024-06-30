import "./Community.css";
import arrow from "../../assets/icons/arrow.png";
import group from "../../assets/icons/group.png";
import ScrollToTop from "react-scroll-to-top";

const Community = () => {
  return (
    <div className="community-section">
      <h2>
        Your <span style={{ color: "#8064A2" }}>Hobby</span>, Your
        <span style={{ color: "#0096C8" }}> Community...</span>
      </h2>
      <div className="btn-section">
        <button className="get-btn">Get started</button>
        <div>
          <a href="">
            <img src={arrow} alt="go to top" />
            <ScrollToTop smooth />
          </a>
          <p>Go to top (Ctrl+Home)</p>
        </div>
      </div>
      <img src={group} alt="group" />
    </div>
  );
};

export default Community;
