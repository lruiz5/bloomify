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
import { ProtectedRoute } from "./ProtectedRoute";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        {/* protected routes */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              {" "}
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order-summary"
          element={
            <ProtectedRoute>
              <OrderSummary />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
