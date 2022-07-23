import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar className={clases.toolbar}>

            </Toolbar>
        </AppBar>
    );
}

export default Header;