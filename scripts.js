// the objective of this lab is to practice ES2015 fundamentals.

// template literals & default values.
// 1. declare new function named favMovie that takes one parameter.
// 2. inside function, log message to console that tells user what favorite movie is (use template literal).
let favMovie = (name = 'world', movie = 'The Room') => console.log(`My name is ${name} and my favorite movie is: ${movie}`);
// 3. call function.
favMovie();
// 4. open developer tools and view console. should see message with undefined.
// 5. now pass argument and update function to have default value of 'The Room'.
favMovie("Endless Summer");
// 6. call the function without passing argument.
favMovie();
// 7. refresh browser.
// 8. add another parameter to function, name, with default value 'world'.
// 9. update string to include name in message.
// 10. call favMovie passing in both parameters, and call it without anything.
favMovie('Nick', 'Endless Summer');
favMovie();

// arrow functions.
// 1. change favMovie to an arrow function.
// 2. call the function.
favMovie('Hilary', 'Roman Holiday');
// 3. verify that message still logged to console.
// 4. use the shorthand 'concise body' syntax for function so console.log is on same line as arrow.
// 5. create new arrow function getFirstName;
let getFirstName = name => {
    let first = name.split(' ');
    return first[0];
}
// 6. create second function called getFirstNameConcise using concise body syntax.
let getFirstNameConcise = name => name.split(' ')[0];
// 7. each function will accept one string, full name (first and last).
// 8. when full name passed, functions should return first name.
console.log(getFirstName('Bob Ross'));
console.log(getFirstNameConcise('George Costanza'));
// 9. new function that takes in two parameters and returns object literal. should have two properties: exponent result (x^y) and product.
let returnObj = (x, y) => {
    return {exp: Math.pow(x, y),
        prod: x * y};
}
// 10. log each property using template literal.
let obj = returnObj(3, 4);
console.log(`exponent of (3, 4): ${obj.exp}
product of (3, 4): ${obj.prod}`);

// spread syntax.
// 1. write function that takes 3 parameters, name, location, favFood, and logs them to console.
let logNLF = (name, location, favFood) => console.log(`name: ${name}
location: ${location}
favorite food: ${favFood}`);
// logNLF('Nick', 'Avondale', 'bacon');
// 2. create array with 3 values that match function order.
let testArray = ['Paul', 'Birmingham', 'Kimchi'];
// 3. use spread operator to insert array into function.
logNLF(...testArray);
// 4. create variable set to your name.
let name = 'Nick';
// 5. write function that takes your name.
// 6. using spread syntax, create variable in function that spreads into array.
let takeName = name => [...name];
// console.log(takeName('Nick'));
// 7. using for loop, loop through spread string and console log each value.
let nameArray = takeName('Nick');
for (i = 0; i < nameArray.length; i++) {
    console.log(nameArray[i]);
}