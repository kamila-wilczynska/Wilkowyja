import SecondHero from "../components/SecondHero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <SecondHero className="banner">
        <Banner title="404" subtitle="Strona nie została znaleziona">
          <Link to="/" className="btn-primary">
            Strona główna
          </Link>
        </Banner>
      </SecondHero>
    </>
  );
}

export default Error;
