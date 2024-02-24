const menu = {
    _meal: "",
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === "string") {
        return this._meal = mealToCheck;
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === "number") {
        return this._price = priceToCheck;
      }
    },
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Todays meal is ${this._meal} for $${this._price}`;
      } else {
        return "Meal or price not set";
      }
    }
  };
  
  menu.meal = "test";
  menu.price = 0;
  console.log(menu.todaysSpecial);

  const team = {
    _players: [
      {firstName: 'bob', lastName: 'bob', age: 12},
      {firstName: 'bobby', lastName: 'bob', age: 22},
      {firstName: 'bobi', lastName: 'bob', age: 32},
    ],
    _games: [
      {oppenent: 'jets', teamPoints: 34, opponentPoints: 12},
      {oppenent: 'eagles', teamPoints: 45, opponentPoints: 22},
      {oppenent: 'tampa', teamPoints: 22, opponentPoints: 32},    
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirst, newLast, newAge) {
      let player = {
        firstName: newFirst,
        lastName: newLast,
        age: newAge
      }
      this._players.push(player);
    },
    addGame(newOp, newTP, newOpP) {
      let game = {
        oppenent: newOp,
        opponentPoints: newOpP,
        teamPoints: newTP
      }
      this._games.push(game);
    }
  }
  
  team.addPlayer("bob","cheese",56);
  console.log(team.players);
  
  team.addGame("bob",1,56);
  console.log(team.games);

  /* high order function */
  const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
    const checkA = val + 1;
    const checkB = func(val);
    console.log(checkA);
    console.log(checkB);
   // if (checkA === checkB) { return checkB } else { return 'inconsitent results' };
    return checkA === checkB ? checkB : 'inconsitent results';
  }
  
  console.log(checkConsistentOutput(addTwo,2));
  
// Write your code here:

const dogFactory = (name, breed, weight) => {
    return { 
        _name: name, 
        _breed: breed, 
        _weight: weight,
        get name() {
          return this._name;
        },
        get breed() {
          return this._breed;
        },
        get weight() {
          return this._weight;
        },
        set breed(breed) {
          this._breed = breed;
        },
        set name(name) {
          this._name = name;
        },
        set weight(weight) {
          this._weight = weight;
        },
        bark() {
          return "ruff! ruff!";
        },
        eatTooManyTreats() {
          this._weight += 1;
        }
        };
  }
  console.log(dogFactory('Joe', 'Pug', 27));
