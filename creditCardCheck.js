/*
Create a function, validateCred() that has a parameter of an array. The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid. This function should NOT mutate the values of the original array.

To find out if a credit card number is valid or not, use the Luhn algorithm. Generally speaking, an algorithm is a series of steps that solve a problem — the Luhn algorithm is a series of mathematical calculations used to validate certain identification numbers, e.g. credit card numbers. The calculations in the Luhn algorithm can be broken down as the following steps:

Starting from the farthest digit to the right, AKA the check digit, iterate to the left.
As you iterate to the left, every other digit is doubled (the check digit is not doubled). If the number is greater than 9 after doubling, subtract 9 from its value.
Sum up all the digits in the credit card number.
If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it’s invalid.
*/
// All valid credit card numbers
//const valid0 = [4,5,3,9,6,8,9,8,8,7,7,0,5,7,9,8];

const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [8, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
const validateCred = (ccArray) => {
  let sumOfVal = 0;
  for (i = ccArray.length - 1; i >= 0; i--) {
    let val = ccArray[i];
    //console.log(val);
    if (i % 2 === 0) {
      val = val * 2;
      val = val > 9 ? val - 9 : val;
    } 
    //console.log(val);
    sumOfVal += val;
  }
  //console.log(sumOfVal);//ccArray[i]);
  return sumOfVal % 10 === 0 ? true : false;
}

const findInvalidCards = (credcards) => {
  let invalidCC = [];
  credcards.forEach(ccArray => {
    //console.log(validateCred(ccArray)
    if (!validateCred(ccArray)) {
      invalidCC.push(ccArray);
    }
  });
  return invalidCC;
}

let invalidCards = findInvalidCards(batch);
//let isValid = validateCred(batch[0]);
//console.log(isValid);

const idInvalidCardCompanies = (invalidCC) => {
  let ccCompany = [3,"Amex",4,"VISA",5,"Mastercard",6,"Discovery"];
  let ccInvalidComp = [];
  invalidCC.forEach(ccArray => {
    if (ccCompany.indexOf(ccArray[0]) === -1 && 
      !ccInvalidComp.includes("Company not found")) {
        ccInvalidComp.push("Company not found");
    } else if (!ccInvalidComp.includes(ccCompany[ccCompany.indexOf(ccArray[0])+1])) {
      ccInvalidComp.push(ccCompany[ccCompany.indexOf(ccArray[0])+1]);
    }
  });
  return ccInvalidComp;
}

console.log(idInvalidCardCompanies(invalidCards));