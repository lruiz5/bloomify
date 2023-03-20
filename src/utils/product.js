export async function getProducts(searchTerm) {
  const response = await fetch(
    `http://localhost:8000/444/products${searchTerm || ""}`
  );
  return await response.json();
}

export async function getProduct(id) {
  const response = await fetch(`http://localhost:8000/444/products/${id}`);
  return await response.json();
}
export async function getFeaturedProducts() {
  const response = await fetch("http://localhost:8000/444/featured_products");
  const data = await response.json();
  return data;
}
