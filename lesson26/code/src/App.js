import { useState } from "react";
import {
  Button,
  CAnimation,
  CForms,
  CRefs,
  Initial,
  // StateReset
} from "./components";
import styles from "./App.module.scss";
import { RenderCounter } from "./components/UseEffect/RenderCounter";
import { Timer } from "./components/UseEffect/Timer";
import { Animation } from "./components/UseEffect/Animation";
import {CallMyName} from "./components/UseEffect/CallMyName";
import {WindowResize} from "./components/UseEffect/WindowResize";
import {FetchUsers} from "./components/UseEffect/FetchUsers";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.center}>
      {/*{isOpen && <CRefs />}*/}
      {/*<Button onClick={() => setIsOpen((prev) => !prev)}>show refs</Button>*/}
      {/*<CAnimation />*/}
      {/*<CForms />*/}
      {/*<Initial/>*/}
      {/*<StateReset />*/}
      {/*<RenderCounter />*/}
      {/*<Timer />*/}
      {/*<Animation />*/}
      {/*<CallMyName/>*/}
      {/*<WindowResize/>*/}
      <FetchUsers/>
    </div>
  );
}

export default App;
