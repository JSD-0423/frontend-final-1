import axios from "axios";

const api = axios.create({
  baseURL: "https://tap-final.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

const getAllProducts = async (page = 1, count = 20) => {
  try {
    const response = await api.get(`/product/recent?page=${page}&count=${count}`);
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

const getCategoryProducts = async (category) => {
  try {
    const response = await api.get(`/product/filter?category=${category}&orderBy=-rating`);
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

const getNewArrivals = async (count = 10) => {
  try {
    const response = await api.get(`/product/recent?page=1&count=${count}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getFilteredProducts = async (id, category) => {
  try {
    const response = await api.get(
      `/product/filter?categoryId=${id}&page=1&count=10&orderBy=-rating&category=${category}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getSingleProduct = async (productId) => {
  try {
    const response = await api.get(`/product/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const searchProduct = async (title="") => {
  try {
    const response = await api.get(`/product/search?title=${title}`);
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
  getCategoryProducts,
  getFilteredProducts,
};
