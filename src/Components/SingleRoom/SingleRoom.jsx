import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context";
import styles from "./SingleRoom.module.css";
import "bootstrap/dist/css/bootstrap.css";

function SingleRoom() {
  const { getSingleRoomHandler } = useContext(GlobalContext);
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    if (!room || slug !== room.slug) {
      const rm = getSingleRoomHandler(slug);
      setRoom(rm);
      setLoading(false);
    }
  }, [slug]);

  // console.log(room.extras)

  return (
    <div>
      {loading && <div className={styles.loading}>Loading...</div>}
      {room && (
        <div>
          <div
            className={styles.hero}
            style={{ backgroundImage: "url(" + room.images[0] + ")" }}
          >
            <div className={styles.container}>
              <h1>{room.name.toUpperCase()} ROOM</h1>
              <hr></hr>
              <div>
                <a href="/rooms">
                  <button className={styles.rooms}>Back To Rooms</button>
                </a>
              </div>
            </div>
          </div>

          <div className="row m-5">
            {room.images.map((image, i) => (
              <div key={i} className="col-md-3">
                <div className="card">
                  <img src={image} alt={image} className={styles.image} />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.row}></div>
          <div className="row p-5">
            <div className="col-md-6">
              <h2>Details</h2>
              <p className="text-justify">
                {room.description ? room.description : ""}
              </p>
            </div>

            <div className="col-md-6 ps-5" style={{ fontSize: "1.2rem" }}>
              <h2>Info</h2>
              <p>Price: ${room.price}</p>
              <p>Room Size: {room.size} SQFT</p>
              <p>Max Capacity: {room.capacity}</p>
              {room.pets === true ? (
                <p>Pets Allowed</p>
              ) : (
                <p>Pets Not Allowed</p>
              )}
            </div>
          </div>

          <div className="row p-5">
            <h2>Extras Feature</h2>
            <ul>
              {room.extras.map((extra) => (
                <li key={extra}>{extra}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleRoom;
