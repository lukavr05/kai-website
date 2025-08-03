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
            <Box>
              <Typography variant="body1">
                My earliest inspiration in the world of music is my Father and his acoustic guitar. He also gave me my first taste of music media through cassette tapes in the red car listening to David Bowie’s “Rebel Rebel” and Qotsa on the way to nursery.

At 13 I decided to pick up the guitar and began to create and play. This was my first step.
At college myself and close friends made Tiny Plastic Babies; a punk indie band releasing the album everything in hindsight.

Moving on from Tiny Plastic Babies I have had a small part working with my best mate on some  Stone Compass songs. 

My biggest inspirations are Pink floyd and QOTSA

My Mother is an author and has inspired me to write some of my own music.

Outside of music I enjoy walks in nature with my family and my cocker spaniel Daisy. I also enjoy river fishing and reading fantasy novels. 

If I could tell you one thing about me it's that I want to help people bring their ideas into the world so that they can be shared. Music is about impacting other people and making them feel something
              </Typography>
            </Box>
          </Container>
      </Box>
    </>
  );
}

export default About;
