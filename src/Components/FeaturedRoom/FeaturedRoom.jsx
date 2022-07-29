import React, { useContext } from "react";
import styles from "./FeaturedRoom.module.css";
import { GlobalContext } from "../../Context";
import {Link} from 'react-router-dom'

function FeaturedRoom() {
  const {featured } = useContext(GlobalContext);
  console.log(featured, "On FeaturedRoom");

  return (


      <div className="container" id={styles.container1}>
        <h1 className={styles.heading}>Featured Rooms</h1>
        <div className="row justify-content-evenly">
          {featured.map(
            (room) =>
              (
                <div className="col-md-3" id={styles.colmod}>
                  <div className="card" id={styles.cards}>
                    <img src={room.images[0]} className="card-img-top" alt="" />
                    <div className="card-body" id={styles.imgcard}>
                      <h4 className="card-title text-center">{room.name}</h4>
                    </div>
                    <div className={styles.price}>
                      <span>${room.price}</span>
                      <p> per night</p>
                    </div>
                    <Link to={`/rooms/${room.slug}`}>
                    <div className={styles.features}>
                      <button>Features</button>
                  </div>
                  </Link>
                  </div>

                </div>
              )
          )}
        </div>
      </div>
  );
}

export default FeaturedRoom;
