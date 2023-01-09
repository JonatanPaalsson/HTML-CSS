import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import { MyStoreProduct } from "../../typings";
import "./ProductCard.css";

type ProductCardProps = {
  product: MyStoreProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const basketContext = useContext(BasketContext);
  if (!basketContext) return null;

  const increaseAmount = () => {
    basketContext.addItemToBasket(product);
  };
  const decreaseAmount = () => {
    basketContext.removeItemFromBasketById(product.id);
  };

  return (
    <>
      <p>{product.name}</p>
      <p>{`${product.price},-`}</p>
      <img width={100} src={product.image} alt={product.name} />
      <div className="button-group">
        <button onClick={() => decreaseAmount()}>-</button>
        <p className="counter">
          {basketContext.getNumberOfItemsInBasketById(product.id)}
        </p>
        <button onClick={() => increaseAmount()}>+</button>
      </div>
    </>
  );
};

export default ProductCard;
