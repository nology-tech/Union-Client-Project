import { ChangeEvent } from "react";
import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import "./EventForm.scss";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";

const EventForm = () => {
  const [databaseInput, setDatabaseInput] = useState({
    eventName: "",
    eventCategory: "",
    eventCapacity: 0,
    eventDescription: "",
    eventDate: Timestamp,
    eventImages: [""],
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
    const date = event.currentTarget.value;
    setDatabaseInput({ ...databaseInput, eventDate: Number(date) });
  };
  const handleEventCapacity = (event: ChangeEvent<HTMLInputElement>) => {
    const eventCapacity = event.currentTarget.value;
    setDatabaseInput({
      ...databaseInput,
      eventCapacity: Number(eventCapacity),
    });
  };
  const handleEventDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const eventDescription = event.currentTarget.value;
    setDatabaseInput({ ...databaseInput, eventDescription: eventDescription });
  };
  const handleEventImages = (event: ChangeEvent<HTMLInputElement>) => {
    const images = event.currentTarget.value;
    setDatabaseInput({ ...databaseInput, eventImages: [images] });
  };

  const handleSubmit = async () => {
    try {
      const docRef = await setDoc(doc(db, "events", databaseInput.eventName), {
        name: databaseInput.eventName,
        capacityMax: databaseInput.eventCapacity,
        category: databaseInput.eventCategory,
        description: databaseInput.eventDescription,
        date: databaseInput.eventDate,
        capacityCurrent: 0,
        images: databaseInput.eventImages,
      });
      console.log(docRef);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // turn this into a number
    <div className="event-form">
      <InputBox
        label="Event Name (case sensitive)"
        handleInput={handleEventName}
        inputType="text"
      />
      <InputBox
        label="Category (case sensitive)"
        handleInput={handleEventCategory}
        inputType="text"
      />
      <InputBox label="Date" handleInput={handleEventDate} inputType="date" />
      <InputBox
        label="Max Capacity"
        handleInput={handleEventCapacity}
        inputType="text"
      />
      <label
        htmlFor="event-description"
        className="event-form__event-description--label"
      >
        Event Description
      </label>
      <textarea
        name="Event Description"
        id="event-description"
        cols="30"
        rows="10"
        placeholder="Describe your event"
        onChange={handleEventDescription}
        className="event-form__event-description"
      />
      <InputBox
        label="Image URL"
        handleInput={handleEventImages}
        inputType="text"
      />
      <div className="event-form__button">
        <Button label="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default EventForm;
