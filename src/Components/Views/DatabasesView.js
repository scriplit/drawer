import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Paper, Typography} from '@material-ui/core';


function DatabasesView(props) {
    return (
        <div className={props.classes.root}>
            <Paper elevation={1} className={props.classes.paper}>
                <Typography variant="h5" component="h3">
                    This is the Databases view.
                </Typography>
                <Typography component="p">
                    The Databases view shows details about databases.
                </Typography>
            </Paper>
        </div>

    );
}

export default withStyles({
    root: {
        backgroundColor: 'orange',
        padding: 10,
    },
    paper: {
        padding: 10,
        height: 500,
    }

})(DatabasesView);