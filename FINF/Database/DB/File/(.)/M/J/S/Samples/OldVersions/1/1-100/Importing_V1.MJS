// Import one property
import { add } from './mymodule.js';

console.log(add(1, 2)); // 3

// Import multiple properties
import { name, age } from './mymodule.js';
console.log(name, age);
//> "Alice", 23

// Import all properties from a module
import * from './module.js'
console.log(name, age);
//> "Alice", 23
console.log(add(1,2));
//> 3
