import { Link } from "react-router-dom";
import products from "../data/productDB";

function Products() {
  return (
    <div>
      <h1 class="text-3xl font-bold underline">Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>

          <p>₦{product.price}</p>

          <Link class="text-2xl" to={`/products/${product.name}`}>
            View Product
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;