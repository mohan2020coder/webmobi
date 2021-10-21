import React from 'react'
import { Container, makeStyles } from '@material-ui/core';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import {Typography} from '@material-ui/core'
import GroupIcon from '@mui/icons-material/Group';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DraftsIcon from '@mui/icons-material/Drafts';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    container: {
      height: "100vh",
      color: "#000",
      marginTop:theme.spacing(-1),
      marginLeft:theme.spacing(-1),
      position: "sticky",
      border: "2px solid #ece7e7",
      boxShadow:"0 3px 10px rgb(0 0 0 / 0.2)",
      top: 0,
      [theme.breakpoints.up("sm")]: {
        backgroundColor: "white",
        color: "#555",
        border: "2px solid #ece7e7",
        boxShadow:"0 3px 10px rgb(0 0 0 / 0.2)",
      },
    },
    item: {
      display: "flex",
      alignItems: "center",
      flexDirection:'column',
      marginBottom: theme.spacing(3),
      [theme.breakpoints.up("sm")]: {
        marginBottom: theme.spacing(5),
        cursor: "pointer",
      },
      "&:hover": {
        color: '#a4508b',
        padding:theme.spacing(2),
        border: '2px solid #a4508b',
        borderRadius:theme.spacing(1),
      },

    },
    icon: {
      marginRight: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
        fontSize: "18px",
      },
    },
    text: {
      fontWeight: 500,
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    text1: {
        fontWeight: 100,
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      },
    iconbig:{
        margin: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
        fontSize: "30px",
      },
    },
    active:{
        color:'#fff',
        backgroundColor: '#a4508b',
        backgroundImage: 'linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)',
        borderRadius:theme.spacing(1),
        padding: theme.spacing(2),
        paddingLeft: theme.spacing(9),
        paddingRight: theme.spacing(9),
        marginLeft: theme.spacing(-3.2),
        [theme.breakpoints.down("sm")]: {
            padding:0,
            color:'#a4508b',
            fontSize: "30px",
            backgroundColor:'#fff',
          },
    },
    activeicon:{
        color:'#fff',
        backgroundColor: '#a4508b',
        padding:theme.spacing(1),
        borderRadius:theme.spacing(1)
    },
    colorTheme:{
        color:'#a4508b',
    },
    activeBlock:{
      color: '#a4508b',
      border: '2px solid #a4508b',
      borderRadius:theme.spacing(1),
      padding:theme.spacing(2)
    }
  }));

function LeftBar() {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
                 <div className={clsx(classes.item, classes.active)} id="active">
                    <GroupWorkIcon className={classes.iconbig} />
                    <Typography className={classes.text1}>webMoBI</Typography>
                    <Typography className={classes.text1}>webMoBI 3D Event</Typography>
                    <Typography className={classes.text1}>2020</Typography>
                </div>
                <div className={classes.item} id="hover">
                    <EqualizerIcon className={clsx(classes.icon, classes.activeicon)} />
                    <Typography className={clsx(classes.text, classes.colorTheme)}>Event</Typography>
                </div>
                <div className={clsx(classes.item, classes.activeBlock)}>
                    <GroupIcon className={classes.icon} />
                    <Typography className={classes.text}>Teams</Typography>
                </div>
                <div className={classes.item} >
                    <AnalyticsIcon className={classes.icon} />
                    <Typography className={classes.text}>Analytics</Typography>
                </div>
                <div className={classes.item}>
                    <DraftsIcon className={classes.icon} />
                    <Typography className={classes.text}>Results</Typography>
                </div>
        </Container>
    )
}

export default LeftBar
