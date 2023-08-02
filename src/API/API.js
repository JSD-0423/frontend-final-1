import axios from "axios";

const api = axios.create({
  baseURL: "https://tap-final.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

const getAllProducts = async (page = 1, count = 30) => {
  try {
    const response = await api.get(`/product?page=${page}&count=${count}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getHandPickedProduct = async () => {
  try {
    const response = await api.get("/product/handpick?rating=4.0");
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

const getSingleProduct = async (productId) => {
  try {
    const response = await api.get(`/product/${productId}`);
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
};
