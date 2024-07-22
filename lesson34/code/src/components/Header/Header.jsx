import { ButtonGroup } from './ButtonGroup';
import { Box, Typography } from '@mui/material';
import { Link, ThemeButton } from '../UI';

export function Header() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '12px',
        width: '100%'
      }}
    >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Link to="/" color="primary" underline="none">
            <Typography sx={{ fontWeight: 800 }}>BOOKING</Typography>
          </Link>
          <ThemeButton />
        </Box>
        <ButtonGroup />
    </Box>
  );
}
