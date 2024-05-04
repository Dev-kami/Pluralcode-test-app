export async function getAllCategories() {
  const res = await fetch("https://fakestoreapi.com/products/categories");

  if (!res.ok) throw new Error("Failed to fetch categories");

  return res.json();
}