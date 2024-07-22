import { forwardRef } from 'react';
import { Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const Link = forwardRef(function CustomLink(props, ref) {
  return <MuiLink component={RouterLink} ref={ref} {...props} />;
});
