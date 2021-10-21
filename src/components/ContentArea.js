
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import LockIcon from '@mui/icons-material/Lock';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ColorButton from './ColorButton'
import Settings from './Settings';
import clsx from 'clsx';

const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
    },
    card: {
        minWidth: 300,
        marginTop: 20,
        height: "85vh",
        width: "10vh",
        marginLeft: -50,
    },
    card1: {
        minWidth: 600,
        marginTop: 20,
        height: "85vh",
        width: "180vh",
        marginLeft: -10,
    },
    title: {
        fontSize: 14,
    },
    title1: {
        fontSize: 14,
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
        padding: "10px",
    },
    active:{
        color: '#a4508b',
        borderLeft: '5px solid #a4508b',
        width: "250px",
        padding: "5px 12px 10px 5px",
        backgroundColor:"#F9F9F9",
    },
};

function ContentArea(props) {
    const { classes } = props;

    return (
        <Container className={classes.container}>

            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Event Settings
                    </Typography>

                </CardContent>
                <Divider />
                <CardActions>
                    <List component="nav">
                        <ListItem button className={classes.item}>
                            <ListItemText primary="General" />
                        </ListItem>
                        <ListItem button className={classes.item}>
                            <ListItemText primary="Privacy" />
                        </ListItem>
                        <ListItem button className={clsx(classes.item, classes.active)}>
                            <ListItemText primary="Features" />
                        </ListItem>
                        <ListItem button className={classes.item}>
                            <ListItemText primary="Customizations" />
                        </ListItem>
                        <ListItem button className={classes.item}>
                            <ListItemText primary="Integration" />
                        </ListItem>
                        <ListItem button className={classes.item}>
                            <ListItemText primary="Session Settings" /> <LockIcon />
                        </ListItem>
                        <ListItem button className={classes.item}>
                            <ListItemText primary="My Plans" />
                        </ListItem>
                    </List>
                </CardActions>
            </Card>
            <Card className={classes.card1}>
                    <CardContent style={{ display: "flex", justifyContent: "flex-end" }}>
                        <HighlightOffIcon />
                    </CardContent>
                    <div style={{ maxHeight: 700, maxWidth:900, display:"flex",justifyContent:"center", overflow: 'auto'}}>

                        <Settings />
                    </div>
                    <CardContent style={{ display: "flex", justifyContent: "flex-end" }}>
                        <ColorButton>Save</ColorButton>
                    </CardContent>
            </Card>


        </Container>
    );
}

ContentArea.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentArea);