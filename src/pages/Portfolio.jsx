import { 
  Box, 
  Container, 
  Typography, 
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Paper
} from "@mui/material";
import { 
  PlayArrow, 
  Close as CloseIcon,
  Album,
  MusicNote,
  Movie
} from "@mui/icons-material";
import { useState } from "react";

function Portfolio() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Portfolio projects data
  const projects = [
    {
      id: 'hann-he-vemm',
      title: 'Hann He Vemm',
      subtitle: '3-song Guitar Instrumental Metal E.P',
      icon: <Album />,
      color: '#c93747',
      description: `Hann He Vemm is a 3 song Guitar oriented Instrumental metal E.P with a focus on heavy guitar riffs and epic solos. This was a result of collaboration between myself, yanniguitarist and composedby.zola.

Yanniguitarist led the project and creative ideas, playing the majority of the guitar within the tracks. Composedby.zola worked on the song structure and the drums.

Within this project I worked as the producer and bassist. When recording, mixing and mastering I drew inspiration from bands such as Metallica and Slipknot using some of their tracks as reference.`,
      videos: [
        {
          id: 'DMuco8bgFTw', // Replace with actual YouTube video IDs
          title: 'ElijaMM',
          description: ''
        },
        {
          id: 'PZWhcxabK6c',
          title: 'The 9th Sin',
          description: ''
        },
        {
          id: 'HaDavI3y8xM',
          title: 'Vemm 3:19',
          description: ''
        }
      ],
      photos: [
      ],
      tags: ['Metal', 'Instrumental', 'Collaboration', 'Producer', 'Bassist']
    },
    {
      id: 'the-nokken',
      title: 'The Nokken',
      subtitle: 'TV Series Soundtrack - Norse Folklore',
      icon: <Movie />,
      color: '#c97137',
      description: `This was a solo project with the goal to create the soundtrack for a TV series around the Nokken from Norse Folklore. The Nokken is a shapeshifting waterspirit that lures people, primarily women and children into lakes and rivers through enchanting songs where they are drowned. The nokken may often appear as an attractive person to entice their victim.

Through my music I have attempted to show the creation of the nokkens enticing lure and the moment in which someone realises that they have been caught in a trap, too late to escape.

I have created music for the beginning and ending of each episode with the idea being that the pilot episode can have the full song to set the scene and that future episodes will have shortened versions.

The aim was to create memorable music using traditional nordic folk instrumentation. With running motifs keeping thoughts of the hypothetical show running in your mind long after watching and to create association between the song and the show. The idea being that if this was heard in an advert you would recognise it.

The most enjoyable part of this project was the necessity of creativity to find alternatives to traditional instrumentation. A good example being the use of drum sticks as replacement for percussive bone instrumentation.`,
      videos: [
        {
          id: 'gaHH0gnre5I',
          title: 'The Nokken Intro',
          description: ''
        },
        {
          id: '2_4Xdjz-za8',
          title: 'The Nokken Outro',
          description: ''
        }
      ],
      photos: [
      ],
      tags: ['Soundtrack', 'Nordic Folk', 'Solo Project', 'Film Music', 'Creative Process']
    },
    {
      id: 'stone-compass',
      title: 'Stone Compass',
      subtitle: 'Collaborative Live Performance',
      icon: <MusicNote />,
      color: '#8b4513',
      description: `Stone Compass represents my collaborative work with my best mate, creating atmospheric indie rock that blends various influences. These live performances showcase our chemistry as musicians and our ability to connect with audiences through our shared musical vision.`,
      videos: [
        {
          id: 'WoPssh0v0yM',
          title: 'Stone Compass - Live Performance',
          description: 'Full live set showcasing our collaborative sound'
        }
      ],
      photos: [
        'images/sc-live-1.jpeg',
        'images/sc-live-2.jpeg',
        'images/sc-live-3.jpeg',
        'images/kai-1.jpeg'
      ],
      tags: ['Live Performance', 'Collaboration', 'Indie Rock', 'Atmospheric']
    }
  ];

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleCloseDialog = () => {
    setSelectedVideo(null);
  };

  const renderVideoThumbnail = (video, sectionColor) => (
    <Card 
      key={video.id}
      sx={{ 
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: theme.shadows[8],
        }
      }}
      onClick={() => handleVideoClick(video)}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="200"
          image={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
          alt={video.title}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '50%',
            p: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <PlayArrow sx={{ color: 'white', fontSize: 40 }} />
        </Box>
      </Box>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 1, color: sectionColor }}>
          {video.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {video.description}
        </Typography>
      </CardContent>
    </Card>
  );

  const renderPhotoGallery = (photos) => (
    <ImageList 
      variant="masonry" 
      cols={isMobile ? 2 : 3} 
      gap={8}
      sx={{ mt: 2 }}
    >
      {photos.map((photo, index) => (
        <ImageListItem key={index}>
          <img
            src={photo}
            alt={`Project image ${index + 1}`}
            loading="lazy"
            style={{
              borderRadius: 8,
              width: '100%',
              height: 'auto'
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );

  return (
    <Box sx={{ minHeight: '100vh', py: 6 }}>
      <Container maxWidth="lg">
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
            Portfolio
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.secondary',
              fontFamily: '"Playfair Display", serif',
              mb: 4
            }}
          >
            A showcase of my musical projects, collaborations, and creative journey
          </Typography>
        </Box>

        {/* Portfolio Projects */}
        {projects.map((project, projectIndex) => (
          <Box key={project.id} sx={{ mb: 8 }}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 4, 
                borderRadius: 3,
                background: `linear-gradient(135deg, ${project.color}08 0%, ${project.color}04 100%)`
              }}
            >
              {/* Project Header */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box 
                  sx={{ 
                    mr: 2, 
                    p: 1, 
                    borderRadius: 2, 
                    backgroundColor: project.color,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {project.icon}
                </Box>
                <Box>
                  <Typography variant="h3" sx={{ color: project.color, fontWeight: 'bold' }}>
                    {project.title}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {project.subtitle}
                  </Typography>
                </Box>
              </Box>

              {/* Project Tags */}
              <Box sx={{ mb: 3 }}>
                {project.tags.map((tag, index) => (
                  <Chip 
                    key={index}
                    label={tag} 
                    size="small" 
                    sx={{ 
                      mr: 1, 
                      mb: 1,
                      backgroundColor: project.color,
                      color: 'white',
                      fontWeight: 'bold'
                    }} 
                  />
                ))}
              </Box>

              {/* Project Description */}
              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  lineHeight: 1.8, 
                  mb: 4,
                  whiteSpace: 'pre-line'
                }}
              >
                {project.description}
              </Typography>

              <Divider sx={{ my: 3 }} />

              {/* Videos Section */}
              <Typography variant="h5" sx={{ mb: 3, color: project.color }}>
                Videos
              </Typography>
              <Grid container spacing={3} sx={{ mb: 4 }}>
                {project.videos.map((video, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    {renderVideoThumbnail(video, project.color)}
                  </Grid>
                ))}
              </Grid>

              <Divider sx={{ my: 3 }} />

              {/* Photos Section */}
              <Typography variant="h5" sx={{ mb: 2, color: project.color }}>
                Photos
              </Typography>
              {renderPhotoGallery(project.photos)}

            </Paper>
          </Box>
        ))}

        {/* Video Player Dialog */}
        <Dialog 
          open={!!selectedVideo} 
          onClose={handleCloseDialog}
          maxWidth="lg"
          fullWidth
          sx={{
            '& .MuiDialog-paper': {
              backgroundColor: 'transparent',
              boxShadow: 'none',
            }
          }}
        >
          <DialogContent sx={{ p: 2, position: 'relative', backgroundColor: 'transparent' }}>
            <IconButton
              onClick={handleCloseDialog}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                zIndex: 1,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                }
              }}
            >
              <CloseIcon />
            </IconButton>
            {selectedVideo && (
              <Card sx={{ borderRadius: 2, overflow: 'hidden' }}>
                <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%'
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
                    {selectedVideo.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {selectedVideo.description}
                  </Typography>
                </CardContent>
              </Card>
            )}
          </DialogContent>
        </Dialog>

      </Container>
    </Box>
  );
}

export default Portfolio;
