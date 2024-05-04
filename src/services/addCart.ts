export async function addCart(newCart: ProductsType) {
  const res = await fetch("https://fakestoreapi.com/carts", {
    method: "POST",
    body: JSON.stringify(newCart),
  });

  if (!res.ok) throw new Error("Failed to add cart");

  return res.json();
}
