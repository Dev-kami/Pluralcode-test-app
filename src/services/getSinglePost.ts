export async function getSingleProduct(productId: number) {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);

    if (!res.ok) throw new Error("Failed to get this product");

    return res.json();
}
