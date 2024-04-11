https://www.chaijs.com/guide/

## Testing Types
In this article, you will be introduced to the different types of testing that may be used throughout the various stages of a project from local development to shipping to real users.

## What are the Types of Testing?
At different stages of production for a particular project, you may encounter the opportunity for different types of tests, which can vary in scale and resource intensity, as well as serve different purposes. The types of testing we will discuss in this article are:

## Unit tests
Integration tests
End to end tests
Testing levels art, demonstrating types of tests in a pyramid shape, smaller unit tests at the bottom, larger ent to end tests at the top

Throughout this article, we will discuss how each of these types of tests can be applied to a basic weather application.

## Unit Tests
A unit test covers the smallest possible unit of testable code, such as a single function. In order to keep the scope of a unit test focused on the unit being tested, any data or behavior from other units or external sources that the unit relies on should be replaced with fake (mock) data or behavior.

For example, in a weather application, we might have a number of functions that each handle a small piece of computation, such as converting fahrenheit to celsius or formatting incoming weather data from an API. Unit tests would be written first to ensure that these functions can perform independently before we move on to testing how they work together. Any data that might come in from an external database or API would be mocked.

## Integration Tests
An integration test covers how the units of a particular program work with one another. When testing integrations with external services, only the handling of incoming data is tested while the data itself remains mocked.

For example, in a weather application, integration tests would be written to ensure that weather data fetched from an API will be properly formatted to be displayed to the user. It would also ensure that delays, errors, or invalid data from the external service would be handled properly once they are introduced. The data itself would be mocked.

End to End Tests
An end to end test (sometimes referred to as a UI layer test or e2e) automates user flow to test the application in the way that a real user would experience it. To closely match the end user’s experience, this type of testing would also test interactions with external services such as databases and APIs.

For example, in a weather application, end to end tests might be written to simulate a user searching for a particular location, selecting that location, choosing celsius or fahrenheit, and clicking through various aspects of the UI. In this test, the actual database and external API is used.

How do these tests relate?
The order of tests in this article (unit -> integration -> end to end) represent an increase in resource intensity (time, computation, money) and the scope of the tests (amount of code being tested). Due to the increase in complexity, tests of these types may initially be written in this order. However, as an application is developed, new features may be tested using all three types simultaneously, with each providing different feedback to the developer or testing team.

A typical developer’s feedback loop using these various test types might be:

Make code changes
Make a pull request
The code change has tests run against it (unit, integration, sometimes e2e)
If there are any failures then the dev will work on fixes in their local development environment.
Repeat steps 1-4 until all tests pass.
The pull request is allowed to be merged.
Summary
In this article, we learned about the different types of tests that are written and performed throughout the production process. These include:

Unit tests, which test the smallest unit of code possible.
Integration tests, which test the interactions between internal services in the application.
End to end tests, which test the whole application including the external services it depends on.
These types of tests increase respectively in terms of resource intensity and amount of code being tested and each provide developers and/or testing teams with distinct feedback during the development cycle.

## Software Testing Methodologies
Learn about software testing methodologies and some specific strategies that use a test-first approach to software development.

Imagine this scenario: you’ve written some code for a new feature and it’s time to test it. You deploy your development version of the code and interact with all of the features of your application that were impacted. This could include features you built in the past and anything new. You repeat that process for different browsers and devices, and a few hours later, you’re confident that it’s ready to go. But then you deploy it to production and the error reports start to come in!

This scenario describes the process of manual testing, which is time-consuming, can result in errors being overlooked, and can’t be repeated easily. To get around the issues related to manual testing, organizations generally use software to automate their testing processes to validate code.

## What is a software testing methodology?
Testing methodologies are specific strategies for testing all of the pieces of your software to make sure it behaves as expected. These strategies include many ways to test software, such as unit testing, integration testing, performance testing, and more. In this article, we’ll take a closer look at testing practices that use a test-first approach to software development.

## Why Use Software Testing Methodologies?
There are many reasons that organizations adopt software testing methodologies:

Software errors can cost companies resources such as money and users.
Testing results in better reliability.
Testing can provide a better end-user experience.
Failing tests help indicate which part of the software is not working when bugs occur
Overall, the primary goal of testing is to make software development more efficient, reliable, and future-proof.

## Different types of methodologies
Some software testing methodologies prioritize writing test cases before writing the code those test cases will validate. Those types include:

