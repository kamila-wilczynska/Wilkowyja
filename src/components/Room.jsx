import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Room({ room }) {
  const { name, slug, images, price, priceTwo } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images && images[0]} alt={name} />
        <div className="price-top">
          <h6>PLN{price}</h6>
          <p>za noc</p>
          <h6>PLN{priceTwo}</h6>
          <p>za dwie noce</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Więcej
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
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
