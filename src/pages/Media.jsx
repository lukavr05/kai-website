import { 
  Box, 
  Container, 
  Typography, 
  ImageList, 
  ImageListItem,
  useMediaQuery,
  useTheme,
  Card,
  CardMedia,
  IconButton,
  Dialog,
  DialogContent
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { useState } from "react";

function Media() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample media items - replace with your actual media
  const mediaItems = [
    {
      img: 'images/kai-1.jpeg',
      title: '',
      rows: 2,
      cols: 1,
    },
    {
      img: 'images/sc-live-1.jpeg',
      title: '',
      rows: 3,
      cols: 1,
    },
    {
      img: 'images/sc-live-2.jpeg',
      title: '',
      rows: 2,
      cols: 1,
    },
    {
      img: 'images/kai-ep-1.jpeg',
      title: '',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/sc-live-3.jpeg',
      title: '',
      rows: 1,
      cols: 2,
    },
    {
      img: 'images/misc-1.jpeg',
      title: '',
      rows: 3,
      cols: 1,
    },
    {
      img: 'images/misc-2.jpeg',
      title: '',
      rows: 2,
      cols: 1,
    },
    {
      img: 'images/kai-ep-2.jpeg',
      title: '',
      rows: 2,
      cols: 1,
    },
    {
      img: 'images/kai-ep-3.jpeg',
      title: '',
      rows: 2,
      cols: 3,
    },
  ];

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  const handleCloseDialog = () => {
    setSelectedImage(null);
  };

  return (
    <Box sx={{ minHeight: '100vh', py: 8, backgroundColor: 'rgba(201, 113, 55, 0.02)' }}>
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
            Media
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.secondary',
              fontFamily: '"Playfair Display", serif',
              mb: 4
            }}
          >
            Behind the scenes, live performances, and studio moments
          </Typography>
        </Box>

        {/* Masonry Image Gallery */}
        <ImageList 
          variant="masonry" 
          cols={isMobile ? 2 : 4} 
          gap={16}
          sx={{
            '& .MuiImageListItem-root': {
              borderRadius: 2,
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: theme.shadows[8],
              }
            }
          }}
        >
          {mediaItems.map((item, index) => (
            <ImageListItem 
              key={index} 
              cols={item.cols || 1} 
              rows={item.rows || 1}
              onClick={() => handleImageClick(item)}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{
                  borderRadius: 8,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>

        {/* Image Preview Dialog */}
        <Dialog 
          open={!!selectedImage} 
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
            {selectedImage && (
              <Card sx={{ borderRadius: 2, overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  image={selectedImage.img}
                  alt={selectedImage.title}
                  sx={{
                    maxHeight: '80vh',
                    objectFit: 'contain',
                    width: '100%'
                  }}
                />
                <Box sx={{ p: 2, backgroundColor: 'background.paper' }}>
                  <Typography variant="h6" sx={{ color: 'primary.main' }}>
                    {selectedImage.title}
                  </Typography>
                </Box>
              </Card>
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
}

export default Media;
