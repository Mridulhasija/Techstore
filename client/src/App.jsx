import { useState }              from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastProvider }         from "./hooks/useToast";
import { AuthProvider }          from "./context/AuthContext";
import Home                      from "./pages/Home";
import ProductsPage              from "./pages/ProductsPage";
import DealsPage                 from "./pages/DealsPage";
import ProductDetail             from "./pages/ProductDetail";
import AuthModal                 from "./components/AuthModal";
import CartPage                  from "./pages/CartPage";
import ProductDetailsPage        from "./pages/ProductDetailsPage";

function AppInner() {
  const [cartCount,   setCartCount]   = useState(3);
  const [showAuth,    setShowAuth]    = useState(false);

  const addToCart = (productId) => setCartCount((n) => n + 1);

  return (
    <>
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}

      <Routes>
        <Route path="/" element={
          <Home
            cartCount={cartCount}
            setCartCount={setCartCount}
            onAuthClick={() => setShowAuth(true)}
          />
        } />

        <Route path="/products" element={
          <ProductsPage
            cartCount={cartCount}
            addToCart={addToCart}
            onAuthClick={() => setShowAuth(true)}
          />
        } />

        <Route path="/deals" element={
          <DealsPage
            cartCount={cartCount}
            addToCart={addToCart}
            onAuthClick={() => setShowAuth(true)}
          />
        } />

        <Route path="/product/:id" element={
          <ProductDetail addToCartLocal={addToCart} />
        } />
        <Route path="/cart" element={<CartPage />} />
<Route
  path="/products/:id"
  element={<ProductDetailsPage />}
/>
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastProvider>
          <AppInner />
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
