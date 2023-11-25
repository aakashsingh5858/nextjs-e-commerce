import axios from "axios";

export const getAllProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
