JavaScript, there are built-in error objects that have a name and message property which tell us what went wrong. Examples of built-in runtime errors include:

ReferenceError: when a variable or function cannot be found.
TypeError: when a value is not a valid type, see the example below:
const reminder = 'Reduce, Reuse, Recycle';
reminder = 'Save the world';
// TypeError: Assignment to constant variable.
console.log('This will never be printed!');

In the example above, when we try to reassign a constant variable reminder, the TypeError is thrown. Code that is written after a thrown runtime error will not be evaluated, so the console.log() statement will not be evaluated.

## Constructing an Error
JavaScript errors are objects that have a name and message property. Previously, we’ve seen how built-in errors alert us about common mistakes in our code. But, what if we need an error message that isn’t covered by the built-in errors? Let’s say we need to inform a user that a string passed in as an argument is too short with a custom message. Such a message isn’t covered by a built-in error, but we could use the Error function to make our own error object with a message that is unique to our program!

console.log(Error('Your password is too weak.'));
// Prints: Error: Your password is too weak.

The Error function takes an argument of a string which becomes the value of the error’s message property. In the code snippet above, we used the Error function to create an error object that has the message 'Your password is too weak.'.

You might also see errors created with the new keyword. Both methods will lead to the same functionality. Take a look:

console.log(new Error('Your password is too weak.'));
// Prints: Error: Your password is too weak.

Keep in mind that creating an error is not the same as throwing an error. A thrown error will cause the program to stop running. 

## The throw Keyword
Creating an error doesn’t cause our program to stop — remember, an error must be thrown for it to halt the program.

To throw an error in JavaScript, we use the throw keyword like so:

throw Error('Something wrong happened');
// Error: Something wrong happened

When we use the throw keyword, the error is thrown and code after the throw statement will not execute. Take for example:

throw Error('Something wrong happened');
// Error: Something wrong happened

console.log('This will never run');

After throw Error('Something wrong happened'); is executed and the error object is thrown, the console.log() statement will not run (just like when a built-in JavaScript error was thrown!).

## The try...catch Statement
Up to this point, thrown errors have caused our program to stop running. But, we have the ability to anticipate and handle these errors by writing code to address the error and allow our program to continue running.

In JavaScript, we use try...catch statement to anticipate and handle errors. Take a look at example below:

try {
  throw Error('This error will get caught');
} catch (e) {
  console.log(e);
}
// Prints: This error will get caught

console.log('The thrown error that was caught in the try...catch statement!');
// Prints: 'The thrown error that was caught in the try...catch statement!'

Now, let’s break down what happened in the try...catch statement above:

We have code that follows try inside curly braces {} known as the try block.
Inside the try block we insert code that we anticipate might throw an error.
Since we want to see what happens if an error is thrown in the try block, we throw an error with the message 'This error will get caught'.
Following the try block is the catch statement which accepts the thrown error from the try block . The e represents the thrown error.
The curly braces that follow catch(e) is known as the catch block and contains code that executes to handle the error.
Since the error is caught, our console.log() after the try...catch statement prints 'The thrown error that was caught in the try...catch statement!'.
Generally speaking, in a try...catch statement, we evaluate code in the try block and if the code throws an error, the code inside the catch block will handle the error for us. The provided example just showcases how a try...catch statement works because we know an error is being thrown. Let’s first practice writing our own try...catch statement and afterwards we will go over a more practical usage of try...catch.

## Handling with try...catch
In the previous exercise we caught an error that we threw, but we can also use a try...catch statement to handle built-in errors that are thrown by the JavaScript engine that is reading and evaluating our code.

const someVar = 'Cannot be reassigned';
try {
  someVar = 'Still going to try';
} catch(e) {
  console.log(e);
}
// Prints: TypeError: Assignment to constant variable.

In the example above, we didn’t use the throw keyword to throw a custom error, rather we tried to re-assign a const variable and a TypeError was thrown. Then, in our catch block, we logged the error to the console.

Using a try...catch statement for built-in JavaScript errors is really beneficial when we need to use data from an external source that’s not written directly in our program.

Let’s say we expect to grab an array from a database but the information we get back is a string. In our program, we could have a function that only works on arrays. If that function was called with a string instead of an array we would get an error and our program would stop running!

However, we can use a try...catch statement to handle the thrown error for us which allows our program to continue running and we receive a message knowing what went wrong! Let’s see how we can implement this in our code.