import axios from "axios";

const api = axios.create({
  baseURL: "http://tap-final.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

const getAllProducts = async (page = 1) => {
  try {
    const response = await api.get(`/?page=${page}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getHandPickedProduct = async () => {
  try {
    const response = await api.get("/handpick");
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getProduct = async (productId) => {
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

export { getAllProducts, getProduct, getHandPickedProduct, searchProduct };
