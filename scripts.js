// the objective of this lab is to practice ES2015 fundamentals.

// 1. declare new function named favMovie that takes one parameter.
// 2. inside function, log message to console that tells user what favorite movie is (use template literal).
function favMovie(name = 'world', movie = 'The Room') {
    console.log(`My name is ${name} and my favorite movie is:
    ${movie}
    `);
}
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