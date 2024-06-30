import "./Header.css";
import header from "../../assets/header.png";
import { Tab, Tabs } from "react-bootstrap";
import eye from "../../assets/Password.png";
import lock from "../../assets/Vector@2x.png";
import google from "../../assets/Google@2x.png";
import facebook from "../../assets/Group@2x.png";

const Header = () => {
  return (
    <header className="header">
      <section className="content-section">
        <h1>
          Explore your <span style={{ color: "#0096C8" }}>hobby </span>or
          <span style={{ color: "#8064A2" }}> passion</span>
        </h1>
        <p>
          Sign-in to interact with a community of fellow hobbyists and an
          eco-system of experts, teachers, suppliers, classes, workshops, and
          places to practice, participate or perform. Your hobby may be about
          visual or performing arts, sports, games, gardening, model making,
          cooking, indoor or outdoor activities…
        </p>
        <p>
          If you are an expert or a seller, you can Add your Listing and promote
          yourself, your students, products, services or events. Hop on your
          hobbyhorse and enjoy the ride.
        </p>
        <img src={header} alt="header-image" />
      </section>
      <section className="tab-section">
        <Tabs defaultActiveKey="second">
          <Tab
            eventKey="first"
            title=<span className="tab-title">Sign In</span>
          >
            <div className="sign-join-in">
              <div>
                <img src={google} alt="google" className="img-icon" />
                <button type="submit" className="button-style">
                  Continue with Google
                </button>
              </div>
              <div>
                <img src={facebook} alt="facebook" className="img-icon" />
                <button type="submit" className="button-style">
                  Continue with Facebook
                </button>
              </div>

              <div className="connect-with">
                <div className="line"></div>
                <span>Or connect with</span>
                <div className="line"></div>
              </div>
              <input type="email" placeholder="Email" className="input-field" />
              <div>
                <img src={eye} alt="eye" className=" pass-img" />
                <input
                  type="password"
                  placeholder="Password"
                  className="input-field"
                />
              </div>

              <div className="forgot-password">
                <div>
                  <input type="checkbox" /> <span>Remember me</span>
                </div>
                <div>
                  <img src={lock} alt="password lock" />
                  <span>Forgot password?</span>
                </div>
              </div>
              <button type="submit" className="button-style">
                Continue
              </button>
            </div>
          </Tab>
          <Tab
            eventKey="second"
            title=<span className="tab-title">Join In</span>
          >
            <div className="sign-join-in">
              <div>
                <img src={google} alt="google" className="img-icon" />
                <button type="submit" className="button-style">
                  Continue with Google
                </button>
              </div>
              <div>
                <img src={facebook} alt="facebook" className="img-icon" />
                <button type="submit" className="button-style">
                  Continue with Facebook
                </button>
              </div>

              <div className="connect-with">
                <div className="line"></div>
                <span>Or connect with</span>
                <div className="line"></div>
              </div>
              <input type="email" placeholder="Email" className="input-field" />
              <div>
                <img src={eye} alt="eye" className=" pass-img" />
                <input
                  type="password"
                  placeholder="Password"
                  className="input-field"
                />
              </div>

              <div className="forgot-password">
                <div></div>
                <div>
                  <span
                    style={{
                      color: "#939CA3",
                      fontWeight: "600",
                      fontSize: "10px",
                      lineHeight: "16px",
                    }}
                  >
                    Password strength
                  </span>
                </div>
              </div>
              <p
                style={{
                  color: "#6D747A",
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "18px",
                }}
              >
                By continuing, you agree to our
                <span className="text-color"> Terms of Service </span>
                and <span className="text-color"> Privacy Policy</span>.
              </p>
              <button
                type="submit"
                className="button-style"
                style={{ backgroundColor: "#8064A2", color: "white" }}
              >
                Agree and Continue
              </button>
            </div>
          </Tab>
        </Tabs>
      </section>
    </header>
  );
};

export default Header;
