import axios from "axios";

const api = axios.create({
  baseURL: "https://techstore-trv3.onrender.com",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("ts_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const getProducts    = ()    => api.get("/api/products");
export const getProductById = (id)  => api.get(`/api/products/${id}`);
export const getByCategory  = (cat) => api.get(`/api/products/cat/${cat}`);

export const register = (name, email, password) =>
  api.post("/api/auth/register", { name, email, password });
export const loginAPI = (email, password) =>
  api.post("/api/auth/login", { email, password });

export const fetchCart         = ()              => api.get("/api/cart");
export const addToCartAPI      = (productId, qty = 1) =>
  api.post("/api/cart/add", { productId, quantity: qty });
export const removeFromCartAPI = (cartItemId)    => api.delete(`/api/cart/${cartItemId}`);

export default api;
