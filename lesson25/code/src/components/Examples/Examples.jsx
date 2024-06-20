import React from "react";
import { ModalPortal } from "./ModalPortal/ModalPortal";
import { Timer as CTimer } from "./ClassComponent/Timer";
import { Timer as FTimer } from "./FnComponent/Timer";
import { StateBatching } from "./StateBatching";
import {LifeCicles} from "./LifeCicles/LifeCicles";

export class Examples extends React.Component {
  render() {
    // const isTrue = false;
    // if (Math.round(Math.random() * 100) > 50) return <p>Digit is bigger ther 50</p>;

    // const readyHTML =
    //   '<p>Hello <span style="color: #282c34"><b>React</b>!</span></p>';

    return (
      <>
        {/*{ false && 'Some text' }*/}
        {/*{ null && 'Some text' }*/}
        {/*{ undefined && 'Some text' }*/}
        {/*{ true && 'Some text' }*/}
        {/*{isTrue ? "Hello true" : "Hello false"}*/}
        {/*<>*/}
        {/*  <p>Hello par</p>*/}
        {/*</>*/}
        {/*<React.Fragment>*/}
        {/*  <p>Hello par</p>*/}
        {/*</React.Fragment>*/}
        {/*{readyHTML}*/}
        {/*<div dangerouslySetInnerHTML={{ __html: readyHTML }} />*/}
        {/*<ModalPortal />*/}
        {/*<CTimer text="DFummy text" isBoolean={true}>*/}
        {/*  <p>Class timer</p>*/}
        {/*</CTimer>*/}
        {/*<hr />*/}
        {/*<FTimer text="DFummy text2" isBoolean={false}>*/}
        {/*  <p>Function timer</p>*/}
        {/*</FTimer>*/}
        {/*<StateBatching />*/}
        <LifeCicles/>
      </>
    );
  }
}
