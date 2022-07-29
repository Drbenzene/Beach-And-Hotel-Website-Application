import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Services.module.css";
import { FaCocktail, FaShuttleVan } from "react-icons/fa";
import {GiHiking, GiSecurityGate} from "react-icons/gi";


function Services() {
  return (
    <div className="container" id={styles.container1}>
      <div>
        <h1 className={styles.heading}>Services</h1>
      </div>
      <div className="row justify-content-start">
        <div className="col-md-3" id={styles.Services}>
          <div className={styles.info}>
          <FaCocktail size={70} />
            <h5 className="title">Free Cocktail</h5>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>

        <div className="col-md-3" id={styles.Services}>
          <div className={styles.info}>
          <GiHiking size={70} />
            <h5 className="title">Endless Hiking</h5>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>

        <div className="col-md-3" id={styles.Services}>
          <div className={styles.info}>
          <FaShuttleVan size={70} />
            <h5 className="title">Free ShuttleVan</h5>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>

        <div className="col-md-3" id={styles.Services}>
          <div className={styles.info}>
          <GiSecurityGate size={70} />
            <h5 className="title">Maximum Security</h5>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
