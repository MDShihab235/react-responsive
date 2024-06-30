import "./Option.css";
// import data from "./data.json";
import people from "../../assets/icons/people.png";
import place from "../../assets/icons/location.png";
import product from "../../assets/icons/bag.png";
import program from "../../assets/icons/calender.png";

const Option = () => {
  return (
    <div className="options">
      {data.map((option) => {
        return (
          <div key={option.id} className="option-container">
            <div className="img-title">
              <img src={option.imgUrl} alt={option.title} />
              <h2>{option.title}</h2>
            </div>
            <p> {option.content} </p>
            <button className="btn-option">{option.btnInfo}</button>
          </div>
        );
      })}
    </div>
  );
};

export default Option;

const data = [
  {
    id: 1,
    imgUrl: people,
    title: "People",
    content:
      "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
    btnInfo: "Connect",
  },
  {
    id: 2,
    imgUrl: place,
    title: "Place",
    content:
      "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
    btnInfo: "Meet up",
  },
  {
    id: 3,
    imgUrl: product,
    title: "Product",
    content:
      "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
    btnInfo: "Get it",
  },
  {
    id: 4,
    imgUrl: program,
    title: "Program",
    content:
      "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
    btnInfo: "Attend",
  },
];
