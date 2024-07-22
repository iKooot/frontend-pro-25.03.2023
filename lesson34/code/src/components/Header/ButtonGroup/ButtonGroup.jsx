import { NavLink } from "../../UI";
import { ButtonGroup as ButtonGroupMUI } from "@mui/material";

export function ButtonGroup() {
  return (
    <ButtonGroupMUI sx={{display: 'flex', gap: 2}}>
      <NavLink to='/hotels' variant="contained">Hotels</NavLink>
      <NavLink to='/about' variant="contained">About</NavLink>
    </ButtonGroupMUI>
  );
}
