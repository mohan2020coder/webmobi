import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ForumIcon from '@mui/icons-material/Forum';
import MySwitch from './MySwitch';
import ColorButton from './ColorButton'
import Divider from '@material-ui/core/Divider';
import Stack from '@mui/material/Stack';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';

const theme = createTheme({
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

const styles = {
    title: {
        fontSize: 14,
    },
    title1: {
        fontSize: 32,
        color: '#a4508b',
    },
    pos: {
        marginBottom: 12,
    },
    item: {
        width: "250px",
        padding: "5px 10px 10px 5px",
        "&:hover": {
            color: '#a4508b',
            borderLeft: '5px solid #a4508b',
        },
    },
    heading: {
        display: "flex",
        justifyContent: "space-between",
    },
    content1: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "-20px",

    },
    contentRight: {
        margin: "50px",
    },
};
function Settings(props) {
    const { classes } = props;
    return (
        <div>
             <CardContent className={classes.heading}>
                        <Stack direction="row" spacing={1} className={classes.title1}>
                            <ForumIcon />
                            <Typography >
                                Audience Q{'&'}A
                            </Typography>
                        </Stack>
                        <div>
                            <MySwitch />
                            <KeyboardArrowUpIcon />
                        </div>
                    </CardContent>
                    <Divider />
                    <CardContent className={classes.content1}>
                        <div>
                            <Typography variant="h6" component="div">
                                Moderation
                            </Typography>
                            <Typography variant="subtitle2" component="div">
                                Easily review all questions before they go live.
                            </Typography>
                        </div>
                        <div>
                            <MySwitch disp="True" />
                        </div>
                    </CardContent>
                    <CardContent className={classes.content1}>
                        <div>
                            <Typography variant="h6" component="div">
                                Labels
                            </Typography>
                            <Typography variant="subtitle2" component="div">
                                Categorize and filter questions
                            </Typography>
                        </div>
                        <div>
                            <MySwitch />
                        </div>
                    </CardContent>
                    <CardContent className={classes.content1}>
                        <div>
                            <Typography variant="h6" component="div">
                                Downvotes
                            </Typography>
                            <Typography variant="subtitle2" component="div">
                                Enable downvoting of questions
                            </Typography>
                        </div>
                        <div>
                            <MySwitch />
                        </div>
                    </CardContent>
                    <CardContent className={classes.content1}>
                        <div>
                            <Typography variant="h6" component="div">
                                Replies
                            </Typography>
                            <Typography variant="subtitle2" component="div">
                                Allow participants to reply to or comment on questions
                            </Typography>
                        </div>
                        <div>
                            <MySwitch />
                        </div>
                    </CardContent>
                    <CardContent className={classes.content1}>
                        <div>
                            <Typography variant="h6" component="div">
                                Anonymous questions
                            </Typography>
                            <Typography variant="subtitle2" component="div">
                                Let your participants send anonymous questions
                            </Typography>
                        </div>
                        <div>
                            <MySwitch />
                        </div>
                    </CardContent>
                    <CardContent className={classes.content1}>
                        <div>
                            <Typography variant="h6" component="div">
                                Maximum question length
                            </Typography>
                            <Typography variant="subtitle2" component="div">
                                Show number of votes instead of percentage
                            </Typography>
                            <Stack spacing={2} direction="row">
                            <ThemeProvider theme={theme}>
                                <Button variant="outlined" color="primary">160</Button>
                                <Button variant="outlined" color="primary">240</Button>
                            </ThemeProvider>
                                <ColorButton>300</ColorButton>
                            </Stack>
                        </div>
                        <div>
                            <MySwitch disp="True" />
                        </div>
                    </CardContent>
                    <CardContent className={classes.content1}>
                        <div>
                            <Typography variant="h6" component="div">
                                Close Questions
                            </Typography>
                            <Typography variant="subtitle2" component="div">
                                Prevent the participants from sending new questions
                                to your event
                            </Typography>
                        </div>
                        <div>
                            <MySwitch />
                        </div>
                    </CardContent>
        </div>
    )
}

Settings.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Settings);