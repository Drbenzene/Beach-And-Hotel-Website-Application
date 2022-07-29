import React from "react";
import styles from "./Hero.module.css";
import "./Hero.css";



function Hero() {

  return (
    <div className={styles.hero}>
        <div className={styles.container}>
          <h1>Luxurious Rooms</h1>
          <hr></hr>
          <div>
            <p>Deluxe Rooms At $299</p>
            <a href='/rooms'><button className={styles.rooms}>Our Available Rooms</button></a>
 
          </div>
      </div>
    </div>
  );
}

export default Hero;
