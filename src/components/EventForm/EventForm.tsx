import { ChangeEvent } from "react";
import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";
import "./EventForm.scss";
import { useNavigate } from "react-router-dom";
import { isBefore } from "date-fns";

type DefaultForm = {
  eventName: string;
  eventCategory: string;
  eventCapacity: number | null;
  eventDescription: string;
  eventImages: string[];
  eventDate: Timestamp | null;
};

type EventFormProps = {
  handleNewEvent: () => void;
};

const EventForm = ({ handleNewEvent }: EventFormProps) => {
  const [databaseInput, setDatabaseInput] = useState<DefaultForm>({
    eventName: "",
    eventCategory: "",
    eventCapacity: null,
    eventDescription: "",
    eventDate: null,
    eventImages: [""],
  });
  const [images, setImages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [validationError, setValidationError] = useState({
    eventName: true,
    eventCategory: true,
    eventDate: true,
    eventCapacity: true,
    eventDescription: true,
    eventImages: false,
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleEventName = (event: ChangeEvent<HTMLInputElement>) => {
    const eventName = event.currentTarget.value;
    setDatabaseInput({ ...databaseInput, eventName: eventName });
    setValidationError({
      ...validationError,
      eventName: databaseInput.eventName.length < 1,
    });
  };
  const handleEventCategory = (event: ChangeEvent<HTMLInputElement>) => {
    const eventCategory = event.currentTarget.value;
    setDatabaseInput({ ...databaseInput, eventCategory: eventCategory });
    setValidationError({
      ...validationError,
      eventCategory: databaseInput.eventCategory.length < 1,
    });
  };
  const handleEventDate = (event: ChangeEvent<HTMLInputElement>) => {
    const inputDate = new Date(event.currentTarget.value);
    const currentDate = new Date();
    const isValidDate = isBefore(inputDate, currentDate);
    const timestampDate = Timestamp.fromDate(inputDate);
    setDatabaseInput({
      ...databaseInput,
      eventDate: timestampDate,
    });
    setValidationError({
      ...validationError,
      eventDate: isValidDate,
    });
  };
  const handleEventCapacity = (event: ChangeEvent<HTMLInputElement>) => {
    const eventCapacity = event.currentTarget.value;
    if (
      !eventCapacity.toLowerCase().search(/[a-z]/g || eventCapacity.length < 1)
    ) {
      setDatabaseInput({
        ...databaseInput,
        eventCapacity: null,
      });
      return;
    }
    setDatabaseInput({
      ...databaseInput,
      eventCapacity: parseInt(eventCapacity),
    });

    setValidationError({
      ...validationError,
      eventCapacity: databaseInput.eventCapacity === null,
    });
  };
  const handleEventDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const eventDescription = event.currentTarget.value;
    setDatabaseInput({
      ...databaseInput,
      eventDescription: eventDescription,
    });

    setValidationError({
      ...validationError,
      eventDescription: databaseInput.eventDescription.length < 1,
    });
  };
  const handleAddImage = () => {
    const image = inputValue;
    if (!inputValue) {
      return;
    }
    setImages((images) => [...images, image]);
    setDatabaseInput({ ...databaseInput, eventImages: [...images, image] });
    setInputValue("");

    setValidationError({
      ...validationError,
      eventImages: databaseInput.eventImages.length === 0,
    });
  };
  const handleRemoveImage = () => {
    const updatedImages = [...images];
    if (updatedImages.length > 0) {
      updatedImages.pop();
    }
    setImages(updatedImages);
  };
  const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };
  const handleRequirements = () => {
    const errorArray = Object.values(validationError).every((value) => {
      return value === true;
    });

    if (errorArray) {
      return;
    } else {
      handleSubmit();
    }
  };
  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "events"), {
        name: databaseInput.eventName,
        capacityMax: databaseInput.eventCapacity,
        category: databaseInput.eventCategory,
        description: databaseInput.eventDescription,
        date: databaseInput.eventDate,
        capacityCurrent: 0,
        images: databaseInput.eventImages,
      });
      setSubmitted(true);
      handleNewEvent();
    } catch (error) {
      console.error(error);
    }
  };
  const buttonStyle = {
    width: "5rem",
    height: "3rem",
    margin: "1rem",
  };
  const validationText = (
    <p className="event-form__required">this field is required</p>
  );
  const navigate = useNavigate();
  const navigateEvents = () => {
    navigate("/events");
  };
  const navigateAdmin = () => {
    navigate("/admin");
  };

  return (
    <div className="event-form">
      {submitted && (
        <div className="event-form__submitted">
          <p className="event-form__submitted--text">
            Your event was successfully submitted!
          </p>
          <div className="event-form__submitted--button">
            <Button label="Events" onClick={navigateEvents} />
          </div>
          <div className="event-form__submitted--button">
            <Button label="Back to Account" onClick={navigateAdmin} />
          </div>
        </div>
      )}
      <InputBox
        label="Event Name (case sensitive)"
        handleInput={handleEventName}
        inputType="text"
      />
      {validationError.eventName && validationText}
      <InputBox
        label="Event Category (case sensitive)"
        handleInput={handleEventCategory}
        inputType="text"
      />
      {validationError.eventCategory && validationText}
      <InputBox label="Date" handleInput={handleEventDate} inputType="date" />
      {validationError.eventDate && validationText}
      <InputBox
        label="Event Capacity"
        handleInput={handleEventCapacity}
        inputType="text"
      />
      {validationError.eventCapacity && validationText}
      <label
        htmlFor="event-description"
        className="event-form__event-description--label"
      >
        Event Description
      </label>
      <textarea
        name="Event Description"
        id="event-description"
        cols={30}
        rows={10}
        placeholder="Describe your event"
        onChange={handleEventDescription}
        className="event-form__event-description"
      />
      {validationError.eventDescription && validationText}
      <label
        htmlFor="image__input"
        className="event-form__event-description--label"
      >
        Image URL
      </label>
      <input
        type="text"
        id="image__input"
        className="event-form__image-input"
        value={inputValue}
        onChange={handleInputValue}
      />
      {validationError.eventImages && validationText}
      <div className="event-form__images--button">
        <Button
          label="Add Image"
          onClick={handleAddImage}
          style={buttonStyle}
        />
        <Button
          label="Remove Image"
          onClick={handleRemoveImage}
          variant="secondary"
          style={buttonStyle}
        />
      </div>
      <div className="event-form__gallery">
        {images.length > 0 &&
          images.map((image, index) => {
            return (
              <div
                className="event-form__gallery--images"
                key={`event-form__${index}`}
              >
                <img
                  className="event-form__gallery--image"
                  src={image}
                  alt={`event-form__image-${index}`}
                />
              </div>
            );
          })}
      </div>

      <div className="event-form__button">
        <Button label="Create Event" onClick={handleRequirements} />
      </div>
    </div>
  );
};

export default EventForm;
