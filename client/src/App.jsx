import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import DealsPage from "./pages/DealsPage";
import ProductDetail from "./pages/ProductDetail";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/products"
        element={<ProductsPage />}
      />

      <Route
        path="/deals"
        element={<DealsPage />}
      />

      <Route
        path="/product/:id"
        element={<ProductDetail />}
      />

      <Route
        path="/products/:id"
        element={<ProductDetailsPage />}
      />

      <Route
        path="/cart"
        element={<CartPage />}
      />

    </Routes>

  );
}

export default App;
