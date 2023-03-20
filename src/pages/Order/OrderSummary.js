import { useLocation } from "react-router";
import { useTitle } from "../../hooks/useTitle";
import { OrderFail, OrderSuccess } from "./components";

export const OrderSummary = () => {
  useTitle("Order Summary");
  const { state } = useLocation();
  return (
    <main>
      {state.status ? (
        <OrderSuccess data={state.data} />
      ) : (
        <OrderFail message={state.message} />
      )}
    </main>
  );
};
