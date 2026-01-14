// class example and its object instantiation
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Creating an instance of the User class
const user1 = new User('Alice', 30);
console.log(user1.greet()); // Output: Hello, my name is Alice and I am 30 years old.

