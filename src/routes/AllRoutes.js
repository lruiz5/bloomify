import { Routes, Route } from "react-router-dom";
import {
  CartPage,
  DashboardPage,
  HomePage,
  OrderSummary,
  ProductsPage,
  ProductDetail,
  Login,
  Register,
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
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
