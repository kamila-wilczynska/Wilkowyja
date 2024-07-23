import { FaPhone } from "react-icons/fa";
import styles from "./FixedReserveButton.module.css";

const FixedReserveButton = () => (
  <a href="tel:+48887407451" className={styles.fixedButton}>
    <FaPhone /> Zadzwoń!
  </a>
);

export default FixedReserveButton;
