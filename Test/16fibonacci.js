// program to generate fibonacci series up to a certain number
const number = parseInt(prompt('Enter a positive number: '));
let a = 0, b = 1, nextTerm;
console.log('Fibonacci Series:');
console.log(a);
console.log(b);

nextTerm = a+b;

while (nextTerm <= number) {
    console.log(nextTerm);
    a=b;
    b = nextTerm;
    nextTerm = a+b;
}