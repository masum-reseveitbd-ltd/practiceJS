function getfactorial(number) {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact = fact * i;
  }
  return fact;
}
var result = getfactorial(7);
console.log(result);
