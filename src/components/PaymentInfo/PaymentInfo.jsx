import { FaCreditCard, FaPhone } from "react-icons/fa";
import styles from "./PaymentInfo.module.css";

function PaymentInfo() {
  return (
    <section className={styles.paymentInfo}>
      <div className="section-title">
        <h4>Zasady Płatności</h4>
        <div></div>
      </div>
      <div className={styles.paymentCenter}>
        <p className={styles.fullWidth}>
          Aby dokonać rezerwacji, prosimy o kontakt poprzez formularz
          rezerwacyjny lub telefonicznie. Po potwierdzeniu dostępności,
          poprosimy o przelew za jedną noc pobytu, a resztę kwoty można zapłacić
          gotówką po przyjeździe.
        </p>
        <div className={styles.card}>
          <FaCreditCard className={styles.icon} />
          <p>
            <strong>Numer konta:</strong> 66 1020 2980 0000 2302 0015 1886
            <br />
            <strong>Nazwa odbiorcy:</strong> Agroturystyka Wilkowyja
            <br />
            <strong>Tytuł przelewu: </strong> Imię i nazwisko, data przyjazdu
          </p>
        </div>
        <div className={styles.card}>
          <FaPhone className={styles.icon} />
          <p>
            W razie pytań, prosimy o kontakt telefoniczny pod numerem:
            <span className={styles.desktopOnly}> +48 887 407 451</span>
          </p>
          <p className={styles.mobileOnly}>
            <a href="tel:+48887407451" className={styles.reserveBtn}>
              Zadzwoń
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default PaymentInfo;
