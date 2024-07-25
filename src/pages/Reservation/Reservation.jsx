import SecondHero from "../../components/SecondHero";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import styles from "./Reservation.module.css";
import Form from "../../components/Form/Form";
import PaymentInfo from "../../components/PaymentInfo/PaymentInfo";

const heroImage = "/slider/droga2.webp";

function Reservation() {
  return (
    <>
      <SecondHero backgroundImage={heroImage}>
        <Banner title="Rezerwacja">
          <Link to="/" className="btn-primary">
            Strona główna
          </Link>
        </Banner>
      </SecondHero>
      <div className={styles.Wrap}>
        <PaymentInfo />
        <Form />
      </div>
    </>
  );
}

export default Reservation;
