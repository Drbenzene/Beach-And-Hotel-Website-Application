import React from "react";
import styles from "./Banner.module.css";

function Banner(props) {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1>{props.title}</h1>
        <hr></hr>
        <div>
          <a href={props.url}>
            <button className={styles.rooms}>{props.btnText}</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
