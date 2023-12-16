import axios from "axios";

import { API_URL } from "./config";


export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const searchProducts = async (searchQuery) => {
  try {
    const response = await axios.get(`${API_URL}/products/search?q=${searchQuery}`);
    return response.data.products;
  } catch (error) {
    console.log(error);
  }
}