Test-driven Development (TDD)
Behavior-driven Development (BDD)
Specification by Example (SBE)
Acceptance Test-driven Development (ATDD)
These methodologies are particularly relevant for teams that use an agile, or iterative, approach to software development. Teams don’t have to pick one testing solution and stop there — several approaches can be used by the same team at different stages of development. The following sections take a closer look at TDD and BDD and where they fit into the development cycle to give some more context on testing methodologies in practice.

## Test-driven development
Testing doesn’t necessarily have to occur after code has been written. Test-driven development is a methodology that flips the order, where tests are written before the functioning code is written. By writing tests in this order, test cases can start with the definition of their purpose, or use case.

Those use cases define the specification and documentation on what actions are to be supported by new code. TDD tests look at the components of code, like functions and classes, as the smallest unit to test.

In practice, TDD can accelerate software development since it dictates short development cycles with direct test cases. There are many other benefits of test-driven development:

Developers can better understand the requirements of code, before writing the code.
Code that will never be executed won’t be added to the codebase.
The scope of development is reduced.
Code is written with testability in mind.
TDD is not the only testing methodology that takes a test-first approach to software development.

## Behavior-driven development
Another testing methodology that uses the strategy of writing test cases before code is behavior-driven development, or BDD. It is extremely similar to TDD in terms of process. Where these two methodologies differ is in why or when tests are written, what an individual unit is considered to be, and how the language of the test is composed.

Since BDD tests are driven by behavior, the language of the test cases are simplified and written via collaboration between engineers, product owners, and other stakeholders, to ensure the specified behaviors make sense from a user perspective.

It can be said that BDD is more specific than TDD. Changes to the code base, such as changing the design of the code, will not occur unless there is a relevant change in the product. Since those changes are feature-related, the unit of tests is called a “feature.” Test cases are related to whether or not the feature works, rather than if the individual functions or classes you are writing to develop features work. Altogether, the tests are about how the product behaves — not the nitty-gritty technical details.

## Review

Automated testing makes code production more reliable thanks to the ease of running frequent tests on all new and old code in a software application.
Software companies don’t need to pick a singular software testing methodology — they can be combined and used at various stages during software development.
Some organizations take a test-first approach to software development, with testing methodologies such as TDD and BDD being the first step of code production.
Since software errors can cost businesses money and customer trust, testing is an integral part of the development process and used in some flavor by every software company.
As you continue with testing content, you’ll see TDD as the main methodology we teach (such as this course). Now you have some insight into what TDD is and how it can be used as an example of how to guide the software development process!

## Introduction
Testing is an essential part of development. When used properly, testing can catch and identify issues with your implementation code before you deploy it to users. Instead of testing every function manually, developers automate their tests with a test framework.

