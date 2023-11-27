import api from "../utils/api";

export const getAllProducts = async () => {
  try {
    const response = await api.get("/products");
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getAllCategories = async () => {
  try {
    const response = await api.get("/products/categories");
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getProductByCategory = async (categoryId) => {
  try {
    const response = await api.get(`/products/category/${categoryId}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getProductDetails = async (productId) => {
  try {
    const response = await api.get(`/products/${productId}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
