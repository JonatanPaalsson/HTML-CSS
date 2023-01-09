import { useContext } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../../context/BasketContext";
import "./BasketFooter.css";

const BasketFooter = () => {
  const basketContext = useContext(BasketContext);
  if (!basketContext) return null;
  return (
    <div className="basket-footer">
      <p className="text">{`Total amount: ${basketContext.totalAmount},-`}</p>
    </div>
  );
};

export default BasketFooter;
