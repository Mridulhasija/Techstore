import { useParams } from "react-router-dom";
import products from "../data/products";

const ProductDetailsPage = () => {

  const { id } = useParams();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="product-details">

      <img
        src={product.image}
        alt={product.name}
      />

      <div>

        <h1>{product.name}</h1>

        <p>{product.description}</p>

        <h2>₹{product.price}</h2>

      </div>
    </div>
  );
};

export default ProductDetailsPage;
