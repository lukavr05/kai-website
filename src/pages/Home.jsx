import { Box, Typography, Container, Button, Card, CardContent, Chip, Grid } from "@mui/material";
import { PlayArrow, MusicNote, Album, Headphones } from "@mui/icons-material";
import React, { useState, useEffect } from "react";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTrack((prev) => (prev + 1) % featuredTracks.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: 8,
        pb: 8,
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(201, 55, 71, 0.05) 0%, rgba(201, 113, 55, 0.05) 50%, rgba(139, 69, 19, 0.05) 100%)'
      }}
    >
      {/* Animated Background Elements */}
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 1s ease-out'
              }}
            >
              <Typography 
                variant="h1" 
                gutterBottom
                sx={{ 
                  background: 'linear-gradient(45deg, #c93747 30%, #c97137 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                  mb: 2,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: 0,
                    width: '100px',
                    height: '4px',
                    background: 'linear-gradient(45deg, #c93747, #c97137)',
                    borderRadius: '2px'
                  }
                }}
              >
                Kai Rogerson
              </Typography>
              
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'text.secondary',
                  fontFamily: '"Playfair Display", serif',
                  fontStyle: 'italic',
                  mb: 3,
                  opacity: 0.8
                }}
              >
                Music Producer & Collaborative Artist
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: '1.2rem', 
                  lineHeight: 1.8,
                  mb: 4,
                  maxWidth: '600px'
                }}
              >
                I'm a music producer with a passion for crafting unique, genre-blending sounds. 
                This portfolio showcases a curated selection of my original tracks, collaborations, 
                and production projects.
                <br /><br />
                Feel free to explore my work, check out my latest releases, and get in touch if 
                you'd like to collaborate.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<PlayArrow />}
                  onClick={scrollToPortfolio}
                  sx={{
                    background: 'linear-gradient(45deg, #c93747 30%, #c97137 90%)',
                    boxShadow: 'none',
                    borderRadius: 3,
                    px: 4,
                    py: 1.5,
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #b8324a 30%, #b8673a 90%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(201, 55, 71, 0.3)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  Explore My Work
                </Button>
              </Box>

            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
