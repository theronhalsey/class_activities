import React from "react";

const name = "Theron"
const number = name.length
const thought1 = "is fancy-pantsy"
const thought2 = "makes a lot of intuitive sense"
const thought3 = "will be super-duper useful!"

const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is {name}</h1>
        <h2>My name has {number} letters</h2>
        <h2>I think React {`${thought1}, ${thought2}, and ${thought3}`}</h2>
      </div>
    </div>
  </div>
);

export default JSXVariables;
