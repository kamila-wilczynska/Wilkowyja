import { Component } from "react";
import { RoomContext } from "../../Context";
import Loading from "../Loading";
import Room from "../Room/Room";
import Title from "../Title";
import styles from "./FeaturedRoom.module.css";

export default class FeaturedRoom extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className={styles.featuredRooms}>
        <Title title="Nasze pokoje" />
        <div className={styles.featuredRoomsCenter}>
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
