import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import mapStyles from '../../mapStyles';
import useStyles from './styles.js';


const Map = ({ places, setCoords, setBounds, setChildClicked, weatherData }) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width:600px)');

    const coords = { lat: 6.68540, lng: 3.27388 };

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter={coords}
                center={coords}
                defaultZoom={14}
                yesIWantToUseGoogleMapApiInternals
                
                margin={[50, 50, 50, 50]}
                optioins={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
                onChange={(e) => {
                    setCoords({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={(child) => setChildClicked(child)}
            >
                {places.length && places.map((place, i) => (
                    <div
                       className={classes.markerContainer}
                       lat={Number(place.latitude)}
                       lng={Number(place.longitude)}
                       key={i}
                    >
                        {
                            !matches ? (
                                <LocationOnOutlinedIcon color="primary" fontSize="large" />
                            ) : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.Typography} variant="subtitle2" gutterBottom>
                                        {place.name}
                                    </Typography>
                                    <img
                                        className={classes.pointer}
                                        src={place.photo ? place.photo.images.large.url : 'https://images.squarespace-cdn.com/content/v1/54222358e4b0ef23d87a996b/1557093952331-16M9H0UFXZQECKMZXS33/SAM_4808.JPG'}
                                        alt={place.name}
                                    />
                                    <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                                </Paper>
                            )
                        }

                    </div>
                ))}
                {weatherData?.list?.length && weatherData.list.map((data, i) => (
                    <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                        <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" />
                    </div>
                ))}
                {weatherData?.list?.map((data, i) => (
                    <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                        <img height={100} src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
};

export default Map;