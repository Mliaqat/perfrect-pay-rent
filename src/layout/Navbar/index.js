import React, { useState } from 'react';
import Header from '../header';
import SideBar from './SideBar';
import { Grid } from '@mui/material';

function Navbar({ children, show }) {
    const [sideBar, setSidebar] = useState(false);

    return (
        <>
            <Header show={show} setSidebar={setSidebar} sideBar={sideBar} />
            <Grid container height={'91.2vh'}>
                <Grid item lg={2.8} sm={12}>
                    {sideBar ? sideBar : <SideBar />}
                </Grid>
                <Grid item lg={9.2}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
}

export default Navbar;
