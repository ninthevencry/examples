// This function returns true 50% of the time.
let randomSuccess = () => {
    let num = Math.random();
    if (num < .5) {
        return true;
    } else {
        return false;
    }
};

// This function returns a promise that resolves half of the time and rejects half of the time
let cookBeanSouffle = () => {
    return new Promise((resolve, reject) => {
        console.log('Fingers crossed... Putting the Bean Souffle in the oven');
        setTimeout(() => {
            let success = randomSuccess();
            if (success) {
                resolve('Bean Souffle');
            } else {
                reject('Dinner is ruined!');
            }
        }, 1000);
    });
};

let cookBeans = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('beans');
        }, 1000);
    });
}

let steamBroccoli = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('broccoli');
        }, 1000);
    });
}

let cookRice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('rice');
        }, 1000);
    });
}

let bakeChicken = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('chicken');
        }, 1000);
    });
}

module.exports = { cookBeans, steamBroccoli, cookRice, bakeChicken, cookBeanSouffle };
