import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Box
} from '@mui/material'
import {
  Email,
  LinkedIn,
  Twitter,
  GitHub,
  Instagram,
  Facebook,
  KeyboardArrowDown
} from '@mui/icons-material';

function Navbar() {
  const [selected, setSelected] = useState(() => {
    return localStorage.getItem('selectedNav') || 'home';
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleSelect = (id) => {
    setSelected(id);
    localStorage.setItem('selectedNav', id)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
    handleClose();
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: <Email />,
      url: 'mailto:your.email@example.com'
    },
    {
      name: 'LinkedIn',
      icon: <LinkedIn />,
      url: 'https://linkedin.com/in/yourprofile'
    },
    {
      name: 'Instagram',
      icon: <Instagram />,
      url: 'https://instagram.com/stonecompassmusic'
    }
  ];

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
        <Box sx={{ flexGrow: 1 }}>
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
              href="/events"
              onClick={() => handleSelect('events')}
              sx={{
                fontWeight: selected === 'events' ? 'bold' : 'normal',
              }}
            >
              Events
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
          <Button 
              color='inherit' 
              href="/portfolio"
              onClick={() => handleSelect('portfolio')}
              sx={{
                fontWeight: selected === 'portfolio' ? 'bold' : 'normal',
              }}
            >
              Portfolio
          </Button>
        </Box>

        <Button
          color="inherit"
          onClick={handleClick}
          endIcon={<KeyboardArrowDown />}
        >
          Contact Me
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          sx={{
            '& .MuiPaper-root': {
              minWidth: 180,
              mt: 1
            }
          }}
        >
          {socialLinks.map((social) => (
            <MenuItem
              key={social.name}
              onClick={() => handleSocialClick(social.url)}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                {social.icon}
              </ListItemIcon>
              <ListItemText primary={social.name} />
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
