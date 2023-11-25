import axios from "axios";

export const getAllProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getProductDetails = async (id) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
