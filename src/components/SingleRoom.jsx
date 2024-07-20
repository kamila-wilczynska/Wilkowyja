import { Component } from "react";
import defaultBcg from "../images/details-4.jpeg";
// import Hero from './Hero'
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import SecondHero from "./SecondHero";
import Banner from ".Banner";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = RoomContext;
  //   componentDidMount() {}
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);

    if (!room) {
      return (
        <div className="error">
          <h3>nie ma takiego pokoju...</h3>
          <Link to="/rooms" className="btn-primary">
            {" "}
            Wróć{" "}
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      proce,
      extras,
      brekfast,
      pets,
      images,
    } = room;
    return (
      <>
        <SecondHero hero="roomsHero">
          <Banner title={`${name} pokój`}>
            <Link to="/rooms" className="btn-primary">
              Wróc
            </Link>
          </Banner>
        </SecondHero>
      </>
    );
  }
}
