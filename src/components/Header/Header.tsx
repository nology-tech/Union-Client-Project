import "./Header.scss";

type HeaderProps = {
  title: string;
  subTitle?: string;
  imageUrl?: string;
  videoUrl?: string;
};

const Header = ({ title, subTitle, imageUrl, videoUrl }: HeaderProps) => {
  return (
    <div className="header">
      <h4 className="header__brand">DOT TO DOT - LOCAL MAKERS</h4>
      <h1 className="header__title">{title}</h1>
      <p className="header__subtitle">{subTitle}</p>
      {imageUrl !== undefined ? (
        <img className="header__image" src={imageUrl} alt="header-image" />
      ) : null}

      {videoUrl !== undefined ? (
        <div className="header__video-positioning">
          <div className="header__video-container">
            <div className="header__video-container header__video-container--upper-half"></div>
            <video
              className="header__video"
              src={videoUrl}
              width={350}
              height={240}
              controls
            ></video>
            <div className="header__video-container header__video-container--lower-half"></div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
