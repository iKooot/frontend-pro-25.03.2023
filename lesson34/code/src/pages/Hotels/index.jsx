import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Footer,
  Header,
  PageLayout,
  List as HotelsList,
} from '../../components';
import { Box, Typography, useTheme } from '@mui/material';
import { FETCH_HOTELS_ACTION } from '../../store/hotels/index.js';

export function Hotels() {
  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(FETCH_HOTELS_ACTION(controller.signal));

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderContent={() => (
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 'bold',
              marginBottom: 2
            }}
          >
            Choose your{' '}
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
              hotel
            </Box>
          </Typography>
          <HotelsList />
        </Box>
      )}
      renderFooter={() => <Footer />}
    />
  );
}
