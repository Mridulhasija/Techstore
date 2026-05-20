import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar        from "../components/Navbar";
import Footer        from "../components/Footer";
import ProductCard   from "../components/ProductCard";
import { useCountdown } from "../hooks/useCountdown";
import { getProducts }  from "../api/api";
import localProducts    from "../data/products";

function DealsPage() {
  const [products, setProducts] = useState(
    [...localProducts].sort((a, b) => b.discount - a.discount)
  );
  const { hrs, mins, secs } = useCountdown(8, 34, 12);

  useEffect(() => {
    getProducts()
      .then(({ data }) => {
        if (data?.length)
          setProducts([...data].sort((a, b) => b.discount - a.discount));
      })
      .catch(() => {});
  }, []);

  const hotDeals  = products.filter((p) => p.discount >= 20);
  const otherDeals = products.filter((p) => p.discount < 20);

  return (
    <>
      <Navbar />

      <div className="products-page">
        <div className="promo-banner" style={{ margin: "0 0 40px" }}>
          <div className="promo-text">
            <h2>Flash Sale — Up to 40% Off</h2>
            <p>Biggest deals of the season. Don't miss out.</p>
          </div>
          <div className="countdown">
            <div className="count-block"><div className="count-num">{hrs}</div><div className="count-label">Hours</div></div>
            <div className="count-block"><div className="count-num">{mins}</div><div className="count-label">Mins</div></div>
            <div className="count-block"><div className="count-num">{secs}</div><div className="count-label">Secs</div></div>
          </div>
        </div>

        {}
        {hotDeals.length > 0 && (
          <>
            <div className="section-header">
              <div className="section-title">🔥 Hot Deals (20%+ off)</div>
            </div>
            <div className="products-grid" style={{ marginBottom: 40 }}>
              {hotDeals.map((p) => (
                <ProductCard key={p.id} product={p} addToCart={addToCart} />
              ))}
            </div>
          </>
        )}

        {}
        {otherDeals.length > 0 && (
          <>
            <div className="section-header">
              <div className="section-title">More Deals</div>
            </div>
            <div className="products-grid">
              {otherDeals.map((p) => (
                <ProductCard key={p.id} product={p} addToCart={addToCart} />
              ))}
            </div>
          </>
        )}
      </div>
      <Link to="/products">
<button className="btn-primary">
View Deals
</button>
</Link>

      <Footer />
    </>
  );
}

export default DealsPage;
