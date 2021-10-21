
import './App.css';
import * as React from 'react';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import MiddleArea from './components/MiddleArea';
import { Grid, makeStyles } from '@material-ui/core'



const useStyles = makeStyles((theme) => ({

  container: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor:"lightgrey",
  },
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  

}));



function App() {
  const classes = useStyles();

  return (
    <div className={classes.container} >

      <Grid container>
        <Grid item sm={1} xs={1} className={classes.left} >
          <LeftBar />
        </Grid>
        <Grid item sm={10} xs={10}>
          <MiddleArea />
        </Grid>
        <Grid item sm={1} xs={1} className={classes.right}>
          <RightBar />
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
