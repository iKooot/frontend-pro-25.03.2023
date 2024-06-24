import React, { useEffect, useState } from "react";

export function EffectForm() {
  const [data, setData] = useState("");
  const [valid, setValid] = useState(null);

  useEffect(() => {
    if (data === "") {
      setValid(null);
      return;
    }

    if (/^\w+$/.test(data)) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [data]);

  function submitHandler(e) {
    e.preventDefault();

    console.log(data);
  }

  function changeHandler(e) {
    setData(e.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>
          Search
          <input type="text" name="firstName" onChange={changeHandler} />
        </label>
        {valid === false && <p>Please enter first name</p>}
      </div>
      <button disabled={!valid} type="submit">
        Submit
      </button>
    </form>
  );
}
