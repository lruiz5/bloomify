import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers";

//initialize state
const initialState = {
  cartList: [],
  total: 0,
};

//create context from initial state
const CartContext = createContext(initialState);

//create provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    const updatedCartList = state.cartList.concat(product);
    updateTotal(updatedCartList);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };
  const removeFromCart = (product) => {
    const updatedCartList = state.cartList.filter(
      (current) => current.id !== product.id
    );
    updateTotal(updatedCartList);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };
  const updateTotal = (products) => {
    let total = 0;

    products.forEach((product) => (total += product.price));

    dispatch({
      type: "UPDATE_TOTAL",
      payload: {
        total,
      },
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
      payload: {
        cartList: [],
        total: 0,
      },
    });
  };
  const value = {
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart,
    clearCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
