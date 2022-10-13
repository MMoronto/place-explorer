import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            },
          });

        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getWeatherData = async ( lat, lng) => {
  try{
    if(lat && lng) {
      const { data } = await axios.get('https://open-weather-map27.p.rapidapi.com/weather', {
        params: { lon: lng, lat: lat, },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'open-weather-map27.p.rapidapi.com'
        },
      });
      return data;
    }
  }catch(error) {
    console.log(error);
  }
};