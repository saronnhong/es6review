//Array Methods

const arr = [1.95, 4.95, 15.95, 100, 30];
const total = arr.reduce((acc, cur) => acc + cur);
const addTax = arr.map(item => (item * 1.0875).toFixed(2));
const highValue = arr.filter(item => item > 20);

console.log(total);
console.log(addTax);
console.log(highValue);