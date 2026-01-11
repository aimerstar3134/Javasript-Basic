function add(a, b) {
    return a + b;
}

console.log(add(5, 3));

const multiply = (a, b) => a * b;
console.log(multiply(4, 5));

const subtract = function(a, b) {
    return a - b;
};

console.log(subtract(10, 4));

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye");
}

greet("Harshil", sayBye);


function multiplier(factor) {
    return function(num) {
        return num * factor;
    };
}

let double = multiplier(2);
console.log(double(5));


function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));
