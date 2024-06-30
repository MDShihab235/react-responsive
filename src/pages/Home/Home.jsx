import Addown from "../../components/Addown/Addown";
import Community from "../../components/Community/Community";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Option from "../../components/Option/Option";
import Testimonials from "../../components/Testimonials/Testimonials";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Option />
      <Addown />
      <Testimonials />
      <Community />
      <Footer />
    </div>
  );
};

export default Home;
