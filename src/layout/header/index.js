import { AppBar, Box, Button, Divider, Drawer, IconButton, Toolbar } from '@mui/material';
import React, { memo, useState } from 'react';
import './style.css';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/images/logo.svg';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const Header = ({ show, setSidebar, sideBar }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen((pre) => !pre);
    };

    const drawer = (
        <Box sx={{ textAlign: 'center', width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 3 }}>
                <img
                    src={Logo}
                    style={{ height: 30 }}
                    onClick={() => {
                        window.open('http://perfectpayrentbid.com');
                    }}
                />

                <IconButton title="Print Physician List" onClick={handleDrawerToggle}>
                    <CloseIcon />
                </IconButton>
            </Box>

            <Divider />

            <ul className="mobile-navigation">
                <li>
                    <a>Properties</a>
                </li>
                <li>
                    <a>How it Works</a>
                </li>
                <li>
                    <a>Services</a>
                </li>
                <div
                    style={{
                        height: 1.5,
                        width: '100%',
                        backgroundColor: '#66686d'
                    }}
                />
                <li>
                    <a onClick={() => navigate('register')}>Register</a>
                </li>
                <li>
                    <a onClick={() => navigate('login')}>Sign In</a>
                </li>
            </ul>
        </Box>
    );

    return (
        <>
            <Box>
                <AppBar sx={{ backgroundColor: '#dfe4e7', px: 4 }} position="fixed" component={'nav'}>
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <IconButton
                            onClick={handleDrawerToggle}
                            aria-label="open drawer"
                            edge="start"
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Button onClick={() => setSidebar(!sideBar)}>Sidebar</Button>

                        <Box sx={{ display: 'flex' }}>
                            <img
                                src={Logo}
                                style={{ height: 30 }}
                                onClick={() => {
                                    window.open('http://perfectpayrentbid.com');
                                }}
                            />
                        </Box>

                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <ul className="navigaion-menu">
                                <li>
                                    <a>Properties</a>
                                </li>
                                <li>
                                    <a>How it Works</a>
                                </li>
                                <li>
                                    <a>Services</a>
                                </li>
                                <div
                                    style={{
                                        height: 30,
                                        width: 2,
                                        backgroundColor: '#66686d',
                                        marginRight: 20,
                                        marginLeft: 20
                                    }}
                                />
                                <li>
                                    <a onClick={() => navigate('register')}>Register</a>
                                </li>
                                <li>
                                    <a onClick={() => navigate('login')}>Sign In</a>
                                </li>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>

                <Box component={'nav'}>
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: '100%'
                            }
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box>
                    <Toolbar />
                </Box>
            </Box>
        </>
    );
};

export default memo(Header);
