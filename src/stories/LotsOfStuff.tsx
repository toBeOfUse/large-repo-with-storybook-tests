import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  MenuItem,
  Menu,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  TextField,
  Grid,
  Container,
  Divider,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const LotsOfStuff = () => {
  const { register, handleSubmit } = useForm();
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Complex React Page
          </Typography>
          <Button color="inherit" onClick={handleMenuClick}>
            Dropdown
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
            <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer} data-testid="drawer">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <IconButton data-testid="close-drawer" onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
          <List>
            <ListItem component="li">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem component="li">
              <ListItemText primary="About" />
            </ListItem>
            <ListItem component="li">
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem component="li">
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Main Section with Form */}
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Complex Form Example
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                fullWidth
                {...register('firstName')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                fullWidth
                {...register('lastName')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                fullWidth
                type="email"
                {...register('email')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone Number"
                fullWidth
                type="tel"
                {...register('phoneNumber')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                fullWidth
                {...register('address')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="City"
                fullWidth
                {...register('city')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Postal Code"
                fullWidth
                {...register('postalCode')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Additional Comments"
                fullWidth
                multiline
                rows={4}
                {...register('comments')}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>

      {/* Footer */}
      <footer style={{ marginTop: '50px', padding: '20px', backgroundColor: '#f1f1f1' }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Quick Links</Typography>
              <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Follow Us</Typography>
              <Box sx={{ display: 'flex', gap: '10px' }}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Contact Us</Typography>
              <p>Email: info@complexpage.com</p>
              <p>Phone: +123 456 789</p>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
};

export default LotsOfStuff;
