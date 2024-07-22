import { Box, Typography } from '@mui/material';
import { Footer, Header, PageLayout } from '../../components';

export function ErrorPage() {
  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderFooter={() => <Footer />}
      renderContent={() => (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            margin: '40% auto',
          }}
        >
          <Typography variant="h1" color="primary" sx={{ fontWeight: 800 }}>
            Oops!
          </Typography>
          <Typography paragraph={true}>
            Sorry, an unexpected error has occurred.
          </Typography>
        </Box>
      )}
    />
  );
}
