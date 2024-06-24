import React from "react";

export class CRefs extends React.Component {
  renderCounter = 0;
  intervalID = null;

  state = {
    counter: 0,
  };

  componentDidMount() {
    this.intervalID = setInterval(() => {
      console.log("increments");
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    if (this.intervalID) clearInterval(this.intervalID);
  }

  render() {
    this.renderCounter += 1;
    console.log("render", this.renderCounter);
    return (
      <div>
        <p>this component rendered {this.renderCounter}</p>
        <p>this component call setState counter {this.state.counter}</p>
      </div>
    );
  }
}
