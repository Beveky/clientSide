// cartUtils.js
export const formatCartForEmail = (cart) => {
  let cartDetails = `Order Summary:\n\n`;
  
  cart.products.forEach((product, index) => {
    cartDetails += `Item ${index + 1}:\n`;
    cartDetails += `Product: ${product.title}\n`;
    cartDetails += `ID: ${product._id}\n`;
    cartDetails += `Quantity: ${product.quantity}\n`;
    cartDetails += `Price: $${product.price}\n`;
    cartDetails += `Size: ${product.size}\n`;
    cartDetails += `Color: ${product.color}\n\n`;
  });

  cartDetails += `Subtotal: $${cart.total.toFixed(2)}\n`;
  const estimatedShipping = 6; // Example shipping cost
  const total = cart.total + estimatedShipping;
  cartDetails += `Estimated Shipping: $${estimatedShipping}\n`;
  cartDetails += `Total: $${total.toFixed(2)}`;

  return cartDetails;
};
