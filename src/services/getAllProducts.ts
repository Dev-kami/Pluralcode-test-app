export async function getAllProducts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_FAKESTORE_API}/products`);

    if (!res.ok) throw new Error("Failed to fetch products");

    return res.json();
}
