import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-key': '41599fd560msh907746e088eb965p1a2b46jsnb4b6b8c5b300',
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
      const {data} = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
        params: { lat, lon: lng },
        headers: {
          'x-rapid-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        },
      });
      return data;
    }
  }catch(error) {
    console.log(error);
  }
};