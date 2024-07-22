import { Footer, Header, PageLayout } from '../../components';
import { Box, Typography } from '@mui/material';

export function About() {
  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderContent={() => (
        <Box>
          <Typography variant="h1">About</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur, dolores ducimus facere fugit illo ipsum laborum libero
            magni nam nobis numquam sapiente, vero? At dolor esse iusto odio
            provident voluptatum.
          </Typography>
        </Box>
      )}
      renderFooter={() => <Footer />}
    />
  );
}
