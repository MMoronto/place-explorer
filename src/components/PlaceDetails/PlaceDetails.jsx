import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';
import { mergeClasses } from '@material-ui/styles';

const PlaceDetails = ({ place }) => {
    const classes = useStyles();
    return (
        <Card elevation={6}>
            <CardMedia 
                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : 'https://images.squarespace-cdn.com/content/v1/54222358e4b0ef23d87a996b/1557093952331-16M9H0UFXZQECKMZXS33/SAM_4808.JPG'}
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
                {place?.awards?.map((award) => (
                    <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
                        <img src={award.images.small} alt={award.display_name}/>
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>
                ))}
                {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size="small" label={name} className={classes.chip} />
                ))}
                {place?.address && (
                    <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                        <LocationOnIcon /> {place.address}
                    </Typography>
                )}
                {place?.phone && (
                    <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
                        <PhoneIcon /> {place.phone}
                    </Typography>
                )}
                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')} >
                        Place Explorer
                    </Button>
                    <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')} >
                        Website
                    </Button>                    
                </CardActions>

            </CardContent>

        </Card>
    );
}

export default PlaceDetails;