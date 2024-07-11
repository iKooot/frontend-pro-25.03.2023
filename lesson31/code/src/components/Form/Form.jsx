import { useRef } from "react";
import { Button } from "../UI/index.js";
import style from "./Form.module.scss";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/users";

export function Form() {
  const nameRef = useRef();
  const surnameRef = useRef();
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();

    if (!nameRef.current.value && !surnameRef.current.value) {
      console.warn("invalid value");
      return;
    }

    const preparedData = {
      id: new Date().getTime(),
      [nameRef.current.name]: nameRef.current.value,
      [surnameRef.current.name]: surnameRef.current.value,
    };

    dispatch(addUser(preparedData));
  }

  return (
    <div className={style.container}>
      <h3 className="t-c">Some form</h3>
      <form onSubmit={submitHandler} className={style.form}>
        <input type="text" ref={nameRef} name="name" className={style.input} />
        <input
          type="text"
          ref={surnameRef}
          name="surname"
          className={style.input}
        />
        <Button type="submit">Add user</Button>
      </form>
    </div>
  );
}
