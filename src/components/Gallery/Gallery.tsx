import "./Gallery.scss";

type GalleryProps = {
  galleryArray: string[];
  imageAltTag: string;
};

const Gallery = ({ galleryArray, imageAltTag }: GalleryProps) => {
  return (
    <div className="gallery">
      {galleryArray.map((image: string, index) => {
        return (
          <div className="gallery__images" key={`gallery-image-${index}`}>
            <img
              className="gallery__images--image"
              src={image}
              alt={imageAltTag}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
