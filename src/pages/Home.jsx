import Services from "../components/Services";
import FeaturedRoom from "../components/FeaturedRoom/FeaturedRoom";
import Hero from "../components/Hero";
import MapComponent from "../components/MapComponent/MapComponent";
import { useEffect } from "react";
import BookButton from "../components/BookButton/BookButton";

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
      <BookButton />
    </div>
  );
}

export default Home;
