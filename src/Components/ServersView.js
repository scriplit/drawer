import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Paper, Typography} from '@material-ui/core';


function ServersView(props) {
    return (
        <div className={props.classes.root}>
            <Paper elevation={1} className={props.classes.paper}>
                <Typography variant="h5" component="h3">
                    This is the Servers view.
                </Typography>
                <Typography component="p">
                    The Servers view shows a list of servers.
                </Typography>
            </Paper>
        </div>

    );
}

export default withStyles({
    root: {
        backgroundColor: 'yellow',
        padding: 10,
    },
    paper: {
        padding: 10,
        height: 500,
    }

})(ServersView);