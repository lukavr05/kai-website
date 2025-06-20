import { Box, Container, Typography } from "@mui/material";


function Events() {
  return (
    <>
      <Box
        sx = {{
          height: '100vh',
          display: 'flex',
          marginTop: '5%',
          marginLeft: '10%',
          marginRight: '10%',
        }}
        >
          <Container maxWidth="md">
            <Box>
              <Typography variant="h1" gutterBottom>
                Events
              </Typography>
            </Box>
          </Container>
      </Box>
    </>
  );
}

export default Events;
