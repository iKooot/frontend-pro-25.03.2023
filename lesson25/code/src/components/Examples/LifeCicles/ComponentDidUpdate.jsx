import React from "react";

export class ComponentDidUpdate extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("ComponentDidUpdate prevState => ", prevState);
    console.log("ComponentDidUpdate prevProps => ", prevProps);
  }
  render() {
    const { title } = this.props;
    return <div>title = {title}</div>;
  }
}
