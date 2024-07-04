import style from "./UserList.module.scss";
import { UserItem } from "./UserItem/index.js";
import { useSelector } from "react-redux";
import { selectUsers, selectUsersStatus } from "../../ducks/users.duck.js";
import { Loader } from "../UI/index.js";
export function UserList() {
  // const { users } = useSelector((state) => state.users);
  const users = useSelector(selectUsers);
  const status = useSelector(selectUsersStatus);

  if (status === "loading") return <Loader />;

  return (
    <div>
      <h3>Users list</h3>
      <ul className={style.list}>
        {users.map(({ name, surname, id }) => (
          <UserItem key={id} name={name} surname={surname} id={id} />
        ))}
      </ul>
    </div>
  );
}
