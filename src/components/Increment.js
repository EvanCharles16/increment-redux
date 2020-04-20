import React, { Component } from "react";
import { connect } from "react-redux";

class Increment extends Component {
  handleIncrement = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  handleDecrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleIncrement}> + </button>
          {this.props.count}
          <button onClick={this.handleDecrement}> - </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { count: state.count };
}

export default connect(mapStateToProps)(Increment);
