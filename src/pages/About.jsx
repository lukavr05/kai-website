import { Box, Typography, Container } from "@mui/material";


function About() {
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
                About
              </Typography>
            </Box>
          </Container>
      </Box>
    </>
  );
}

export default About;
