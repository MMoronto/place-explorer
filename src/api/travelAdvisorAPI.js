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
      const {data} = await axios.get('https://open-weather-map27.p.rapidapi.com/weather', {
        params: { lon: '6.68540', lat: '3.27388', },
        headers: {
          'X-RapidAPI-Key': '41599fd560msh907746e088eb965p1a2b46jsnb4b6b8c5b300',
          'X-RapidAPI-Host': 'open-weather-map27.p.rapidapi.com'
        },
      });
      return data;
    }
  }catch(error) {
    console.log(error);
  }
};