import SecondHero from "../components/SecondHero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

function Attractions() {
  return (
    <>
      <SecondHero hero="defaultHero">
        <Banner title="Atrakcje w okolicy">
          <Link to="/" className="btn-primary">
            Wróć do strony głównej
          </Link>
        </Banner>
      </SecondHero>
    </>
  );
}

export default Attractions;
