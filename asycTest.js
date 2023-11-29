let { cookBeans, steamBroccoli, cookRice, bakeChicken, cookBeanSouffle } = require('./asyncLib.js');

// Write your code below:
const hostDinnerParty = async () => {
    try {
        console.log(await cookBeanSouffle() + ' is served!');
    } catch (error) {
        console.log(error);
        console.log('Ordering a pizza!');
    }
};

hostDinnerParty();

// Write your code below:
const serveDinner = async () => {
    let vegetablePromise = steamBroccoli();
    let starchPromise = cookRice();
    let proteinPromise = bakeChicken();
    let sidePromise = cookBeans();

    console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
};
serveDinner();

const serveDinnerAgain = async () => {
    let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);

    console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);
};

serveDinnerAgain();
