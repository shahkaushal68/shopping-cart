import React, { createContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer } from "./Reducer";

export const contextCart = createContext();
faker.seed(99);

const CartContext = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    image: faker.image.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDeliver: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  //console.log(products);
  const initialState = {
    products: products,
    cart: [],
  };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <contextCart.Provider value={{ state, dispatch }}>
      {children}
    </contextCart.Provider>
  );
};

export default CartContext;
