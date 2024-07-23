import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "/slider/domek-glowne.webp";
import image2 from "/slider/hamak.webp";
import image3 from "/slider/kominek.webp";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img src={image1} alt="Domek główne" />
          <div className="slide-text">
            <div className="banner">
              <h1>Urokliwy domek w sercu natury</h1>
              <div></div>
              <p>
                Odpocznij w naszym komfortowym domku pośród malowniczych
                krajobrazów.
              </p>
            </div>
          </div>
        </div>
        <div className="slide">
          <img src={image2} alt="Hamak" />
          <div className="slide-text">
            <div className="banner">
              <h1>Relaks na świeżym powietrzu</h1>
              <div></div>
              <p>
                Odkryj spokój i relaks w zaciszu naszego ogrodu z wygodnym
                hamakiem.
              </p>
            </div>
          </div>
        </div>
        <div className="slide">
          <img src={image3} alt="Kominek" />
          <div className="slide-text">
            <div className="banner">
              <h1>Przytulne wieczory przy kominku</h1>
              <div></div>
              <p>
                Spędź magiczne wieczory przy ciepłym kominku w rodzinnej
                atmosferze.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
