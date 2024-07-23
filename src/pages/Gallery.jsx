import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import image1 from "../images/gallery/domek1.jpg";
import image2 from "../images/gallery/domek2.jpg";
import image3 from "../images/gallery/domek3.jpg";
import image4 from "../images/gallery/domek4.jpg";
import image5 from "../images/gallery/domek5.jpg";
import image6 from "../images/gallery/domekdladzieci.jpg";

function Gallery() {
  const galleryImages = [
    {
      img: image1,
    },
    {
      img: image2,
    },
    {
      img: image3,
    },
    {
      img: image4,
    },
    {
      img: image5,
    },
    {
      img: image6,
    },
  ];

  return (
    <div className="WrapGallery">
      <PhotoGallery galleryImages={galleryImages} />
    </div>
  );
}

export default Gallery;
