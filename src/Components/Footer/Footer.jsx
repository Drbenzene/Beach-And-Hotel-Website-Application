import React from "react";
import "./Footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="footer-newsletter">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h4>Our Newsletter</h4>
                <p>
                  Subscribe on our newsletter to get notified of our offers and
                  promotions.
                </p>
              </div>
              <div className="col-lg-6">
                <form action method="post">
                  <input type="email" name="email" />
                  <input type="submit" defaultValue="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Company</h4>
                <ul>
                  <li>
                    <Link to="#">Home</Link>
                  </li>
                  <li>
                    <Link to="#">About Us</Link>
                  </li>
                  <li>
                    <Link to="#">History</Link>
                  </li>
                  <li>
                    <Link to="#">Awards</Link>
                  </li>
                  <li>
                    <Link to="#">Partnerships</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <Link to="#">Escort Services</Link>
                  </li>
                  <li>
                    <Link to="#">Lodging</Link>
                  </li>
                  <li>
                    <Link to="#">Conference & Events</Link>
                  </li>
                  <li>
                    <Link to="#">Beach Party</Link>
                  </li>
                  <li>
                    <Link to="#">Event Management</Link>
                  </li>
                  <li>
                    <Link to="#">Food And Catering Services</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  A108 Adam Street <br /> New York, NY 535022
                  <br /> United States <br />
                  <br /> <strong>Phone:</strong> +1 5589 55488 55
                  <br /> <strong>Email:</strong> info@example.com
                  <br />
                </p>
              </div>
              <div className="col-lg-3 col-md-6 footer-info">
                <h3>About Beach Resorts</h3>
                <p>
                  Cras fermentum odio eu feugiat lide par naso tierra. Justo
                  eget nada terra videa magna derita valies darta donna mare
                  fermentum iaculis eu non diam phasellus.
                </p>
                <div className="social-links mt-3">
                  <Link to="#">
                    <AiOutlineInstagram />
                  </Link>
                  <Link to="#">
                    <FiLinkedin />
                  </Link>
                  <Link to="#">
                    <FiTwitter />
                  </Link>
                  <Link to="#">
                    <FiFacebook />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
             Copyright
            <strong>
              <span> Beach Resorts</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by Boyinbode Ebenezer Ayomide
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