Developers use test frameworks to organize and automate tests that provide useful feedback when errors occur. In this lesson we will use the Mocha (https://mochajs.org/) test framework to write tests against JavaScript methods.


## Install Mocha 

npm init
npm install mocha -D
-D signifies that this package is a development dependency and will show up under the devDependecies section in package.json. This means that the package will only be included in development mode and will not be included in the production bundle.

After installing Mocha as a dependency we can run it in two ways.

The first (and more tedious) method is to call it directly from node_modules:

$ ./node_modules/mocha/bin/mocha

The second (and recommended) method is to add a script to package.json. In the scripts object in package.json, set the value of "test" to mocha. It should look like this:

"scripts": {
  "test": "mocha"
}

Now you can call Mocha with the following command:

$ npm test

Instead of manually running each test in the test directory, you can use this command to run the full test suite automatically.

## describe and it blocks
In Mocha we group tests using the describe function and define tests using the it function. These two functions can be used to make your test suite complete, maintainable, and expressive in the following ways:

Structure your test suite: you can organize tests into nested groups that reflect the structure of your implementation code.

Provide informative messages: you can define your tests using human-readable strings.

If you are testing a Math object with the method .max, you could use the following test code.

describe('Math', () => {
  describe('.max', () => {
    it('returns the argument with the highest value', () => {
      // Your test goes here
    });
    it('returns -Infinity when no arguments are provided', () => {
      // Your test goes here
    });
  });
});

Both the describe and it functions accept two parameters: a descriptive string and a callback function. Though the functions are flexible, they are commonly used in the structure above: nest describe blocks to resemble the structure of your implementation code and write individual tests in it blocks. This makes your test suite isolated, maintainable, and expressive.

## assert
In the last exercise, you learned how to organize and automate tests using the Mocha test framework. To write the tests themselves, we can use the assert.ok method provided by Node.js.

In programming, a test compares an expected outcome to an actual outcome. For example, we expect the outcome of the following code…

const a = 1 + 2;

…to be: a has a value of 3.

To test the value saved to a with plain JavaScript, you would need to write a conditional statement comparing a to the expected result. Inside the statement, you would construct an error when the actual outcome does not match the expected.

if (a !== 3) {
  throw 'Test failed! a is not 3'
} 

assert.ok() allows you to compare values and throw errors as needed using one function call. The small, human-readable format of the functions will help you make a more expressive test suite.

As a Node module, assert can be imported at the top of your files with

const assert = require('assert');

You call assert functions like this:

assert.ok(a === 3);

In this case a === 3 evaluates to true, so no error is thrown.

If an argument passed to assert.ok() evaluates to false, an AssertionError is thrown. The error communicates to Mocha that a test has failed, and Mocha logs the error message to the console.

## Setup, Exercise, and Verify
In this exercise you will be separating a test into setup, exercise, and verify phases. This distinct and well-defined separation of steps makes your test more reliable, maintainable, and expressive.

The phases are defined as follows:

Setup - create objects, variables, and set conditions that your test depends on

Exercise - execute the functionality you are testing

Verify - check your expectations against the result of the exercise phase. You can use the assert library here

Clear separation of each phase makes a test easier to read, change, and validate.

## Teardown
So far, we’ve been writing just one test using a single it() block. However, in most situations, we will need to write many tests for a particular feature that get executed in succession.

Running multiple tests can introduce issues if the tests make changes to the testing environment: changes to the environment in one test might affect the next test. Some common changes to an environment include:

altering files and directory structure
changing read and write permissions on a file
editing records in a database
To address this issue, we often add a teardown step to the end of our tests. The teardown phase makes our tests isolated by resetting the environment before the next test runs. This provides two key benefits:

Changes to the environment caused by one test do not affect the other tests.
Isolated tests can be executed in any order!
Note: In some cases — including the previous exercises  — the teardown phase isn’t needed because there are no conditions to reset. 

## Hooks
Over the last two exercises, we learned about the four main phases of a test: setup, execute, verify, and teardown. In the last exercise, you may have noticed that the setup and teardown steps were identical between tests.

While execution and verification are unique to each test, setup and teardown are often similar or even identical for multiple tests within a test suite. The Mocha test framework provides functions that enable us to reduce repetition, simplify the scope of each test, and more finely control the execution of our tests.

These functions (also referred to as hooks) are:

beforeEach(callback) - callback is run before each test
afterEach(callback) - callback is run after each test
before(callback) - callback is run before the first test
after(callback) - callback is run after the last test
Each hook accepts a callback to be executed at various times during a test. The before... hooks naturally happen before tests and are useful for separating out the setup steps of your tests. Meanwhile, the after... hooks are executed after tests and are useful for separating out the teardown steps of your tests.

describe('messing around with hooks', () => {

  let testValue; // Variable used by both tests

  beforeEach(() => {
    testValue = 5;
  });

  it('should add', () => {
    // testValue = 5 <-- moved to beforeEach()
    testValue = testValue + 5;
    assert.equal(testValue, 10);
  });

  it('should multiply', () => {
    // testValue = 5 <-- moved to beforeEach()
    testValue = testValue * 5;
    assert.equal(testValue, 25);
  });

});

In this example, while each it() block could have set the testValue to 5, using the beforeEach() hook allows us to avoid that repetition while keeping each test isolated.

Keep in mind that not all setup and teardown steps should be included in these hooks. Occasionally, you may find that you need to perform some unique setup or teardown for a single test that you don’t want to include in other tests.

## Introduction assert
A good test framework is fast, complete, reliable, isolated, maintainable, and expressive. In this lesson you will learn how to use Node’s assert library to write more expressive tests.

An expressive test is easy to read and descriptive, making it useful as a form of documentation for your implementation code. One way to make a test more expressive is clarifying its verify phase — the step where expected outcome is compared to actual outcome.

Node.js provides a library called assert with methods that help you write more expressive verification code. You can use the methods in this library in place of conditional statements to write less code and use human-readable language. It can be used within the Mocha testing framework, and you will be using both throughout this lesson.

## assert.ok
As a Node module, assert can be imported at the top of your files with

const assert = require('assert');

The functions in the assert library compare values and throw errors as needed using one function call. The small, human-readable format of the functions will help you make a more expressive test suite.

assert.ok(6 - 1 === 5);

In this case 6 - 1 === 5 evaluates to true, so no error is thrown.

If an argument passed to assert.ok() evaluates to false, an AssertionError is thrown. The error communicates to Mocha that a test has failed, and Mocha logs the error message to the console.

## assert.equal
You can use assert.ok() for most verifications, but sometimes it can be difficult to determine the condition you are evaluating.

Read the example code below. Will this assertion throw an error?

const landAnimals = ['giraffe', 'squirrel'];
const waterAnimals = ['shark', 'stingray'];

landAnimals.push('frog');
waterAnimals.push('frog');

assert.ok(landAnimals[2] == waterAnimals[2]);

The above assertion is checking for equality. In order to understand this you must evaluate the entire expression within the parentheses of .ok().

You can instead use assert.equal() which does the == comparison for us.

In the example below, the two methods achieve the same outcome.

assert.ok(landAnimals[2] == waterAnimals[2]);
assert.equal(landAnimals[2], waterAnimals[2]);

The second line is more expressive: instead of parsing the entire statement, a reader only needs to read the first two words to know the test is verifying equality!

## assert.strictEqual
Take a look at the code below. Will these assertions throw errors?

const a = 3;
const b = '3';
assert.ok(a == b);
assert.ok(a === b);

The first assertion will not throw an error because it uses loose (==) equality. It performs a type conversion when comparing two things.
The second will throw an error because it uses strict (===) equality. It returns false if the types differ.
If you need to be strict in evaluating equality, you can use assert.strictEqual().

assert.equal() performs a == comparison
assert.strictEqual() performs a === comparison
Compare the following code to the first example. This code performs the same verifications, but it is more expressive. Without parsing any logic, a reader would know the intention of your tests by reading the method names.

const a = 3;
const b = '3';
assert.equal(a, b);
assert.strictEqual(a, b);

July 2021 Update: the assert documentation recommends always using assert.strictEqual() instead of assert.equal().

Fist example is using a loose equal comparison, the second example uses strict

const assert = require('assert');

describe('-', () => {
  it('returns the difference of two values', () => {
    const bigNum = 100;
		const smallNum = 4;
		const expected = '96';
    
    const result =  bigNum - smallNum;

    // Write assertion here
    assert.equal(result, expected);
  });
});


const assert = require('assert');

describe('-', () => {
  it('returns the difference of two values', () => {
    const bigNum = 100;
		const smallNum = 4;
		const expected = 96;
    
    const result =  bigNum - smallNum;

    // Write assertion here
    assert.strictEqual(result, expected);
  });
});

## assert.deepEqual I
Do you think these assertions will throw errors?

const a = {relation: 'twin', age: '17'};
const b = {relation: 'twin', age: '17'};
assert.equal(a, b);
assert.strictEqual(a, b);

Both assertions will throw an error because distinct objects are not considered equal when using either loose or strict equality in JavaScript.

If you need to compare the values within two objects, you can use assert.deepEqual(). This method compares the values of each object using loose (==) equality.

The following code will not throw an error…

assert.deepEqual(a, b);

…and you can confirm by manually comparing the relation and age properties of each object.

a.relation == b.relation;
a.age == b.age;

## assert.deepEqual II
In the last exercise you used deepEqual() to compare the values of two objects with loose equality. Arrays are also objects, so deepEqual() also compares their values with loose equality.

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, '3'];

assert.deepEqual(arr1, arr2); // No error
assert.deepEqual(arr1, arr3); // No error

If you’d like to learn more about deepEqual(), the documentation is available here.

## Other assert methods
Node’s assert library includes more than the four methods covered so far. You can find them all in the Node.js documentation. https://nodejs.org/api/assert.html

Many of the methods can be implemented using other methods, like using assert.ok(1 == 1) to implement assert.equal(1,1). Although this can be used for many types of tests, more descriptive functions like assert.equal, assert.strictEqual, and assert.deepEqual allow us to be more expressive: the expected functionality of the implementation code is clear to anyone reading your tests.
