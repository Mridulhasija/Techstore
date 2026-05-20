import Navbar from "../components/Navbar";
import PromoBanner from "../components/PromoBanner";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

import products from "../data/products";

import "./DealsPage.css";

function DealsPage() {

  return (

    <>

      <Navbar />

      <div className="deals-page">

        <div className="deals-wrapper">

          {/* Flash Deals Banner */}

          <PromoBanner />

          {/* Products Grid */}

          <div className="deals-products-grid">

            {products.map((p) => (

              <ProductCard
                key={p.id}
                product={p}
              />

            ))}

          </div>

        </div>

      </div>

      <Footer />

    </>

  );
}

export default DealsPage;
