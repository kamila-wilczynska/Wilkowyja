import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import SecondHero from "../components/SecondHero";
import Banner from "../components/Banner/Banner";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Gallery() {
  const galleryImages = [
    { img: "/gallery/domek1.webp" },
    { img: "/gallery/domek2.webp" },

    { img: "/gallery/domek3.webp" },
    { img: "/gallery/domek4.webp" },
    { img: "/gallery/domek5.webp" },
    { img: "/gallery/hamak2.webp" },
    { img: "/gallery/wiata.webp" },
    { img: "/gallery/wiata2-lower.webp" },
    { img: "/gallery/domekdladzieci.webp" },

    { img: "/gallery/kolo.webp" },
    { img: "/gallery/drzewo.webp" },
    { img: "/gallery/salon.webp" },
    { img: "/gallery/dziad.webp" },
    { img: "/gallery/kuchnia.webp" },
    { img: "/gallery/balkon.webp" },

    { img: "/gallery/lazienka.webp" },
    { img: "/gallery/łazienka.webp" },
    { img: "/gallery/lazienkamala.webp" },

    { img: "/gallery/laka.webp" },
    { img: "/gallery/most.webp" },
    { img: "/gallery/rzeka.webp" },

    { img: "/gallery/noc.webp" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroImage = "/slider/droga2.webp";

  return (
    <>
      <SecondHero backgroundImage={heroImage}>
        <Banner title="Galeria">
          <Link to="/" className="btn-primary">
            Strona główna
          </Link>
        </Banner>
      </SecondHero>

      <div className="WrapGallery">
        <PhotoGallery galleryImages={galleryImages} />
      </div>
    </>
  );
}

export default Gallery;
