import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./hooks/useToast";
ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
<BrowserRouter>
<ToastProvider>
<CartProvider>
<App />
</CartProvider>
</ToastProvider>
</BrowserRouter>
</React.StrictMode>
);
