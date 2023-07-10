import getRandomNumber from "../utils/getRandomNumber";
import "./style/formLocation.css";

const FormLocation = ({ setIdLocation }) => {
  const handleSumit = (e) => {
    e.preventDefault();
    const inputValue = e.target.inputId.value.trim();
    if (inputValue === "" || inputValue === "0") {
      setIdLocation(getRandomNumber(126));
    } else {
      setIdLocation(e.target.inputId.value.trim());
    }

    e.target.inputId.value = "";
  };

  return (
    <form className="form-container" onSubmit={handleSumit}>
      <input className="form-input" id="inputId" type="text" />
      <button className="form-button">seaech</button>
    </form>
  );
};

export default FormLocation;
