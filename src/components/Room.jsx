import { Link } from "react-router-dom";

// export default function Room({ room }) {
//   const { name, slug, images, price } = room;
//   return (
//     <article className="room">
//       <div className="img-container">
//         <img src={images[0]} alt="room" />
//         <div className="price-top">
//           <h6>PLN{price}</h6>
//           <p>za noc</p>
//         </div>
//         <Link to={`/rooms/${slug}`} className="btn-primary room-link">
//           Features
//         </Link>
//       </div>
//       <p className="room-info">{name}</p>
//     </article>
//   );
// }

export default function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images && images[0]} alt="room" />
        <div className="price-top">
          <h6>PLN{price}</h6>
          <p>za noc</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Więcej
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}
