import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import phoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';
import { mergeClasses } from '@material-ui/styles';

const PlaceDetails = ({ place }) => {
    console.log(place);

    return (
        <Card elevation={6}>
            <CardMedia 
                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : 'https://www.zikoko.com/chopist/favorite-nigerian-street-foods/'}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
                </Box>
                {place?.awards ?.map((award) => (
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <img src={award.images.small} alt={award.display_name}/>
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>
                ))}
                {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size="small" label={name} className={classes.chip} />
                ))}
            </CardContent>

        </Card>
    );
}

export default PlaceDetails;