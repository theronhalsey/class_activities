import React from "react";

const HelloBootstrap = () => (
  <div className="container">
    <div className="jumbotron">
      <h1>PARTY WORLD CHAMPIONSHIP!</h1>
      <p>DO YOU HAVE WHAT IT TAKES TO ENTER THE PARTY BATTLE!?!</p>
      <p>
        <button className="btn btn-primary btn-lg">
          PARTY HARD
        </button>
      </p>
    </div>
    <div className="card mb-4">
      <div className="card-header">
        <h3>ANDREW W. K.</h3>
      </div>
      <div className="card-body">
        <p className="card-text">CURRENT PARTYING WORLD CHAMPION</p>
        <img src="http://andrewwk.com/cms/andrewwk/news/5bdec47d8b5d5d39b901b2bb15d2782b.jpg"/>
      </div>
    </div>
    <div className="card mb-4">
      <div className="card-header">
        <h3>SPUDS MCKENZIE</h3>
      </div>
      <div className="card-body">
        <p className="card-text">PARTIEST DOG ON EARTH</p>
        <img src="http://static3.businessinsider.com/image/58935b5b6e09a826008b49a3-812/screen%20shot%202017-02-02%20at%20111559%20am.png"/>
      </div>
    </div>
  </div>
);

export default HelloBootstrap;
