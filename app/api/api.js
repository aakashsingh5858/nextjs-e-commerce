import axios from "axios";

export const getAllProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response;
  } catch (error) {
    console.error(error);
  }
};

// export const getProductDetails = async (id) => {
//   try {
//     const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// };

export const getAllCategories = async () => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getProductByCategory = async (categoryId) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${categoryId}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getProductDetails = async (productId) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
