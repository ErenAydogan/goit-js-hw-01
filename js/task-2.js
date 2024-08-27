const getShippingMessage = (country, price, deliveryFee) => {
  return `Shipping to ${country} will cost ${
    parseInt(price) + parseInt(deliveryFee)
  } credits`;
};
