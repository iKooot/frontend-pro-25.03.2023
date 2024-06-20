import React from "react";
import { PureComponent } from "./PureComponent";
import { ComponentDidUpdate } from "./ComponentDidUpdate";
import { ComponentWillUnmount } from "./ComponentWillUnmount";
import {ErrorBoundary} from "./ErrorBoundary";

const ButtonComponent = () => {
    throw Error("error!");
    return <></>;
};

export class LifeCicles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      users: null,
      showModal: false,
    };
    console.log("this is constructor");
    console.log(`this props is ${JSON.stringify(props)}`);
    console.log(`this state is ${JSON.stringify(this.state)}`);
  }

  componentDidMount() {
    console.log("Component mounted");
    console.log(document.getElementById("life-cicle")); // element
    const div = document.getElementById("life-cicle");
    div.style.color = "aqua";
  }

  toggleModalHandler = () => {
    this.setState((prev) => ({ showModal: !prev.showModal }));
  };

  render() {
    console.log("render");
    return (
      <>
        <div id="life-cicle">Life cicles</div>
        <input
          value={this.state.title}
          onChange={(e) => {
            this.setState({ title: e.target.value });
          }}
        />
        <PureComponent />
        <ComponentDidUpdate title={this.state.title} />
        <div>
          <button onClick={this.toggleModalHandler}>toggle modal</button>
          {this.state.showModal && <ComponentWillUnmount />}
        </div>
        {/*<ErrorBoundary fallback={<p>Something went wrong</p>}>*/}
        {/*  {true && <ButtonComponent />}*/}
        {/*</ErrorBoundary>*/}
      </>
    );
  }
}
