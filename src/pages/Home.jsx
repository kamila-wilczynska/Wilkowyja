import Services from "../components/Services";
import FeaturedRoom from "../components/FeaturedRoom";
import Hero from "../components/Hero";
import MapComponent from "../components/MapComponent/MapComponent";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <FeaturedRoom />
      <MapComponent />
    </div>
  );
}

export default Home;
