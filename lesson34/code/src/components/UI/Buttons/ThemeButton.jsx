import { Box, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, setTheme } from '../../../store';
import { DARK_THEME, LIGHT_THEME } from '../../../services';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';

export function ThemeButton() {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  function toggleThemeHandler() {
    const newTheme = theme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    dispatch(setTheme(newTheme));
  }

  return (
    <Box
      sx={{
        maxWidth: '32px',
      }}
    >
      <IconButton
        onClick={toggleThemeHandler}
        aria-label="butoon to toggle theme"
      >
        {' '}
        {theme === DARK_THEME ? (
          <WbSunnyRoundedIcon fontSize="small" color="primary" />
        ) : (
          <ModeNightRoundedIcon fontSize="small" color="secondary" />
        )}
      </IconButton>
    </Box>
  );
}
