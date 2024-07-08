import { Button } from "../../UI/index.js";
import style from "./UserItem.module.scss";
import { useDispatch } from "react-redux";
import { removeUser } from '../../../ducks/users.duck.js';

export function UserItem({ name, surname, id }) {
  const dispatch = useDispatch();
  function clickHandler() {
    dispatch(removeUser({ id }));
  }

  return (
    <li className={style.item}>
      <div className={style.container}>
        <p>Name: {name}</p>
        <p>Surname: {surname}</p>
      </div>
      <Button onClick={clickHandler}>Remove user</Button>
    </li>
  );
}
