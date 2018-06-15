import React from "react";
import PanelBody from "./PanelBody"

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <PanelBody state handleIncrement handleDecrement/>
    );
  }
}

export default Counter;
