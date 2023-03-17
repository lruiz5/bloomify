import { useLocation } from "react-router";
import { OrderFail, OrderSuccess } from "./components";

export const OrderSummary = () => {
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
