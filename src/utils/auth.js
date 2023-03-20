export async function login(authDetail) {
  const response = await fetch(`${process.env.REACT_APP_HOST}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  });
  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }
  const data = await response.json();

  if (data.accessToken) {
    sessionStorage.setItem("bloomifyToken", JSON.stringify(data.accessToken));
    sessionStorage.setItem("blid", JSON.stringify(data.user.id));
  }

  return data;
}

export async function register(authDetail) {
  const response = await fetch(`${process.env.REACT_APP_HOST}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  });
  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }
  const data = await response.json();

  if (data.accessToken) {
    sessionStorage.setItem("bloomifyToken", JSON.stringify(data.accessToken));
    sessionStorage.setItem("blid", JSON.stringify(data.user.id));
  }

  return data;
}

export function logout() {
  sessionStorage.removeItem("bloomifyToken");
  sessionStorage.removeItem("blid");
}
