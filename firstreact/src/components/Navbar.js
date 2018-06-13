import React from "react";

const styles = {
  navbar: {
    background: "green",
    height: "60px",
    justifyContent: "flex-end"
  },  
  a: {
    color: "white",
    fontSize: "1.3rem",
    textDecoration: "none",
    margin: "5px",
    lineHeight: 3
  }
}

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const Navbar = () => (
  <nav style={styles.navbar} className="navbar">
    <a style={styles.a} href="/">Welcome</a>
  </nav>
);

export default Navbar;
