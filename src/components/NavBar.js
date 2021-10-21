import { makeStyles } from '@material-ui/core';
import * as React from 'react';
import {AppBar} from '@material-ui/core';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';


const useStyles = makeStyles({
  header: {
    marginTop:"-5px",
    backgroundColor: "white",
    color: "black",
    boxShadow: "1px"
  },
  btn:{
    border:"1px solid black",
  },
});
function NavBar() {
  const classes = useStyles();
    return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <Button color="inherit"  variant="outlined" className={classes.btn}>Preview on: <IconButton><PhoneAndroidIcon /></IconButton>
          <IconButton><DesktopWindowsIcon /></IconButton> </Button>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default NavBar
