import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Divider, Typography } from '@material-ui/core';

function LeftDrawer(props) {

    let setView = props.onSelect;
    let cs = props.currentSel;

    return (
        <div>

            <Drawer open={props.open} onClose={props.onClose}>
                <div className={props.classes.list}>
                    <Typography color="textSecondary" className={props.classes.drawer_info}>
                        {props.title + " v" + props.version}
                    </Typography>

                    <Divider />
                    <List>{props.drawerItems.map((obj, index) => (
                        <ListItem button
                            key={obj.text}
                            onClick={(event) => { setView(index); props.onClose() }}
                            selected={(index === cs)}
                        >
                            <ListItemIcon>{obj.icon}</ListItemIcon>
                            <ListItemText primary={obj.text} />
                        </ListItem>
                    ))}
                    </List>
                </div>
            </Drawer>

        </div>
    );
}


export default withStyles({
    list: {
        width: 250,
    },
    drawer_info: {
        padding: 20,
        height: 20
    }
})(LeftDrawer);
