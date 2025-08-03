import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Chip, 
  Avatar,
  Divider,
  Paper
} from "@mui/material";
import { 
  MusicNote, 
  Pets, 
  MenuBook, 
  Nature, 
  Group 
} from "@mui/icons-material";

function About() {
  const inspirations = [
    { name: "Pink Floyd", genre: "Progressive Rock" },
    { name: "Queens of the Stone Age", genre: "Alternative Rock" },
    { name: "David Bowie", genre: "Art Rock" }
  ];

  const interests = [
    { icon: <Nature />, title: "Nature Walks", description: "Exploring outdoors with family and Daisy" },
    { icon: <MenuBook />, title: "Reading", description: "Fantasy novels and creative writing" },
    { icon: <MusicNote />, title: "River Fishing", description: "Peaceful moments by the water" },
    { icon: <Group />, title: "Collaboration", description: "Helping others bring their musical ideas to life" }
  ];

  return (
    <Box sx={{ minHeight: '100vh', py: 6 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h1" 
            sx={{ 
              mb: 3,
              background: 'linear-gradient(45deg, #c93747 30%, #c97137 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold'
            }}
          >
            About Me
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Main Story Section */}
          <Grid item xs={12} md={8}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 4, 
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(201, 55, 71, 0.02) 0%, rgba(201, 113, 55, 0.02) 100%)'
              }}
            >
              <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                My Musical Journey
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  My earliest inspiration in the world of music is my Father and his acoustic guitar. 
                  He gave me my first taste of music media through cassette tapes in the red car, 
                  listening to David Bowie's "Rebel Rebel" and Queens of the Stone Age on the way to nursery.
                </Typography>
                
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  At 13, I decided to pick up the guitar and began to create and play. This was my first step. 
                  At college, myself and close friends formed <strong>Tiny Plastic Babies</strong> - a punk indie band 
                  that released the album "Everything in Hindsight."
                </Typography>
                
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  Moving on from Tiny Plastic Babies, I've had a small part working with my best mate on some 
                  Stone Compass songs. My Mother, an author, has also inspired me to write some of my own music.
                </Typography>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
                Beyond Music
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                Outside of music, I enjoy walks in nature with my family and my cocker spaniel Daisy. 
                I also love river fishing and reading fantasy novels. If I could tell you one thing about me, 
                it's that I want to help people bring their ideas into the world so that they can be shared.
              </Typography>
            </Paper>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            {/* Musical Inspirations */}
            <Card sx={{ mb: 3, borderRadius: 3, width: "100%" }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                  Musical Inspirations
                </Typography>
                {inspirations.map((artist, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {artist.name}
                    </Typography>
                    <Chip 
                      label={artist.genre} 
                      size="small" 
                      color="primary" 
                      variant="outlined"
                    />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
