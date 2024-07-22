import { forwardRef } from 'react';
import { Button } from '@mui/material';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const NavLink = forwardRef(function CustomNavLink(props, ref) {
  return <Button component={RouterNavLink} ref={ref} {...props} />;
});
