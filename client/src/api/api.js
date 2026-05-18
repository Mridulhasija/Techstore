import axios from "axios";

const api = axios.create({
  baseURL: "https://techstore-trv3.onrender.com",
});


export const getProducts    = ()    => api.get("/api/products");
export const getByCategory  = (cat) => api.get(`/api/products/${cat}`);


export const addToCart      = (userId, productId, quantity) =>
  api.post("/api/cart/add", { userId, productId, quantity });
export const getCart        = (userId) => api.get(`/api/cart/${userId}`);

export default api;
