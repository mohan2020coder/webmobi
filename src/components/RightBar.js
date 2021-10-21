import React from 'react'
import { Avatar, Container, makeStyles } from '@material-ui/core';
import Badge from '@mui/material/Badge';
import ChatIcon from '@mui/icons-material/Chat';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import clsx from 'clsx';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "#000",
    marginTop: theme.spacing(-1),
    position: "sticky",
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    top: 0,
    marginLeft: theme.spacing(1),
    border: "2px solid #ece7e7",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "2px solid #ece7e7",
      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    flexDirection: 'column',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(2),
      cursor: "pointer",
    },
    "&:hover": {
      color: '#a4508b',
      borderRadius: theme.spacing(1),
    },

  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  activeicon: {
    borderRadius: theme.spacing(1)
  },
}));

const theme1 = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});
function RightBar() {
  const classes = useStyles();
  return (

    <Container className={classes.container}>
      <ThemeProvider theme={theme1}>
        <div className={classes.item}>
        <Badge color="primary" badgeContent=" " variant="dot" overlap="circular" anchorOrigin={{vertical: 'bottom',horizontal: 'left',}}>
          <Avatar className={clsx(classes.icon, classes.activeicon)} />
        </Badge>
        </div>
          <div className={classes.item}>
            <Badge color="secondary" badgeContent=" " variant="dot" overlap="circular">
              <CircleNotificationsRoundedIcon />
            </Badge>
          </div>
          <div className={classes.item} >
            <Badge color="secondary" badgeContent=" " variant="dot" overlap="circular">
              <ChatIcon />
            </Badge>
          </div>
          <div className={classes.item}>
              <BuildCircleIcon />
          </div>
      </ThemeProvider>
    </Container>
  )
}

export default RightBar
