const getSession = () => {
  const token = JSON.parse(sessionStorage.getItem("bloomifyToken"));
  const blid = JSON.parse(sessionStorage.getItem("blid"));
  return { token, blid };
};

export async function getUser() {
  const { token, blid } = getSession();
  const response = await fetch(`http://localhost:8000/600/users/${blid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = response.json();
  return data;
}

export async function getUserOrders() {
  const { token, blid } = getSession();
  const response = await fetch(
    `http://localhost:8000/660/orders?user.id=${blid}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  return data;
}
export async function createOrder(cartList, total, user) {
  const { token } = getSession();

  const order = {
    pickList: cartList,
    amount_paid: total,
    quantity: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: user.id,
    },
  };
  const response = await fetch("http://localhost:8000/660/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(order),
  });

  return await response.json();
}
