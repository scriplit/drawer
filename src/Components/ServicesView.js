import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Paper, Typography} from '@material-ui/core';


function ServicesView(props) {
    return (
        <div className={props.classes.root}>
            <Paper elevation={1} className={props.classes.paper}>
                <Typography variant="h5" component="h3">
                    This is the Services view.
                </Typography>
                <Typography component="p">
                    The Services view shows a list of services.
                </Typography>
            </Paper>
        </div>

    );
}

export default withStyles({
    root: {
        backgroundColor: 'green',
        padding: 10,
    },
    paper: {
        padding: 10,
        height: 500,
    }

})(ServicesView);