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
  eventCapacity: number;
  eventDescription: string;
  eventImages: string[];
  eventDate: Timestamp | null;
};

const EventForm = () => {
  const [databaseInput, setDatabaseInput] = useState<DefaultForm>({
    eventName: "",
    eventCategory: "",
    eventCapacity: 0,
    eventDescription: "",
    eventDate: null,
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
    const date = new Date(event.currentTarget.value);
    const timestampDate = Timestamp.fromDate(date);

    setDatabaseInput({
      ...databaseInput,
      eventDate: timestampDate,
    });
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
      const docRef = await addDoc(collection(db, "events-test"), {
        name: databaseInput.eventName,
        capacityMax: databaseInput.eventCapacity,
        category: databaseInput.eventCategory,
        description: databaseInput.eventDescription,
        date: databaseInput.eventDate,
        capacityCurrent: 0,
        images: databaseInput.eventImages,
      });
      console.log(docRef.id);
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
        cols={30}
        rows={10}
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
