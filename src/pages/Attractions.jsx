// src/pages/Attractions.jsx
import BlogPost from "../components/BlogPost/BlogPost";
import image1 from "../images/jeziorko-bobrowe-i-wieza-widokowa.jpg";
import image2 from "../images/Solina.jpeg";
import image3 from "/blog/rabe.jpg";

import { Link } from "react-router-dom";
import SecondHero from "../components/SecondHero";
import Banner from "../components/Banner";
import { useEffect } from "react";

const blogPosts = [
  {
    title: "Jeziorka Bobrowe",
    category: "Natura",
    distanse: "7",
    description:
      "Jeziorko Bobrowe koło Huczwic to malowniczy zakątek w Bieszczadach, powstały dzięki działalności bobrów. Te pracowite zwierzęta stworzyły tamy i żeremia, które przekształciły teren w unikatowy ekosystem wodny. Jeziorko i otaczające je stawy stanowią idealne siedlisko dla różnorodnych gatunków roślin i zwierząt, przyciągając zarówno miłośników przyrody, jak i turystów. Odwiedzający mogą spacerować ścieżkami dydaktycznymi, podziwiając piękno natury i poznając znaczenie bobrów w ekosystemie. To miejsce oferuje niezapomniane wrażenia i chwile relaksu w sercu dzikiej przyrody Bieszczad.",
    image: image1,
    isLeftAligned: true,
  },
  {
    title: "Dolina Rabego",
    category: "Natura",
    distanse: "6",
    description:
      "Dolina Rabego, położona w gminie Baligród, jest jednym z najpiękniejszych miejsc w Bieszczadach. Znajduje się tu Rezerwat Przyrody Gołoborze, gdzie można podziwiać unikalne formacje skalne. Trasa przyrodnicza w dolinie rozpoczyna się przy ujęciu wody mineralnej Anna, a ścieżka prowadzi przez malowniczy las świerkowo-jodłowy. Woda mineralna z tego źródła ma unikalny skład i właściwości zdrowotne.<br /><br /><strong>Atrakcje Doliny Rabego:</strong><br />  <ul><li>Rezerwat Przyrody Gołoborze: Unikalne rumowiska skalne i malownicze widoki.</li><li>Ścieżki przyrodnicze: Idealne do pieszych wędrówek, z oznakowanymi trasami i tablicami informacyjnymi.</li><li>Woda źródlana Anna: Krystalicznie czysta, o rzadkim składzie mineralnym, znana z właściwości leczniczych.</li><li>Infrastruktura turystyczna: Parking, mostki, schodki, i duża wiata ogniskowa.</li></ul>",
    image: image3,
    isLeftAligned: false,
  },

  {
    title: "Jezioro Solińskie",
    category: "Natura Sport",
    distanse: "15",
    description:
      "Jezioro Solińskie, zwane również Bieszczadzkim Morzem, to największy zbiornik wodny w Polsce, przyciągający turystów swoimi malowniczymi krajobrazami i licznymi atrakcjami. Położone około 15 kilometrów od Mchawy (dojazd do Wołkowyji), stanowi idealne miejsce dla miłośników sportów wodnych, takich jak żeglarstwo, kajakarstwo, czy wędkarstwo. Słynna zapora w Solinie, będąca jedną z największych atrakcji turystycznych, oferuje zapierające dech w piersiach widoki oraz możliwość zwiedzania jej wnętrza. Jezioro Solińskie to idealne miejsce na aktywny wypoczynek oraz relaks na łonie natury, przyciągające zarówno rodziny, jak i pasjonatów przygód.",
    image: image2,
    isLeftAligned: true,
  },
];

const Attractions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <SecondHero hero="defaultHero">
        <Banner title="Atrakcje w okolicy">
          <Link to="/" className="btn-primary">
            Strona główna
          </Link>
        </Banner>
      </SecondHero>

      <div className="blogContainer">
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            category={post.category}
            distanse={post.distanse}
            description={post.description}
            highlights={post.highlights}
            image={post.image}
            isLeftAligned={post.isLeftAligned}
          />
        ))}
      </div>
    </div>
  );
};

export default Attractions;
