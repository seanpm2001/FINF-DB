// Arrow functions let us omit the `function` keyword.
// Here `long_example` points to an anonymous function value.
const long_example = (input1, input2) => {
    console.log("Hello, World!");
    const output = input1 + input2;

    return output;
};

// If there are no braces, the arrow function simply returns the expression
// So here it's (input1 + input2)
const short_example = (input1, input2) => input1 + input2;

long_example(2, 3); // Prints "Hello, World!" and returns 5
short_example(2, 5);  // Returns 7

// If an arrow function only has one parameter, the parentheses can be removed.
const no_parentheses = input => input + 2;

no_parentheses(3); // Returns 5
