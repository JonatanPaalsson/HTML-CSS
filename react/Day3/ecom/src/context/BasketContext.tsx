import React, { createContext, useEffect, useState } from "react";
import { MyStoreProduct } from "../typings";

type BasketItem = {
  product: MyStoreProduct;
  amount: number;
};

type contextType = {
  basket: BasketItem[];
  totalAmount: number;
  addItemToBasket: (product: MyStoreProduct) => void;
  removeItemFromBasketById: (id: number) => void;
  getNumberOfItemsInBasketById: (id: number) => number;
};

type props = {
  children: React.ReactNode;
};

export const BasketContext = createContext<contextType | null>(null);

export const BasketContextProvider: React.FC<props> = ({ children }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [basket, setBasket] = useState<BasketItem[]>([]);

  useEffect(() => {
    const totalAmount = basket.reduce(
      (accumulator, item) => accumulator + item.amount * item.product.price,
      0
    );
    setTotalAmount(totalAmount);
  }, [basket]);

  const findItemInBasket = (id: number) => {
    return basket.find((basketItem) => basketItem.product.id === id);
  };

  const addItemToBasket = (product: MyStoreProduct) => {
    const item = findItemInBasket(product.id);
    const basketCopy = [...basket];
    if (item) {
      basketCopy.forEach((basketItem) => {
        if (basketItem.product.id === product.id) {
          basketItem.amount++;
        }
      });
    } else {
      basketCopy.push({ amount: 1, product: product });
    }
    setBasket(basketCopy);
  };

  const getNumberOfItemsInBasketById = (id: number) => {
    const item = findItemInBasket(id);
    return item?.amount ?? 0;
  };

  const removeItemFromBasketById = (id: number) => {
    const item = findItemInBasket(id);
    const basketCopy = [...basket];
    if (item && item.amount > 1) {
      basketCopy.forEach((basketItem) => {
        if (basketItem.product.id === id) {
          basketItem.amount = basketItem.amount - 1;
          setBasket(basketCopy);
        }
      });
    } else {
      const filteredBasket = basketCopy.filter(
        (basketItem) => basketItem.product.id !== id
      );
      setBasket(filteredBasket);
    }
  };

  return (
    <BasketContext.Provider
      value={{
        totalAmount,
        basket,
        addItemToBasket,
        getNumberOfItemsInBasketById,
        removeItemFromBasketById,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
