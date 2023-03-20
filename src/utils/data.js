const getSession = () => {
  const token = JSON.parse(sessionStorage.getItem("bloomifyToken"));
  const blid = JSON.parse(sessionStorage.getItem("blid"));
  return { token, blid };
};

export async function getUser() {
  const { token, blid } = getSession();
  const response = await fetch(`${process.env.REACT_APP_HOST}/users/${blid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }
  const data = response.json();
  return data;
}

export async function getUserOrders() {
  const { token, blid } = getSession();
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/orders?user.id=${blid}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }
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
  const response = await fetch(`${process.env.REACT_APP_HOST}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(order),
  });
  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }
  return await response.json();
}
