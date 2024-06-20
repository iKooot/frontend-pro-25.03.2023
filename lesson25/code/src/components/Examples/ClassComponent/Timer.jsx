import React from "react";
import PropTypes from "prop-types";

export class Timer extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    isBoolean: PropTypes.bool.isRequired,
    children: PropTypes.node,
  };

  static defaultProps = {
    text: "Hello world",
    isBoolean: true,
    children: null,
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {}
  // }
  state = {
    example: "text",
    time: new Date(),
  };
  tick() {
    this.setState((prevState) => ({ time: new Date() }));
  }
  render() {
    const { text, isBoolean } = this.props;
    const { time } = this.state;

    setInterval(this.tick.bind(this), 1000);
    return (
      <div id="CTimer">
        <p>{text}</p>
        {isBoolean && `This is boolean type, props = ${isBoolean}`}
        <p>This time {time.toISOString()}</p>
        {this.props.children}
      </div>
    );
  }
}
