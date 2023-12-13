import axios from 'axios';
import { API_KEY } from "../utils/config";

export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}