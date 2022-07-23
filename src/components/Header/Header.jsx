import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
// import { classes } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Location Explorer
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Get curious about your neighborhood
                    </Typography>
                    {/* <Autocomplete>
                        <div className={classes.title}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search..." clases={{ root: classes.inputRoot, input: classes.inputInput}} />
                        </div>
                    </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;