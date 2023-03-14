import { Routes, Route } from "react-router-dom";
import {
  CartPage,
  DashboardPage,
  HomePage,
  OrderSummary,
  ProductsPage,
} from "../pages";
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/ordersummary" element={<OrderSummary />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </>
  );
};