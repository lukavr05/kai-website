import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const open = Boolean(anchorEl);
  const TikTok = () =>
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>

  // Determine selected nav based on current route
  const getSelectedNav = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/about') return 'about';
    if (path === '/events') return 'events';
    if (path === '/media') return 'media';
    if (path === '/portfolio') return 'portfolio';
    return 'home';
  };

  const selected = getSelectedNav();

  // check if browser is in fullscreen mode
  useEffect(() => {
    const checkFullscreen = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', checkFullscreen);
    return () => document.removeEventListener('fullscreenchange', checkFullscreen);
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
      icon: <TikTok />,
      url: 'https://tiktok.com/@kai_rogerson24'
    }
  ];

  const navigationItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'events', label: 'Events', href: '/events' },
    { id: 'media', label: 'Media', href: '/media' },
    { id: 'portfolio', label: 'Portfolio', href: '/portfolio' }
  ];

  const renderNavigationButtons = () => (
    <>
      {navigationItems.map((item) => (
        <Button
          key={item.id}
          component={Link}
          to={item.href}
          color='inherit'
          sx={{
            fontWeight: selected === item.id ? 'bold' : 'normal',
            height: '100%',
            borderRadius: 0,
            minHeight: '64px',
            px: 2,
            textDecoration: 'none',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
            ...(selected === item.id && {
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
              component={Link}
              to={item.href}
              onClick={handleDrawerClose}
              sx={{
                fontWeight: selected === item.id ? 'bold' : 'normal',
                backgroundColor: selected === item.id ? 'rgba(201, 55, 71, 0.1)' : 'transparent',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(201, 55, 71, 0.05)',
                }
              }}
            >
              <ListItemText 
                primary={item.label}
                sx={{
                  '& .MuiTypography-root': {
                    fontWeight: selected === item.id ? 'bold' : 'normal',
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
        position='sticky' 
        color='primary'
        sx={{ top: 0, width:'100vw', left: 0 }}
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
