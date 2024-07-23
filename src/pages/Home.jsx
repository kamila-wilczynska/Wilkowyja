import Services from "../components/Services";
import FeaturedRoom from "../components/FeaturedRoom";
import Hero from "../components/Hero";
import MapComponent from "../components/MapComponent/MapComponent";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
