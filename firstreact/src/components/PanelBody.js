import React from "react";

const PanelBody = (props) => {

<div className="card text-center">
    <div className="card-header bg-primary text-white">
        <h3 className="card-title">Click Counter!</h3>
    </div>
    <div className="card-body">
        <p className="card-text">Click Count: {props.count}</p>
        <button className="btn btn-primary" onClick={props.handleIncrement}>
            Increment
          </button>
        <button className="btn btn-danger" onClick={props.handleDecrement}>
            Decrement
          </button>
    </div>
</div>
return
}


export default PanelBody;