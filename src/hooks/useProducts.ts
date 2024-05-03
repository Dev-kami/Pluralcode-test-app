import { getAllProducts } from "@/services/getAllProducts";

export async function useProducts() {
  const products = await getAllProducts();

  return products;
}
