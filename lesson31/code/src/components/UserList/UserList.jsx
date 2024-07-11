import { useDispatch, useSelector } from "react-redux";
import { UserItem } from "./UserItem/index.js";
import {
  clearUsers,
  selectUsers,
  selectUsersStatus,
} from "../../store/users";
import { Button, Loader } from "../UI/index.js";
import style from "./UserList.module.scss";
export function UserList() {
  const users = useSelector(selectUsers);
  const status = useSelector(selectUsersStatus);
  const dispatch = useDispatch();

  if (status === "loading") return <Loader />;

  return (
    <div className={style.container}>
      <h3 className="t-c">Users list</h3>
      <ul className={style.list}>
        {users.map(({ name, surname, id }) => (
          <UserItem key={id} name={name} surname={surname} id={id} />
        ))}
      </ul>
      {users.length > 0 && (
        <Button className={style.button} onClick={() => dispatch(clearUsers())}>
          Clear users
        </Button>
      )}
    </div>
  );
}
