import { Box, Typography, Container } from "@mui/material";


import React from "react";

function Home() {
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
                Welcome
              </Typography>
              <Typography variant="body1">
                  I'm a music producer with a passion for crafting unique, genre-blending sounds. This portfolio showcases a curated selection of my original tracks, collaborations, and production projects. Whether you're looking for atmospheric soundscapes, hard-hitting beats, or custom compositions, you'll find a bit of everything here. 
        
                Feel free to explore my work, check out my latest releases, and get in touch if you'd like to collaborate or license music.
              </Typography>
            </Box>
          </Container>
        </Box>
    </>
  );
}

export default Home;
