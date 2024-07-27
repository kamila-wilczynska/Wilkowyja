import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import defaultBcg from "../images/details-4.jpeg";
import { RoomContext } from "../Context";
import Banner from "../components/Banner/Banner";
import StyledHero from "../components/StyledHero";
import { useEffect } from "react";
import BookButton from "../components/BookButton/BookButton";

const SingleRoom = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { slug } = useParams();
  const { getRoom } = useContext(RoomContext);
  const room = getRoom(slug);

  if (!room) {
    return (
      <div className="error">
        <h3>Nie ma takiego pokoju...</h3>
        <Link to="/" className="btn-primary">
          Wróć
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    balcony,
    price,
    priceTwo,
    extras,

    pets,
    images,
  } = room;

  const [mainImg, ...defaultImg] = images;

  return (
    <>
      <StyledHero img={mainImg || defaultBcg}>
        <Banner title={`${name} pokój`}>
          <Link to="/" className="btn-primary">
            Strona główna
          </Link>
        </Banner>
      </StyledHero>

      <section className="single-room">
        <div className="single-room-images">
          {defaultImg.map((item, index) => {
            return <img key={index} src={item} alt={name} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>Opis</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>Informacje</h3>
            <h6>cena za noc : PLN {price}</h6>
            <h6>cena każdą dodatkową noc : PLN {priceTwo}</h6>

            <h6>
              max pojemność :{" "}
              {capacity > 1 ? `${capacity} osoby` : `${capacity} osoba`}
            </h6>
            <h6>
              zwierzęta :
              {pets ? " za dodatkową opłatą" : "zwierzęta niedozwolone"}{" "}
            </h6>
            <h6>wyjście na balkon: {balcony ? " tak" : "nie"} </h6>
          </article>
        </div>
        <section className="room-extras">
          <h6>Dodatki</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </section>
      <BookButton />
    </>
  );
};

export default SingleRoom;
