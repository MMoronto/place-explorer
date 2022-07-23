import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar className={clases.toolbar}>
                <Typography variant="h5" className={mergeClasses.title}>
                    Location Explorer
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={mergeClasses.title}>
                        Explore your neighborhood
                    </Typography>
                    <Autocomplete>
                        <div className={classes.title}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search..." clases={{ root: classes.inputRoot, input: classes.inputInput}} />
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;