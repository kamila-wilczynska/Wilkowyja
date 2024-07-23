// // src/components/PhotoGallery/PhotoGallery.jsx

// // import Gallery from "react-photo-gallery";

// import image1 from "../../images/gallery/domek1.jpg";
// import image2 from "../../images/gallery/domek2.jpg";
// import image3 from "../../images/gallery/domek3.jpg";
// import image4 from "../../images/gallery/domek4.jpg";
// import image5 from "../../images/gallery/domek5.jpg";
// import image6 from "../../images/gallery/domekdladzieci.jpg";
// import Gallery from '../../pages/Gallery'
// // Dodaj więcej zdjęć, jeśli chcesz

// const photos = [
//   {
//     src: image1,
//     width: 4,
//     height: 3,
//   },
//   {
//     src: image2,
//     width: 1,
//     height: 1,
//   },
//   {
//     src: image3,
//     width: 3,
//     height: 4,
//   },
//   // Dodaj więcej zdjęć, jeśli chcesz
//   {
//     src: image4,
//     width: 3,
//     height: 4,
//   },
//   {
//     src: image5,
//     width: 1,
//     height: 1,
//   },
//   {
//     src: image6,
//     width: 3,
//     height: 4,
//   },
// ];

// const PhotoGallery = () => {
//   return (
//     <div className={styles.galleryContainer}>
//       <Gallery photos={photos} />
//     </div>
//   );
// };

// export default PhotoGallery;

import { useState } from "react";
import styles from "./PhotoGallery.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

// import "./wsp-gallery.css";

const PhotoGallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div>
      {openModal && (
        <div className={styles.sliderWrap}>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className={styles.btnClose}
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className={styles.btnPrev}
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className={styles.btnNext}
            onClick={nextSlide}
          />
          <div className={styles.fullScreenImage}>
            <img src={galleryImages[slideNumber].img} alt="" />
          </div>
        </div>
      )}

      {/* <br />
      Current slide number:  {slideNumber}
      <br />
      Total Slides: {galleryImages.length}
      <br /><br /> */}

      <div className={styles.galleryWrap}>
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                className={styles.single}
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.img} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PhotoGallery;
