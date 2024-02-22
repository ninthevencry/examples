**Review Arrays

Arrays are lists that store data in JavaScript.
Arrays are created with brackets [].
Each item inside of an array is at a numbered position, or index, starting at 0.
We can access one item in an array using its index, with syntax like: myArray[0].
We can also change an item in an array using its index, with syntax like myArray[0] = 'new string';
Arrays have a length property, which allows you to see how many items are in an array.
Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.
Arrays have many methods that perform different tasks, such as .slice() and .shift(), you can find documentation at the Mozilla Developer Network website.
Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. You can always check the documentation.
Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable. However, a variable declared with const cannot be reassigned.
Arrays mutated inside of a function will keep that change even outside the function.
Arrays can be nested inside other arrays.
To access elements in nested arrays chain indices using bracket notation.

pop() removes the last element of an array
push() adds an element to the end of an array
shift() removes the first element
unshift() adds an element to the beginning of the array

**Review Loops

Loops perform repetitive actions so we don’t have to code that process manually every time.
How to write for loops with an iterator variable that increments or decrements
How to use a for loop to iterate through an array
A nested for loop is a loop inside another loop
while loops allow for different types of stopping conditions
Stopping conditions are crucial for avoiding infinite loops.
do...while loops run code at least once— only checking the stopping condition after the first execution
The break keyword allows programs to leave a loop during the execution of its block

**Review Objects 
By building your own objects, you will have a better understanding of how JavaScript built-in objects work as well. You can also start imagining organizing your code into objects and modeling real world things in code.

Let’s review what we learned in this lesson:

Objects store collections of key-value pairs.
Each key-value pair is a property—when a property is a function it is known as a method.
An object literal is composed of comma-separated key-value pairs surrounded by curly braces.
You can access, add or edit a property within an object by using dot notation or bracket notation.
We can add methods to our object literals using key-value syntax with anonymous function expressions as values or by using the new ES6 method syntax.
We can navigate complex, nested objects by chaining operators.
Objects are mutable—we can change their properties even when they’re declared with const.
Objects are passed by reference— when we make changes to an object passed into a function, those changes are permanent.
We can iterate through objects using the For...in syntax.

The object that a method belongs to is called the calling object.
The this keyword refers to the calling object and can be used to access properties of the calling object.
Methods do not automatically have access to other internal properties of the calling object.
The value of this depends on where the this is being accessed from.
We cannot use arrow functions as methods if we want to access other internal properties.
JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code.
The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.
Setters and getter methods allow for more detailed ways of accessing and assigning properties.
Factory functions allow us to create object instances quickly and repeatedly.
There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.
As with any concept, it is a good skill to learn how to use the documentation with objects!

**Review High order functions
By thinking about functions as data, and learning about higher-order functions, you’ve taken important steps in learning to write clean, modular code that takes advantage of JavaScript’s flexibility.

Let’s review what we learned in this lesson:

Abstraction allows us to write complicated code in a way that’s easy to reuse, debug, and understand for human readers.

We can work with functions the same way we work with any other type of data, including reassigning them to new variables.

JavaScript functions are first-class objects, so they have properties and methods like any other object.

Functions can be passed into other functions as parameters.

A higher-order function is a function that either accepts functions as parameters, returns a function, or both.

**Review Iterators
You have learned a number of useful methods in this lesson as well as how to use the JavaScript documentation from the Mozilla Developer Network to discover and understand additional methods. Let’s review!

.forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
.map() executes the same code on every element in an array and returns a new array with the updated elements.
.filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
.findIndex() returns the index of the first element of an array that satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
.reduce() iterates through an array and takes the values of the elements and returns a single value.
All iterator methods take a callback function, which can be a pre-defined function, a function expression, or an arrow function.
You can visit the Mozilla Developer Network to learn more about iterator methods (and all other parts of JavaScript!).