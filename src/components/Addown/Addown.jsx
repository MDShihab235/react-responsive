import "./Addown.css";
import add from "../../assets/icons/add.png";

const Addown = () => {
  return (
    <div className="addown">
      <div className="add-container">
        <div>
          <img src={add} alt="add your own" /> <h2>Add your own</h2>
        </div>
        <p>
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and Add your Own page
        </p>
        <button className="add-btn">Add new</button>
      </div>
    </div>
  );
};

export default Addown;
