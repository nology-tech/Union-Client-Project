import { useState } from "react";
import "./EventCard.scss";
import arrow from "../../assets/images/arrow.svg";

type EventCardProps = {
  title: string;
  maker: string;
  date: string;
  textContent: string;
  gallery: string;
  //   buttonText: string;
  //   buttonVariant: string;
  //   buttonFunction: ChangeEventHandler<HTMLButtonElement>;
};

const EventCard = ({
  title,
  maker,
  date,
  textContent,
  gallery,
}: //   buttonText,
//   buttonVariant,
//   buttonFunction,
EventCardProps) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  const toggleDisplay = () => {
    if (showInfo) {
      setShowInfo(false);
    } else {
      setShowInfo(true);
    }
  };

  return (
    <div className="event-card">
      <div className="event-card__main">
        <div className="event-card__header">
          <h4 className="event-card__title">{title}</h4>
          <img
            className="event-card__arrow"
            src={arrow}
            alt="arrow"
            onClick={toggleDisplay}
          />
        </div>
        <div className="event-card__ul">
          <li className="even-card__li">{maker}</li>
          <li className="even-card__li">{date}</li>
        </div>
      </div>
      {showInfo && (
        <div className="event-card__info">
          <p className="event-card__text">{textContent}</p>
          <div className="event-card__gallery">
            <h4>Gallery</h4>
            <div className="event-card__gallery--scroll">{gallery}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCard;
