const unitPrice = (optionType) => {
  const price = optionType === "scoops" ? 2.0 : 1.5;
  return price.toFixed(2);
};
export default unitPrice;
