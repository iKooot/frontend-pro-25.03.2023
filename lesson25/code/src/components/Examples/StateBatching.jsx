import React from "react";

export class StateBatching extends React.Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    // this.setState({
    //   count: this.state.count + 1,
    // });
    // this.setState({
    //   count: this.state.count + 1,
    // });
    // this.setState({
    //   count: this.state.count + 1,
    // });
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };
  render() {
    console.log("render");
    console.log(this.state);
    return (
      <>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increase</button>
      </>
    );
  }
}
