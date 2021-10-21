import React from 'react'
import NavBar from './NavBar'
import ContentArea from './ContentArea';

/*

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  content:{
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }

  }));
  */
function MiddleArea() {
    return (
        <div>
            <NavBar />
            <ContentArea/>
            {/*<ContentArea/>*/}
        </div>
    )
}

export default MiddleArea
