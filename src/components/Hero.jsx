import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/domek-glowne.jpg";
import image2 from "../images/hamak.jpg";
import image3 from "../images/kominek.jpg";

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
          <img src={image1} alt="Slide 1" />
          <div className="slide-text">Tekst do slajdu 1</div>
        </div>
        <div className="slide">
          <img src={image2} alt="Slide 2" />
          <div className="slide-text">Tekst do slajdu 2</div>
        </div>
        <div className="slide">
          <img src={image3} alt="Slide 3" />
          <div className="slide-text">Tekst do slajdu 3</div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
