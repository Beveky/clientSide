export const initiateCheckout = async (products) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/checkout/create-checkout-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to initiate checkout");
    }

    const data = await response.json();
    return data.sessionId; // Return the session ID from the response
  } catch (error) {
    console.error("Error initiating checkout:", error);
    throw error; // Re-throw the error to handle it in the component
  }
};
