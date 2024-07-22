import { Link, Typography } from "@mui/material";

export function Footer(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        iKot
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
