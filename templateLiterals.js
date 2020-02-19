const name = "Squirtle";
const age = 23;

//bad code
const someString = "hello, my name is " + name + ". My age is " + age;

console.log(someString);

//good code with template literals
const TLString = `Hello, my name is ${name}. My age is ${age}. This is the better method.`

console.log(TLString);