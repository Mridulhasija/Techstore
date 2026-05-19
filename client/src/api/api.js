import axios from "axios";
const api = axios.create({
baseURL:
import.meta.env.VITE_API_URL ||
"http://localhost:5000",
timeout: 15000,
});
api.interceptors.request.use((config) => {
const token = localStorage.getItem("token");
if (token) {
config.headers.Authorization = `Bearer ${token}`;
}
return config;
});
export const getProducts = () => api.get("/api/products");
export const getProductById = (id) => api.get(`/api/products/${id}`);
export const register = (name, email, password) =>
api.post("/api/auth/register", {
name,
email,
password,
});
export const loginAPI = (email, password) =>
api.post("/api/auth/login", {
email,
password,
});
export const fetchCart = () => api.get("/api/cart");
export const addToCartAPI = (productId, quantity = 1) =>
api.post("/api/cart/add", {
productId,
quantity,
});
export default api;
