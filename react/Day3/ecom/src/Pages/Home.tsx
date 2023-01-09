import "./Home.css";
import products from "../products.json";
import ProductCard from "../components/ProductCard/ProductCard";
import { MyStoreProduct } from "../typings";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Jonatans Nørdy T-shirt Store!</h1>
      {products.data.map((product: MyStoreProduct) => {
        return <ProductCard key={product.id} product={product} />;
      })}

      <Link className="my-link" to={"checkout"}>
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default Home;
