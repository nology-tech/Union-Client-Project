import { MouseEventHandler, useState } from "react";
import "./EventCard.scss";
import arrowUp from "../../assets/images/arrow-up.svg";
import arrowDown from "../../assets/images/arrow-down.svg";
import Gallery from "../Gallery/Gallery";
import Button from "../Button/Button";

type EventCardProps = {
  title: string;
  maker: string;
  date: Date;
  textContent: string;
  galleryArray: string[];
  buttonLabel: string;
  buttonVariant?: boolean;
  handleClick: MouseEventHandler<HTMLButtonElement>;
};

const EventCard = ({
  title,
  maker,
  date,
  textContent,
  galleryArray,
  buttonVariant,
  buttonLabel,
  handleClick,
}: EventCardProps) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  const toggleDisplay = () => {
    if (showInfo) {
      setShowInfo(false);
    } else {
      setShowInfo(true);
    }
  };

  return (
    <div data-testid={`event-card-${title}`} className="event-card">
      <div className="event-card__main">
        <div className="event-card__header">
          <h4 className="event-card__title">{title}</h4>
          {!showInfo && (
            <img
              className="event-card__arrow"
              src={arrowDown}
              alt="arrow"
              onClick={toggleDisplay}
            />
          )}
          {showInfo && (
            <img
              className="event-card__arrow"
              src={arrowUp}
              alt="arrow"
              onClick={toggleDisplay}
            />
          )}
        </div>
        <div className="event-card__ul">
          <li className="event-card__li">{maker}</li>
          <li className="event-card__li">{date.toLocaleDateString("en-GB")}</li>
        </div>
      </div>
      {showInfo && (
        <div className="event-card__info">
          <p className="event-card__text">{textContent}</p>
          <div className="event-card__gallery">
            <h4>Gallery</h4>
            {galleryArray.length > 0 && (
              <Gallery
                galleryArray={galleryArray}
                imageAltTag={`image for ${maker}`}
              />
            )}
          </div>
          {buttonVariant ? (
            <Button
              variant="secondary"
              label={buttonLabel}
              onClick={handleClick}
            />
          ) : (
            <Button label={buttonLabel} onClick={handleClick} />
          )}
        </div>
      )}
    </div>
  );
};

export default EventCard;
