// const { checkInventory } = require('./inventory.js');

// const order = [['sunglasses', 1], ['bags', 2]];

// // Write your code below:
// const handleSuccess = (resolvedValue) => {
//     console.log(resolvedValue);
// };

// const handleFailure = (rejectionReason) => {
//     console.log(rejectionReason);
// };

//checkInventory(order).then(handleSuccess, handleFailure);
//checkInventory(order).then(handleSuccess).catch(handleFailure);

const { checkAvailability, checkInventory, processPayment, shipOrder } = require('./inventory.js');

// const order = {
//     items: [['sunglasses', 1], ['bags', 2]],
//     giftcardBalance: 79.82
// };

// checkInventory(order)
//     .then((resolvedValueArray) => {
//         // Write the correct return statement here:
//         return processPayment(resolvedValueArray);
//     })
//     .then((resolvedValueArray) => {
//         // Write the correct return statement here:
//         return shipOrder(resolvedValueArray);
//     })
//     .then((successMessage) => {
//         console.log(successMessage);
//     })
//     .catch((errorMessage) => {
//         console.log(errorMessage);
//     });

//     const {checkAvailability} = require('./library.js');

const onFulfill = (itemsArray) => {
    console.log(`Items checked: ${itemsArray}`);
    console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
    console.log(rejectionReason);
};

// Write your code below:
const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.');
const checkBags = checkAvailability('bags', 'Favorite Supply Co.');

// Promise.all([checkSunglasses, checkPants, checkBags])
//     .then(onFulfill)
//     .catch(onReject);

let myPromises = Promise.all([checkSunglasses, checkPants, checkBags]);

myPromises
    .then(onFulfill)
    .catch(onReject);