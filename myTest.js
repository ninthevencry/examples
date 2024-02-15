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