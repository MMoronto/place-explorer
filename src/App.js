import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData, getWeatherData } from './api/travelAdvisorAPI';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
    // const [type, setType] = useState('places');
    const [places, setPlaces] = useState([]);
    const [weatherData, setWeatherData] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);

    const [childClicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [autocomplete, setAutocomplete] = useState(null);

    const [coords, setCoords] = useState({});
    const [bounds, setBounds] = useState({});
    
    const [type, setType] = useState('places');
    const [rating, setRating] = useState('');


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoords({ lat: latitude, lng: longitude });
        })
    }, []);

    useEffect(() => {
        const filteredPlaces = places.filter((place) => Number(place.rating) > rating);

        setFilteredPlaces(filteredPlaces);
    }, [rating]);

    useEffect(() => {
        if(bounds.sw && bounds.ne) {
        setIsLoading(true);

        getWeatherData(coords.lat, coords.lng)
            .then((data) => setWeatherData(data));
        
        getPlacesData(type, bounds.sw, bounds.ne)
            .then((data) => {
                setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
                setFilteredPlaces([]);
                setRating('');
                setIsLoading(false);
            });
        }
    }, [type, bounds]);


    return (
        <>
            <CssBaseline />
            <Header setCoords={setCoords} />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List 
                        places={filteredPlaces.length ? filteredPlaces : places}
                        childClicked={childClicked}
                        isLoading={isLoading}
                        type={type}
                        setType={setType} 
                        rating={rating}
                        setRating={setRating}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        setCoords={setCoords}
                        setBounds={setBounds}
                        coordinates={coords}
                        places={filteredPlaces.length ? filteredPlaces : places}
                        setChildClicked={setChildClicked}
                        weatherData={weatherData}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default App;