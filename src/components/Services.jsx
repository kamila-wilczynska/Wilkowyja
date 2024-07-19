import Title from "./Title";
import ServicesCard from "./ServicesCard";
import { GiFireplace } from "react-icons/gi";
import { MdOutdoorGrill } from "react-icons/md";
import { FaWifi, FaBasketballBall } from "react-icons/fa";
// import { MdFastfood } from "react-icons/md";

function Services() {
  return (
    <section className="services">
      <Title title="Co oferujemy?" />
      <div className="services-center">
        <ServicesCard
          icon={GiFireplace}
          heading="Kominek"
          description="Przytulny kominek, który zapewni ciepło i atmosferę w chłodne wieczory."
        />
        <ServicesCard
          icon={MdOutdoorGrill}
          heading="Wiata na grill"
          description="Specjalne miejsce na grilla, gdzie można cieszyć się posiłkami na świeżym powietrzu."
        />
        <ServicesCard
          icon={FaWifi}
          heading="Wi-fi"
          description="Darmowy dostęp do internetu na terenie całego obiektu."
        />
        <ServicesCard
          icon={FaBasketballBall}
          heading="Plac zabaw"
          description="Bezpieczny plac zabaw dla dzieci i boisko do siatkówki"
        />
      </div>
    </section>
  );
}

export default Services;
