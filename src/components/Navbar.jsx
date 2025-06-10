import { useState } from 'react';
import { AppBar, Toolbar, Button } from '@mui/material'

function Navbar() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (id) => {
    setSelected(id);
  }

  return (
    <AppBar 
      position='sticky' 
      color='primary'
      sx={{ top: 0, width:'100vw', left: 0 }}
    >
      <Toolbar
        sx={{ gap: 2,
            '& button': {
              textTransform: 'none',
              borderRadius: '8px',
              boxShadow: 'none', 
              '&:hover': {
                boxShadow: 'none', 
              },
            },
          }}
      >
        <Button 
            color='inherit' 
            href="/"
            onClick={() => handleSelect('home')}
            sx={{
              fontWeight: selected === 'home' ? 'bold' : 'normal',
            }}
          >
            Home
        </Button>
        <Button 
            color='inherit' 
            href="/about"
            onClick={() => handleSelect('about')}
            sx={{
              fontWeight: selected === 'about' ? 'bold' : 'normal',
            }}
          >
            About
        </Button>
        <Button 
            color='inherit' 
            href="/music"
            onClick={() => handleSelect('music')}
            sx={{
              fontWeight: selected === 'music' ? 'bold' : 'normal',
            }}
          >
            Music
        </Button>
        <Button 
            color='inherit' 
            href="/media"
            onClick={() => handleSelect('media')}
            sx={{
              fontWeight: selected === 'media' ? 'bold' : 'normal',
            }}
          >
            Media
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
