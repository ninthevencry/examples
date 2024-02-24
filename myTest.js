console.log("I’m learning about");
setTimeout(() => { console.log("Event Loop"); }, 2000);
console.log("the");

const canIVote = age => {
    /*  if (age >= 18) {
        return true;
      } else {
        return false;
      }*/
      //example of conditional operator
      return age >= 18 ? true : false;
    }
    
    // Uncomment the line below when you're ready to try out your function
     console.log(canIVote(10)) // Should print true

     const agreeOrDisagree = (string1, string2) => {
        return string1 === string2 ? "You agree!" : "You disagree!";
      }
      
      // Uncomment the line below when you're ready to try out your function
      console.log(agreeOrDisagree("yep", "yep")) 

    const calculateWeight = (earthWeight, planet) => {
        let data = ['mercury',0.378,'venus',0.907,'mars',0.377,'jupiter',2.36,'saturn',0.916];
        let idx = data.indexOf(planet.toLowerCase());
        if (idx === 0) {
            return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
        } else {
            return earthWeight * data[idx + 1];
        }      
    }

    const truthyOrFalsy = (myval) => { 
        return myval ? true : false;
      }

      const isEven = (n) => { 
        return n % 2 == 0 ? true : false;
      }
    
      const howOld = (age, year) => {
        let today = new Date();
        const currentYear = today.getFullYear();
        const birthYear = currentYear - age;
        if (year > currentYear) {
          let newAge = age + (year - currentYear);
          return `You will be ${newAge} in the year ${year}`;
        }
        if (year < birthYear) {
          let numYears = birthYear - year;
          return `The year ${year} was ${numYears} years before you were born`;
        }
        if (year > birthYear && year < currentYear) {
          let newAge = year - birthYear;  
          return `You were ${newAge} in the year ${year}`;
        }
        if (year === currentYear) {
            return `You are ${age} in the year ${year}`;    
        }        
      }
      
      console.log(howOld(51,1965));      

      const teachers = [
        { firstName: 'Candid', lastName: 'Cameron', course: 'Computer Science'},
        { firstName: 'Emphatic', lastName: 'Emmanuel', course: 'Economics'},
        { firstName: 'Humble', lastName: 'Henry', course: 'Humanity'},
        { firstName: 'Mystic', lastName: 'Mia', course: 'Mathematics'},
        { firstName: 'Sensible', lastName: 'Sasha', course: 'Science'}
    ];
    
    const courses = teachers.map((teacher) => {
        return teacher.course;
    });
    
    console.log(`\nCourse list:\n`);
    courses.forEach((course, i) => {
        console.log(`${i + 1}) ${course}`);
    });
    
    let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

    let storyWords = story.split(' ');
    let unnecessaryWord = 'literally';
    let misspelledWord = 'beautifull';
    let badWord = 'freaking';
    let count = 0;
    let badWordIndex = storyWords.findIndex(word => word === badWord);
    console.log(badWordIndex);
    storyWords[badWordIndex] = "really";
    
    storyWords = storyWords.filter(word => word !== unnecessaryWord);
    
    storyWords= storyWords.map(word => word === misspelledWord ? "beautiful": word);
    
    storyWords= storyWords.map(word => word.length > 10 ? "test" : word);
    
    /*
    storyWords = storyWords.filter(checkWord);
    
    function checkWord(word) {
      return word !== "literally";
    }
    */
    storyWords.forEach((word, count) => {
        console.log(`${count + 1}) ${word}`);
    });
    
    let lengthCheck = storyWords.every(word => word.length <= 10);
    
    console.log(lengthCheck);
    
    console.log(storyWords.join(' '));
    
    const reverseArray = (yourArray) => {
      let newArray = [];
      yourArray.forEach((val) => { newArray.unshift(val) });
      return newArray;
    }
    
    const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

    const politelyDecline = (veg) => {
          console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
    }
    
    // Write your code here:
    
    const declineEverything = anArray => {
    
      anArray.forEach(politelyDecline);
    
    }
    
    declineEverything(veggies);
    
    const acceptEverything = anArray => {
      anArray.forEach(val => {
        console.log(`Ok, I guess I will eat some ${val}.`);
      });
    }
    
    acceptEverything(veggies);    

    const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:

const squareNums = (anArray) => {
  return anArray.map(toSquare);
}

squareNums(numbers);

// Write your code here:

const sortYears = (anArray) => {
  //descending order
  return anArray.sort((a, b) => b - a);
}

// Feel free to uncomment the below code to test your function:

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

const justCoolStuff = (a1, a2) => {
  return a1.filter(val => a2.includes(val));
}

// Feel free to uncomment the code below to test your function

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))

const isTheDinnerVegan = (anArray) => {
  return anArray.every(val => val.source === "plant");
}

// Feel free to comment out the code below to test your function

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))

const dogFactory = (name, breed, weight) => {
  return { name: name, breed: breed, weight: weight };
}
console.log(dogFactory('Joe', 'Pug', 27));

// Write function below

const groceries = (myArray) => {
  let returnArray = [];
  for (i = myArray.length - 1; i >= 0; i--) {
//    console.log(i);
//    console.log(myArray[i].item);
    returnArray.unshift(myArray[i].item);
    if (i === myArray.length - 1 && myArray.length > 1) {
      returnArray.unshift("and");
    } else if (i !== 0) {
      returnArray.unshift(",");
    };
  }
  return returnArray.join(" ").replace(" ,", ",");
}

let retVal = groceries( [{item: 'Bread'}, {item: 'Butter'}] );
console.log(retVal);

retVal = groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );

console.log(retVal);

retVal = groceries( [{item: 'Cheese Balls'}] );

console.log(retVal);