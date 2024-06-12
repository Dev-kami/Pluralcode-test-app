export async function getSingleProduct(productId: number) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_FAKESTORE_API}/products/${productId}`);

    if (!res.ok) throw new Error("Failed to get this product");

    return res.json();
}
