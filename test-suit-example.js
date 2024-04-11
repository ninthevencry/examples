const {assert} = require('chai');

describe('User visits index', () => {
  describe('to post an order', () => {
    /*
     * Run `npm start` in the terminal and reload the page. Expect the webpage to be visible and the order form to be empty.
     */
    it('starts with a blank order (Behavior 1)', () => {
      browser.url('/');

      assert.equal(browser.getText('#deliver-to span'), '');
      assert.equal(browser.getText('#cake-type span'), '');
      assert.equal(browser.getText('#fillings span'), '');
      assert.equal(browser.getText('#size span'), '');
    });

    /*
     * Type a name and click "Place Order". Expect "Deliver to:" to display the submitted name. (You may need to scroll down.)
     */
    it('displays the submitted name (Behavior 2)', () => {
      const name = 'Hungry Person';

      browser.url('/');
      browser.setValue('#name', name);
      browser.click('#submit-order');
      browser.url('/');

      assert.include(browser.getText('#deliver-to'), name);
    });

    it('does not overwrite name if blank name submitted (Behavior 3)', () => {
      const name = 'Hungry Person';

      browser.url('/');
      browser.setValue('#name', name);
      browser.click('#submit-order');
      browser.url('/');
      browser.click('#submit-order');
      browser.url('/');

      assert.include(browser.getText('#deliver-to'), name);
    });

    /*
     * Select a cake type and place the order. Expect "Cake" to display the selected type.
     */
    it('displays the selected cake type (Behavior 4)', () => {
      const cakeType = 'Whole Wheat';

      browser.url('/');
      browser.click('#whole-wheat');
      browser.click('#submit-order');
      browser.url('/');

      assert.include(browser.getText('#cake-type'), cakeType);
    });

    /*
     * Check some fillings. Expect "Fillings" to display your selection.
     */
    it('displays multiple fillings (Behavior 5)', () => {
      const firstChoice = 'Strawberries';
      const secondChoice = 'Banana';

      browser.url('/');
      browser.click('#strawberries');
      browser.click('#banana');
      browser.click('#submit-order');
      browser.url('/');

      assert.include(browser.getText('#fillings'), firstChoice);
      assert.include(browser.getText('#fillings'), secondChoice);
    });

    /*
     * Choose a stack size. Expect "Pancake Count:" to display the number equivalent to the stack size, e.g. "Double" is "2".
     */
    it('displays the number equivalent to the stack size (Behavior 6)', () => {
      const optionText = 'Septuple Stack';
      const optionNum = '7';

      browser.url('/');
      browser.selectByVisibleText('#select-stack', optionText)
      browser.click('#submit-order');
      browser.url('/');

      assert.include(browser.getText('#size'), optionNum);
    });
	});

  // Add "clear order" test here
  describe('to clear an order', () => {
  it('deletes the selected options', () => {
const name = 'Indecisive Person';
      const time = '10:00';

      browser.url('/');
      browser.setValue('#name', name);
      browser.selectByVisibleText('#select-pickUp', time)
      browser.click('#submit-order');
      browser.click('#clear-order');
      browser.url('/');

      assert.equal(browser.getText('#deliver-to'), '');
      assert.equal(browser.getText('#cake-type'), '');
      assert.equal(browser.getText('#fillings'), '');
      assert.equal(browser.getText('#size'), '');
      assert.equal(browser.getText('#pickUp'), '');
  });
});

});

/* different behavior tests go here */
/*
fs.appendFileSync(path, str) creates a new file at path with the string str as content. If a file at path exists, the string str will be appended to the end.
fs.readFileSync(path) returns the contents of the file found at path.
The first test found in this exercise verifies that we can use fs.appendFileSync() to create a file called ./message.txt with the string 'Hello Node.js'. The second test verifies that we can do the same but with an empty string.
*/
const assert = require('assert');
const fs = require('fs');
let path, str;
 
describe('appendFileSync', () => {
  it('creates a new file with a string of text', () => {
 
   // Setup
   path = './message.txt';
   str = 'Hello Node.js';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
 
   // Teardown: restore file
    fs.unlinkSync(path);
 });
 
 it('creates a new file with a string of text', () => {
 
   // Setup
   path = './message.txt';
   str = '';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
 
   // Teardown: restore file
   fs.unlinkSync(path);
 });
});

/*
Hooks
*/

const assert = require('assert');
const fs = require('fs');
let path, str;
 
describe('appendFileSync', () => {
  // Write hooks above the tests
  before(() => {
    path = './message.txt';
  });
  afterEach(() => {
    fs.unlinkSync(path);
  });  

  it('writes a string to text file at given path name', () => {
 
   // Setup
   str = 'Hello Node.js';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
 });
 
 it('writes an empty string to text file at given path name', () => {
 
   // Setup
   str = '';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
  
 });
});

//Rooster example

// Define a rooster
Rooster = {};

// Return a morning rooster call
Rooster.announceDawn = () => {
  return 'cock-a-doodle-doo!';
}

// Return hour as string
// Throws Error if hour is not between 0 and 23 inclusive
Rooster.timeAtDawn = (hour) => {
  if (hour < 0 || hour > 23) {
    throw new RangeError;
  } else {
    return hour.toString();
  };
}

module.exports = Rooster;

/////-------------------------

const assert = require('assert');
const Rooster = require('../index.js');

describe('Rooster', () => {

  describe('.announceDawn ', () => {

    it('returns a rooster call', () => {
      // Define expected output
      const expected = 'cock-a-doodle-doo!';

      // Call Rooster.announceDawn and store result in variable
      const retVal = Rooster.announceDawn();

      // Use an assert method to compare actual and expected result
      assert.equal(retVal, expected);
    });

  });

  describe('.timeAtDawn ', () => {

    it('returns its argument as a string', () => {
      // Define expected output
      const inputNumber = 12;
      const expected = '12';

      // Call Rooster.announceDawn and store result in variable
      const actual = Rooster.timeAtDawn(inputNumber);

      // Use an assert method to compare actual and expected result
     assert.strictEqual(actual, expected);
    });

    it('throws an error if passed a number less than 0', () => {
      // Define expected output
      const inputNumber = -1;
      const expected = RangeError;

      // Use an assert method to compare actual and expected result
     assert.throws(() => {
      Rooster.timeAtDawn(inputNumber)
     }
     , expected);
      });

    it('throws an error if passed a number greater than 23', () => {

      const inputNumber = 24;
      const expected = RangeError;

          assert.throws(() => {
      Rooster.timeAtDawn(inputNumber)
     }
     , expected);
    });

  });


});
