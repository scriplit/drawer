import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Paper, Typography} from '@material-ui/core';


function EnvironmentsView(props) {
    return (
        <div className={props.classes.root}>
            <Paper elevation={1} className={props.classes.paper}>
                <Typography variant="h5" component="h3">
                    This is the Environments view.
                </Typography>
                <Typography component="p">
                    The Environments view shows an overview of the environments available.
                </Typography>
            </Paper>
        </div>

    );
}

export default withStyles({
    root: {
        backgroundColor: 'purple',
        padding: 10,
    },
    paper: {
        padding: 10,
        height: 500,
    }

})(EnvironmentsView);