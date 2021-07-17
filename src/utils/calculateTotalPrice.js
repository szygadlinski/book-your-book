export const calculateTotalPrice = products => {
  let totalPrice = 0;

  for(let product of products){
    totalPrice += product.price * product.amount;
  }

  return totalPrice.toFixed(2);
};
