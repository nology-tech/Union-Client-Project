import './Gallery.scss'

type GalleryProps = { galleryArray: string[] }

const Gallery = ( { galleryArray }: GalleryProps) => {

const gallery = galleryArray ?? ["Sorry! Image not found."]

  return (

    <div className="gallery"> 
      {gallery.map((image: string) => {
        return <div className="gallery__images"><img className="gallery__images--image" src={image} alt="Image of a product from maker" /></div>
      })
      }

      </div>

  )
}

export default Gallery;