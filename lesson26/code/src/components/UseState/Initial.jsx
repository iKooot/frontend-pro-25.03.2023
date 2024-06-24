import React, { useState } from "react";

export function Initial() {
  const [counter, setCounter] = useState(() => {
    return 0;
  });
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  // dont do it

  // if (Math.random() > 0.5) {
  //   const [counter, setCounter] = useState(() => {
  //     return 0;
  //   });
  // }
  //
  // for (let i = 0; i < 5; i++) {
  //   const [counter, setCounter] = useState(() => {
  //     return 0;
  //   });
  // }
  //
  // const clickHandler = () => {
  //   const [counter, setCounter] = useState(() => {
  //     return 0;
  //   });
  // };

  console.log("render");
  console.log(search);

  return (
    <div>
      <h3>Hello use state</h3>
      <p>this component rendered {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <br />
      {isOpen && <p>Modal opened!</p>}
      <button
        onClick={() =>
          setIsOpen((prevState) => {
            return !prevState;
          })
        }
      >
        Toggle
      </button>
      <br />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
