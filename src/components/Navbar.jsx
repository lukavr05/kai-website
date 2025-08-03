import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  IconButton,
  Typography,
  Divider
} from '@mui/material';
import {
  Email,
  Instagram,
  YouTube,
  KeyboardArrowDown,
  Menu as MenuIcon,
  Close as CloseIcon
} from '@mui/icons-material';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const open = Boolean(anchorEl);

  // check if browser is in fullscreen mode
  useEffect(() => {
    const checkFullscreen = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', checkFullscreen);
    return () => document.removeEventListener('fullscreenchange', checkFullscreen);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'media', 'portfolio'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerClose = () => {
    setDrawerOpen(false); 
  };

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

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    handleDrawerClose();
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: <Email />,
      url: 'mailto:rogersonk2004@gmail.com'
    },
    {
      name: 'Instagram',
      icon: <Instagram />,
      url: 'https://instagram.com/kai_rogerson'
    },
    {
      name: 'YouTube',
      icon: <YouTube />,
      url: 'https://youtube.com/@Kai.Rogerson'
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@kai_rogerson24'
    }
  ];

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'media', label: 'Media' },
    { id: 'portfolio', label: 'Portfolio' }
  ];

  const renderNavigationButtons = () => (
    <>
      {navigationItems.map((item) => (
        <Button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          color='inherit'
          sx={{
            fontWeight: activeSection === item.id ? 'bold' : 'normal',
            height: '100%',
            borderRadius: 0,
            minHeight: '64px',
            px: 2,
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
            ...(activeSection === item.id && {
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderBottom: '3px solid white',
            })
          }}
        >
          {item.label}
        </Button>
      ))}
    </>
  );

  const renderDrawerContent = () => (
    <Box sx={{ width: 280, height: '100%' }}>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        p: 2,
        borderBottom: 1,
        borderColor: 'divider'
      }}>
        <Typography variant="h6" component="div">
          Navigation
        </Typography>
        <IconButton onClick={toggleDrawer}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              onClick={() => scrollToSection(item.id)}
              sx={{
                fontWeight: activeSection === item.id ? 'bold' : 'normal',
                backgroundColor: activeSection === item.id ? 'rgba(201, 55, 71, 0.1)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(201, 55, 71, 0.05)',
                }
              }}
            >
              <ListItemText 
                primary={item.label}
                sx={{
                  '& .MuiTypography-root': {
                    fontWeight: activeSection === item.id ? 'bold' : 'normal',
                    color: 'text.secondary'
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      <Divider sx={{ my: 2 }} />
      
      <Box sx={{ px: 2 }}>
        <Typography variant="subtitle2" sx={{ mb: 1, color: 'text.secondary' }}>
          Contact Me
        </Typography>
        <List dense>
          {socialLinks.map((social) => (
            <ListItem key={social.name} disablePadding>
              <ListItemButton
                onClick={() => handleSocialClick(social.url)}
                sx={{
                  borderRadius: 1,
                  color: 'text.secondary',
                  '&:hover': {
                    backgroundColor: 'rgba(201, 55, 71, 0.05)',
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: 36 }}>
                  {social.icon}
                </ListItemIcon>
                <ListItemText primary={social.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar 
        position='fixed' 
        color='primary'
        sx={{ top: 0, width:'100vw', left: 0, zIndex: 1300 }}
      >
        <Toolbar sx={{ gap: 2 }}>
          {!isFullscreen && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={toggleDrawer}
              sx={{ mr: 2, display: { lg: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ 
              display: isFullscreen ? 'block' : { xs: 'none', lg: 'block' }
            }}>
              {renderNavigationButtons()}
            </Box>
          </Box>

          <Button
            color="inherit"
            onClick={handleClick}
            endIcon={<KeyboardArrowDown />}
            sx={{
              height: "100%",
              borderRadius: 0,
              minHeight: "64px",
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
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

      <Drawer
        anchor="left"
        open={drawerOpen && !isFullscreen}
        onClose={toggleDrawer}
        sx={{
          display: isFullscreen ? 'none' : { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
          },
        }}
      >
        {renderDrawerContent()}
      </Drawer>
    </>
  );
}

export default Navbar;
