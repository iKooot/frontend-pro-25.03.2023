import React, { useState } from "react";
import PropTypes from "prop-types";

export function Timer(props) {
  const { text, isBoolean = true } = props;
  const [time, setTime] = useState(new Date());

  function tick() {
    setTime(new Date())
  }

  setInterval(tick, 1000);

  return (
    <div id="FTimer">
      <p>{text}</p>
      {isBoolean && `This is boolean type, props = ${isBoolean}`}
      <p>This time {time.toISOString()}</p>
      {props.children}
    </div>
  );
}

Timer.propTypes = {
  text: PropTypes.string.isRequired,
  isBoolean: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

Timer.defaultProps = {
  text: "Hello world",
  isBoolean: true,
  children: null,
};
