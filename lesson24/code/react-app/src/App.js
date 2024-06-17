import React from "react";
import { Header } from "./components";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDate: false,
    };
  }

  isOpenHandler = () => {
    this.setState((state) => {
      console.log(state);
      return { showDate: !state.showDate };
    });
  };

  render() {
    const { showDate } = this.state;
    const styles = {
      fontWeight: 300,
      color: "#00faff",
    };

    const paragraph = React.createElement("p", {
      className: "paragraph",
      children: "Some text",
    });

    // paragraph.type = 'button' // Error but by logic you can do this

    console.log(paragraph);

    const list = ["Serhii", "Vitalii", "Oksana"];

    return (
      <div className="App">
        <Header />
        <h1 id={Math.round(Math.random() * 100).toString()} style={styles}>
          Hello world
        </h1>
        {paragraph}
        {"Text"}
        {null}
        {/*{{}} // Error*/}
        <ul>
          {list.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
        <button onClick={this.isOpenHandler}>Click me</button>
        {showDate && <div>{new Date().toISOString()}</div>}
        {typeof true === "string" ? "This is the sting" : "this is not sting"}
      </div>
    );
  }
}

export default App;
