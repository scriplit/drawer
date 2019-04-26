import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Paper, Typography} from '@material-ui/core';


function HomeView(props) {
    return (
        <div className={props.classes.root}>
            <Paper elevation={1} className={props.classes.paper}>
                <Typography variant="h5" component="h3">
                    This is the home view.
                </Typography>
                <Typography component="p">
                    The home view shows common shortcuts to apps and services.
                </Typography>
            </Paper>
        </div>

    );
}

export default withStyles({
    root: {
        backgroundColor: 'red',
        padding: 10,
    },
    paper: {
        padding: 10,
        height: 500,
    }

})(HomeView);