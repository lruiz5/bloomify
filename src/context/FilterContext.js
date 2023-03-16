import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers";
const filterInitialState = {
  productList: [],
  onlyInStock: false,
  onlyBestSeller: false,
  sortBy: null,
  rating: null,
};

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, filterInitialState);

  function initialProductList(products) {
    dispatch({
      type: "PRODUCT_LIST",
      payload: {
        products: products,
      },
    });
  }

  function bestSeller(products) {
    return state.onlyBestSeller
      ? products.filter((product) => product.best_seller === true)
      : products;
  }

  function inStock(products) {
    return state.onlyInStock
      ? products.filter((product) => product.in_stock === true)
      : products;
  }
  function sort(products) {
    if (state.sortBy === "lowtohigh") {
      return products.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (state.sortBy === "hightolow") {
      return products.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return products;
  }
  function rating(products) {
    if (state.ratings === "5stars") {
      return products.filter((product) => product.rating === 5);
    }
    if (state.ratings === "4starsabove") {
      return products.filter((product) => product.rating >= 4);
    }
    if (state.ratings === "3starsabove") {
      return products.filter((product) => product.rating >= 3);
    }
    return products;
  }

  const fileredProductList = rating(
    sort(inStock(bestSeller(state.productList)))
  );

  const value = {
    state,
    dispatch,
    products: fileredProductList,
    initialProductList,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
