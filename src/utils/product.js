export async function getProducts(searchTerm) {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/products${searchTerm || ""}`
  );

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }
  return await response.json();
}

export async function getProduct(id) {
  const response = await fetch(`${process.env.REACT_APP_HOST}/products/${id}`);
  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }
  return await response.json();
}
export async function getFeaturedProducts() {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/featured_products`
  );
  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}
