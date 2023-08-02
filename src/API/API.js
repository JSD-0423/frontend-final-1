import axios from "axios";

const api = axios.create({
  baseURL: "https://tap-final.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

const getAllProducts = async (page = 1) => {
  try {
    const response = await api.get(`/product?page=${page}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getAllCategories = async () => {
  try {
    const response = await api.get(`/category`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getCategoryProducts = async (page = 1) => {
  try {
    const response = await api.get(`/category`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getHandPickedProduct = async () => {
  try {
    const response = await api.get("/category/handpick?rating=4.5");
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getNewArrivals = async () => {
  try {
    const response = await api.get("/product/recent");
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getSingleProduct = async (productId) => {
  try {
    const response = await api.get(`/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const searchProduct = async (title) => {
  try {
    const response = await api.get(`/search?title=${title}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export {
  getAllProducts,
  getSingleProduct,
  getHandPickedProduct,
  getNewArrivals,
  searchProduct,
  getAllCategories,
  getCategoryProducts
};
