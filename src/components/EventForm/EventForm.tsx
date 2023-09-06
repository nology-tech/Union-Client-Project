import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import "./EventForm.scss";

const EventForm = () => {
  const somethingHere = () => {
    return;
  };
  const handleSubmit = () => {
    return;
  };

  return (
    // turn this into a number
    <div>
      <InputBox
        label="Event Name (case sensitive)"
        handleInput={somethingHere}
        inputType="text"
      />
      <InputBox label="Category" handleInput={somethingHere} inputType="text" />
      <InputBox label="Date" handleInput={somethingHere} inputType="text" />
      <InputBox
        label="Max Capacity"
        handleInput={somethingHere}
        inputType="text"
      />
      <InputBox
        label="Event Description"
        handleInput={somethingHere}
        inputType="text"
      />
      <InputBox
        label="Image URL"
        handleInput={somethingHere}
        inputType="text"
      />
      <div className="event-form__button">
        <Button label="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default EventForm;
