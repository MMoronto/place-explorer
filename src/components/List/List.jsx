import React from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');

    return (
        <div className={classes.container}>
            <Typography variant='h4'>Essential Amenities near you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value='Restaurants'>Restaurants</MenuItem>
                    <MenuItem value='Hotels'>Hotels</MenuItem>
                    <MenuItem value='Museums'>Museums</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default List;