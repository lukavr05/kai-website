import React from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <AppBar 
      position='sticky' 
      color='primary'
      sx={{ top: 0, width:'100vw', left: 0 }}
    >
      <Toolbar>
        <Button color='inherit' href="/" >Home</Button>
        <Button color='inherit' href="/about">About</Button>
        <Button color='inherit' href="/music">Music</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
