import { Box, Container, Typography } from "@mui/material";


function Portfolio() {
  return (
    <>
      <Box
        sx={{ 
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
              Portfolio
            </Typography>
          </Box>
          <Box>
            <Typography>
              Hann He Vemm is a 3 song Guitar oriented Instrumental metal E.P with a focus heavy guitar riffs and epic solos. This was a result of collaboration between myself, yanniguitarist and composedby.zola.
Yanniguitarist led the project and creative ideas, playing the majority of the guitar within the tracks.
Composedby.zola worked on the song structure and the drums.

Within this project I worked as the producer and bassist. 
When recording, mixing and mastering I drew inspiration from bands such as Metallica and Slipknot using some of their tracks as reference. 

            </Typography>
          </Box>
          <Box>
            <Typography>
              The nokken 



This was a solo project with the goal to create the sound track for a TV series around the Nokken from Norse Folklore. The Nokken is a shapeshifting waterspirit that lures people, primarily women and children into lakes and rivers through enchanting songs where they are drowned. The nokken may often appear as an attractive person to entice their victim.
Through my music I have attempted to show the creation of the nokkens enticing lure and the moment in which someone realises that they have been caught in a trap, too late to escape.
I have created music for the beginning and ending of each episode with the idea being that the pilot episode can have the full song to set the scene and that future episodes will have shortened versions. 

The aim was to create memorable music using traditional nordic folk instrumentation. With running motifs keeping thoughts of the hypothetical show running in your mind long after watching and to create association between the song and the show. The idea being that if this was heard in and advert you would recognise it.

The most enjoyable part of this project was the necessity of creativity to find solutions. A good example being the use of drum sticks as replacement for percussive bone instrumentation.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Portfolio;
