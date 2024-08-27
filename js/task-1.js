const makeTransaction = (quantity, pricePerDroid) => {
  return `You ordered ${quantity} droids worth ${
    parseInt(quantity) * parseInt(pricePerDroid)
  } credits!`;
};
