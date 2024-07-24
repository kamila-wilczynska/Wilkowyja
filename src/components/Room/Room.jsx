import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Room.module.css";

export default function Room({ room }) {
  const { name, slug, images, price, priceTwo } = room;
  return (
    <div className={styles.room}>
      <div className={styles.imgContainer}>
        <img src={images && images[0]} alt={name} />
        <div className={styles.priceTop}>
          <h6>PLN{price}</h6>
          <p>za noc</p>
          <h6>PLN{priceTwo}</h6>
          <p>za dwie noce</p>
        </div>
        <Link to={`/rooms/${slug}`} className={`${styles.roomLink}`}>
          Więcej
        </Link>
      </div>
      <p className={styles.roomInfo}>{name}</p>
    </div>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    priceTwo: PropTypes.number.isRequired,
  }).isRequired,
};
