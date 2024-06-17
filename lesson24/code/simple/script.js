class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return "Button was clicked";
    }

    return React.createElement(
      "button",
      {
        onClick: () => this.setState({ clicked: true }),
      },
      "Click me",
    );
  }
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(Button));
