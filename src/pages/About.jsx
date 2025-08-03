import { 
  Box, 
  Typography, 
  Container, 
  Chip, 
  Divider
} from "@mui/material";

function About() {
  const inspirations = [
    { name: "Pink Floyd", genre: "Progressive Rock" },
    { name: "Queens of the Stone Age", genre: "Alternative Rock" },
    { name: "David Bowie", genre: "Art Rock" }
  ];

  return (
    <Box sx={{ minHeight: '100vh', py: 6 }}>
      <Container maxWidth="md">
        {/* Header */}
        <Box sx={{ mb: 6 }}>
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
            About
          </Typography>
        </Box>

        {/* Main Story */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, mb: 3 }}>
            My earliest inspiration in the world of music is my Father and his acoustic guitar. 
            He also gave me my first taste of music media through cassette tapes in the red car 
            listening to David Bowie's "Rebel Rebel" and QOTSA on the way to nursery.
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, mb: 3 }}>
            At 13 I decided to pick up the guitar and began to create and play. This was my first step.
            At college myself and close friends made <strong>Tiny Plastic Babies</strong>; a punk indie band 
            releasing the album "Everything in Hindsight."
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, mb: 3 }}>
            Moving on from Tiny Plastic Babies I have had a small part working with my best mate on some  
            Stone Compass songs. My Mother is an author and has inspired me to write some of my own music.
          </Typography>

          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            Outside of music I enjoy walks in nature with my family and my cocker spaniel Daisy. 
            I also enjoy river fishing and reading fantasy novels. If I could tell you one thing about me 
            it's that I want to help people bring their ideas into the world so that they can be shared.
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Musical Inspirations */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
            Musical Inspirations
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {inspirations.map((artist, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {artist.name}
                </Typography>
                <Chip 
                  label={artist.genre} 
                  color="primary" 
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
