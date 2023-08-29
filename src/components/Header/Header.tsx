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
      <h2 className="header__brand">DOT TO DOT - LOCAL MAKERS</h2>
      <h1 className="header__title">{title}</h1>
      <h3 className="header__subtitle">{subTitle}</h3>
      {imageUrl !== undefined ? (
        <img className="header__image" src={imageUrl} alt="header-image" />
      ) : null}
      {videoUrl !== undefined ? (
        <video
          className="header__video"
          src={videoUrl}
          width={380}
          height={260}
          controls
        ></video>
      ) : null}
    </div>
  );
};

export default Header;
