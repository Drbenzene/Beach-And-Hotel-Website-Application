import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./NavBar.module.css";

function NavBar() {
  const Navigation = [
    { Name: "Home", Link: "/" },
    { Name: "Rooms", Link: "/rooms" },
    { Name: "About", Link: "/about" },
    { Name: "Contact", Link: "/contact" },
    { Name: "Login", Link: "/login" },
  ];
  return (
    <div>
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          id={styles.nav} style={{ backgroundColor: "black !important"}}
        >
          <div className="container">
            <a className="navbar-brand" href="/">
              <h3 className={styles.title}>Beach <span style={{color: "red"}}>Hub</span></h3>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  {Navigation.map((item, index) => (
                    <li className="nav-item" id={styles.navList} key={index}>
                      <a className="nav-link" href={item.Link}>
                        {item.Name}
                      </a>
                    </li>
                  ))}
                </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
