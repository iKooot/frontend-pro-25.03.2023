import React from "react";
import { createPortal } from "react-dom";

export class ModalPortal extends React.Component {
  state = {
    isOpen: false,
  };

  toggleModalHandler() {
    this.setState((state) => ({ isOpen: !state.isOpen }));
  }
  render() {
    const { isOpen } = this.state;

    function createModalContent(toggleHandler) {
      return (
        <div>
          <p>This is modal text</p>
          <button onClick={toggleHandler}>Close modal</button>
        </div>
      );
    }
    return (
      <>
        <button onClick={this.toggleModalHandler.bind(this)}>
          Toggle modal
        </button>
        {isOpen &&
          createPortal(
            createModalContent(this.toggleModalHandler.bind(this)),
            document.getElementById("modals"),
          )}
      </>
    );
  }
}
