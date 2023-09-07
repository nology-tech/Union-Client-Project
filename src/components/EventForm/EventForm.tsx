import { ChangeEvent } from "react";
import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";
import "./EventForm.scss";

type DefaultForm = {
  eventName: string;
  eventCategory: string;
  eventCapacity: number | null;
  eventDescription: string;
  eventImages: string[];
  eventDate: Timestamp | null;
};

const EventForm = () => {
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
  const [required, setRequired] = useState({
    errorOne: false,
    errorTwo: false,
    errorThree: false,
    errorFour: false,
    errorFive: false,
    errorSix: false,
  });

  const handleEventName = (event: ChangeEvent<HTMLInputElement>) => {
    const eventName = event.currentTarget.value;
    setDatabaseInput({ ...databaseInput, eventName: eventName });
  };
  const handleEventCategory = (event: ChangeEvent<HTMLInputElement>) => {
    const eventCategory = event.currentTarget.value;
    setDatabaseInput({ ...databaseInput, eventCategory: eventCategory });
  };
  const handleEventDate = (event: ChangeEvent<HTMLInputElement>) => {
    const date = new Date(event.currentTarget.value);
    const timestampDate = Timestamp.fromDate(date);

    setDatabaseInput({
      ...databaseInput,
      eventDate: timestampDate,
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
  };
  const handleEventDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const eventDescription = event.currentTarget.value;
    setDatabaseInput({
      ...databaseInput,
      eventDescription: eventDescription,
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
  };
  const handleRemoveImage = () => {
    if (images.length > 0) {
      images.pop();
    }
    setImages((images) => [...images]);
  };
  const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };
  const handleRequirements = () => {
    const currentErrors = {
      errorOne: databaseInput.eventName.length < 1,
      errorTwo: databaseInput.eventCategory.length < 1,
      errorThree: !databaseInput.eventDate,
      errorFour: databaseInput.eventCapacity === null,
      errorFive: databaseInput.eventDescription.length < 1,
      errorSix: databaseInput.eventImages.length === 0,
    };
    if (!Object.values(required)) {
      console.log("clicked");

      handleSubmit();
    } else {
      console.log("clicked else");
      console.log(required);

      setRequired(currentErrors);
    }
  };
  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "events-test"), {
        name: databaseInput.eventName,
        capacityMax: databaseInput.eventCapacity,
        category: databaseInput.eventCategory,
        description: databaseInput.eventDescription,
        date: databaseInput.eventDate,
        capacityCurrent: 0,
        images: databaseInput.eventImages,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const buttonStyle = {
    width: "5rem",
    height: "3rem",
    margin: "1rem",
  };
  const errorRequired = (
    <p className="event-form__required">this field is required</p>
  );

  return (
    <div className="event-form">
      <InputBox
        label="Event Name (case sensitive)"
        handleInput={handleEventName}
        inputType="text"
      />
      {required.errorOne && errorRequired}
      <InputBox
        label="Event Category (case sensitive)"
        handleInput={handleEventCategory}
        inputType="text"
      />
      {required.errorTwo && errorRequired}
      <InputBox label="Date" handleInput={handleEventDate} inputType="date" />
      {required.errorThree && errorRequired}
      <InputBox
        label="Event Capacity"
        handleInput={handleEventCapacity}
        inputType="text"
      />
      {required.errorFour && errorRequired}
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
      {required.errorFive && errorRequired}
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
      {required.errorSix && errorRequired}
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
