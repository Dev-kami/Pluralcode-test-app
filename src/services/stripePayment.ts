export async function stripePayment(
  productTitle: string,
  productPrice: number,
  quantity: number
) {
  try {
    const res = await fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productTitle, productPrice, quantity }),
    });

    if (!res.ok) throw new Error("Failed to process payment");
    return res.json();
  } catch (error) {
    console.error(error);
  }
}
