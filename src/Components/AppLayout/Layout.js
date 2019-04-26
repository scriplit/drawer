import React, { Fragment } from 'react';
import ButtonAppBar from './ButtonAppBar';
import LeftDrawer from './LeftDrawer';
import { useLeftDrawer, useMainView } from '../custom-hooks';
import { Route } from "react-router-dom";

function Layout(props) {

    let [drawerOpened, openDrawerCallback, closeDrawerCallback] = useLeftDrawer();
    let [currentViewIndex, setViewIndex] = useMainView();

    return (
        <Fragment>
            <ButtonAppBar onMenuClick={openDrawerCallback} title={props.title}/>
            <LeftDrawer open={drawerOpened}
                        onClose={closeDrawerCallback}
                        drawerItems={props.views}
                        onSelect={setViewIndex}
                        currentSel={currentViewIndex}
                        title={props.title}
                        version={props.version} />
            <div>
                {props.views[currentViewIndex].content}
            </div>
            {props.views.map((view,index) => (
                <Route path={view.url} render={()=>{setViewIndex(index)}} key={'r' + index} />
            ))}
        </Fragment>
    );
}

export default Layout;