// object initialization and manipulation in Node.js

const obj = {};

// Adding properties to the object
obj.name = "NodeJS Object";
obj.version = "14.17.0";
obj.features = ["Asynchronous", "Event-Driven", "Non-Blocking I/O"];

// Accessing properties
console.log("Object Name:", obj.name);
console.log("Object Version:", obj.version);
console.log("Object Features:", obj.features.join(", "));

// Modifying a property
obj.version = "16.0.0";
console.log("Updated Object Version:", obj.version);

// Deleting a property
delete obj.features;
console.log("Object after deleting features property:", obj);

// Checking if a property exists
console.log("Does 'name' property exist?", 'name' in obj);
console.log("Does 'features' property exist?", 'features' in obj);

// Iterating over object properties
console.log("Iterating over object properties:");
for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// Using Object methods
const keys = Object.keys(obj);
const values = Object.values(obj);
const entries = Object.entries(obj);

console.log("Object Keys:", keys);
console.log("Object Values:", values);
console.log("Object Entries:", entries);

// Convert object to query string
function toQueryString(object) {
    return Object.entries(object)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}

const queryString = toQueryString({ name: "NodeJS", version: "16.0.0" });
console.log("Query String:", queryString);

// Filtering object properties
const filteredObj = Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => key !== 'version')
);
console.log("Filtered Object (without version):", filteredObj);

// merging objects
const additionalInfo = { author: "OpenAI", license: "MIT" };
const mergedObj = { ...obj, ...additionalInfo };
console.log("Merged Object:", mergedObj);

// object.assign
const assignedObj = Object.assign({}, obj, { releaseDate: "2021-05-25" });
console.log("Assigned Object with releaseDate:", assignedObj);

// Freezing the object to prevent modifications
Object.freeze(obj);
obj.name = "Modified Name"; // This will not have any effect
console.log("Object after attempting modification on frozen object:", obj);

// Sealing the object to prevent adding or removing properties
const sealedObj = { ...obj };
Object.seal(sealedObj);
sealedObj.version = "18.0.0"; // This will work
delete sealedObj.name; // This will not work
console.log("Sealed Object after modification attempts:", sealedObj);

// Getting property descriptors
const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log("Property Descriptors:", descriptors);

// Creating an object with a prototype
const proto = {
    greet() {
        console.log(`Hello from ${this.name}`);
    }
};

const objWithProto = Object.create(proto);
objWithProto.name = "Prototype Object";
objWithProto.greet();

// Checking if the object is frozen or sealed
console.log("Is obj frozen?", Object.isFrozen(obj));
console.log("Is sealedObj sealed?", Object.isSealed(sealedObj));

// Cloning an object
const clonedObj = { ...obj };
console.log("Cloned Object:", clonedObj);

// Deep cloning an object
const deepClone = JSON.parse(JSON.stringify(mergedObj));
console.log("Deep Cloned Object:", deepClone);

