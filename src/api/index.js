import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': '41599fd560msh907746e088eb965p1a2b46jsnb4b6b8c5b300',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};


export const getPlacesData = async () => {
    try {
        const { data: { data } } = await axios.get(URL, options);

        return data;
    } catch (error) {
        console.log(error)
    }
}