import { useTitle } from "../../hooks/useTitle";
import { useCart } from "../../context";
import { EmptyCart, ProductsCart } from "./components";
export const CartPage = () => {
  const { cartList } = useCart();
  useTitle("Cart");
  return <main>{cartList.length < 1 ? <EmptyCart /> : <ProductsCart />}</main>;
};
