import { useEffect, useState } from "react";
import { DashboardCard, DashboardEmpty } from "./components";

export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);
  const token = JSON.parse(sessionStorage.getItem("bloomifyToken"));
  const blid = JSON.parse(sessionStorage.getItem("blid"));
  useEffect(() => {
    async function fetchOrders() {
      const response = await fetch(
        `http://localhost:8000/660/orders?user.id=${blid}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setOrders(data);
    }

    fetchOrders();
  }, [blid, token]);
  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>

      <section>
        {orders.length &&
          orders.map((order) => <DashboardCard key={order.id} order={order} />)}
      </section>

      <section>{orders.length === 0 && <DashboardEmpty />}</section>
    </main>
  );
};
