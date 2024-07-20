import SecondHero from "../components/SecondHero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

function SingleRoom() {
  return (
    <>
      <SecondHero hero="defaultHero">
        <Banner title="Nasze pokoje">
          <Link to="/" className="btn-primary">
            Wróć do strony głównej
          </Link>
        </Banner>
      </SecondHero>
    </>
  );
}

export default SingleRoom;
