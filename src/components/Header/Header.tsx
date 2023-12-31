import "./Header.scss";

type HeaderProps = {
  title: string;
  subTitle?: string;
  imageUrl?: string;
  videoUrl?: string;
  locationVenue?: string;
  locationCity?: string;
  date?: string;
  name?: string;
};

const Header = ({
  title,
  subTitle,
  imageUrl,
  videoUrl,
  locationVenue,
  locationCity,
  date,
  name,
}: HeaderProps) => {
  return (
    <div className="header">
      <div className="header__content">
        <h4 className="header__brand">DOT TO DOT - LOCAL MAKERS</h4>
        <h1 className="header__title">{title}</h1>
        {subTitle && <p className="header__subtitle">{subTitle}</p>}
        {locationVenue && locationCity && (
          <p className="header__location">
            <span className="header__location--venue">{`${locationVenue}, `}</span>
            {locationCity}
          </p>
        )}
        {date && <p className="header__date">{date}</p>}
        {name && <h1 className="header__name">{name}</h1>}
        <div className="header__border"></div>
      </div>
      {imageUrl && (
        <div className="header__image-positioning">
          <div className="header__image-container">
            <div className="header__image-container--upper-half"></div>
            <img
              className="header__image"
              src={imageUrl}
              alt="image for event"
              data-testid="image"
            />
            <div className="header__image-container--lower-half"></div>
          </div>
        </div>
      )}

      {videoUrl && (
        <div className="header__video-positioning">
          <div className="header__video-container">
            <div className="header__video-container--upper-half"></div>
            <iframe
              className="header__video"
              src={videoUrl}
              width={350}
              height={240}
              data-testid="video"
            ></iframe>
            <div className="header__video-container--lower-half"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
