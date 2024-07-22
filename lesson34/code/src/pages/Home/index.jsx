import { Footer, Header, PageLayout } from '../../components';
import { Box, Typography, useTheme } from '@mui/material';

export function HomePage() {
  const theme = useTheme();
  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderContent={() => (
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 'bold',
            }}
          >
            Travel With{' '}
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
              Booking
            </Box>
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            architecto at, ea eius ex harum, libero minus, nam nihil nisi
            sapiente vel voluptatum. Aperiam, ducimus, nihil. Consequuntur ea
            error necessitatibus!
          </Typography>
        </Box>
      )}
      renderFooter={() => <Footer />}
    />
  );
}
