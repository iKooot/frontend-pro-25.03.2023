import { AppBar, Box, Container, Toolbar, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

export function PageLayout({
  renderHeader,
  renderFooter,
  renderContent,
  children,
}) {
  const miuTheme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        minHeight: '100vh',
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: grey[200],
          color: miuTheme.palette.text.primary,
        }}
        enableColorOnDark
      >
        <Toolbar component='header'>
          {typeof renderHeader === 'function' ? renderHeader() : renderHeader}
        </Toolbar>
      </AppBar>
      <Container sx={{ flex: '1 0 100%', height: 'auto' }}>
        <Box component="main">{renderContent ? renderContent() : children}</Box>
      </Container>
      <Box component="footer" sx={{ flex: '0 0 100%', height: 'auto', p: 5 }}>
        <Container>
          {typeof renderFooter === 'function' ? renderFooter() : renderFooter}
        </Container>
      </Box>
    </Box>
  );
}
