export const filterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "PRODUCT_LIST":
      return { productList: payload.products };
    case "SORT_BY":
      return { ...state, sortBy: payload.sortBy };
    case "RATINGS":
      return { ...state, ratings: payload.ratings };
    case "ONLY_BEST_SELLER":
      return { ...state, onlyBestSeller: payload.onlyBestSeller };
    case "ONLY_IN_STOCK":
      return { ...state, onlyInStock: payload.onlyInStock };
    case "CLEAR_FILTER":
      return {
        ...state,
        onlyInStock: payload.onlyInStock,
        onlyBestSeller: payload.onlyBestSeller,
        sortBy: payload.sortBy,
        ratings: payload.ratings,
      };
    default:
      throw new Error("Case not found!");
  }
};
