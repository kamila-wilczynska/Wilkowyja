import { FaPhone } from "react-icons/fa";
import styles from "./BookButton.module.css";

const BookButton = () => (
  <a href="/reservation" className={styles.fixedButton}>
    <FaPhone />
    Rezerwacja
  </a>
);

export default BookButton;
