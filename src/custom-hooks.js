import {useState} from 'react';

export function useLeftDrawer() {
    const [drawerOpened, setDrawerOpened] = useState(false);

    function openDrawerCallback() {
        return setDrawerOpened(true);
    }
    function closeDrawerCallback() {
        return setDrawerOpened(false);
    }

    return [drawerOpened, openDrawerCallback, closeDrawerCallback];
}

export function useMainView() {
    const [currentViewIndex, setViewIndex] = useState(0);
    return [currentViewIndex, setViewIndex];
}