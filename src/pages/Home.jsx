import { Box, Typography, Container } from "@mui/material";
import React from "react";

function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: 8, // Account for fixed navbar
        pb: 6
      }}
    >
      <Container maxWidth="md">
        <Box>
          <Typography 
            variant="h1" 
            gutterBottom
            sx={{ 
              background: 'linear-gradient(45deg, #c93747 30%, #c97137 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold'
            }}
          >
            Kai Rogerson
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.8 }}>
            I'm a music producer with a passion for crafting unique, genre-blending sounds. 
            This portfolio showcases a curated selection of my original tracks, collaborations, 
            and production projects.
            <br /><br />
            Feel free to explore my work, check out my latest releases, and get in touch if 
            you'd like to collaborate.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
