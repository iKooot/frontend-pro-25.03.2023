import { NavLink } from "react-router-dom";
import style from "./Navigation.module.scss";

export function Navigation({ navAttrs }) {
  const { list, active, pending } = style;
  return (
    <nav {...navAttrs}>
      <ul className={list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive ? active : isPending ? pending : ""
            }
          >
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
