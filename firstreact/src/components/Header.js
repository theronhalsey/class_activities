import React from "react";

const styles = {
  header: {
    background: "red",
    height: "200px",
  },
  h1: {
    margin: 0,
    paddingTop: "75px",
    textAlign: "center",
    color: "white",
    fontSize: "100px"
  }
}

// By importing the Header.css file, it is added to the DOM whenever this component loads

const Header = () => (
  <header style={styles.header} className="header">
    <h1 style={styles.h1}>Welcome</h1>
  </header>
);

export default Header;
