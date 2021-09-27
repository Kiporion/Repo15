// Only change code below this line
const product = (...rest) => {
  const args = [...rest];
  // Only change code above this line
  return args.reduce((a, b) => a * b, 1);
};
console.log(product()); // Change this line
module.exports = product;
