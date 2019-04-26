import React, { Fragment } from 'react';
import ButtonAppBar from './ButtonAppBar';
import LeftDrawer from './LeftDrawer';
import  {useLeftDrawer, useMainView} from '../custom-hooks';

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
        </Fragment>
    );
}

export default Layout;