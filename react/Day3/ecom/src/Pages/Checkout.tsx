import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";

const Checkout = () => {
  const basketContext = useContext(BasketContext);
  return (
    <div>
      <h3>My Checkout page</h3>
      <p>{`You need to pay a total of ${basketContext?.totalAmount}`}</p>
      <p>
        Unfortunately our payment methods are currently offline. Come back soon!
      </p>
    </div>
  );
};
export default Checkout;
