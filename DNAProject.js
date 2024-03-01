// Returns a random DNA base
const returnRandBase = (existingBase = 'X') => {
  const dnaBases = ['A', 'T', 'C', 'G']
  let r = 4;
  if (existingBase !== "X") {
    dnaBases.splice(dnaBases.indexOf(existingBase),1);
    r = 3;
  }
  return dnaBases[Math.floor(Math.random() * r)] 
}

//console.log(returnRandBase("T"));

//create samples
/*
let dnaSamples = [];
for (j = 0; j <= 15; j ++) {
  let baseArray = [];
  for (i = 0; i <= 3; i ++) {
    baseArray.push(returnRandBase());
  }
  dnaSamples.push(baseArray);
}
*/
//console.log(dnaSamples);

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (orgNo, dnaSamples) => {
    return {
        _specimenNum : orgNo,
        _dna : dnaSamples,
        get dna() {
          return this._dna;
        },
        mutate() {
          const idx = Math.floor(Math.random() * 15);
          this._dna[idx] = returnRandBase(this._dna[idx]);

        },
        getComparisonDNA(dnaObj) {
          let percent = 0;
          let fraction = 100 / this._dna.length;
          for (i=0;i<=this._dna.length;i++) {
            if (this._dna[i] === dnaObj.dna[i]) {
              percent += fraction;
            }
          }
          return Math.round(percent);
        },
        compareDNA(dnaObj) {
          console.log(this.getComparisonDNA(dnaObj) + "%");
        },
        willLikelySurvive() {
          let percent = 0;
          let fraction = 100 / this._dna.length;
          for (i=0;i<=this._dna.length;i++) {
            if (this._dna[i] === "C" || this._dna[i] === "G" ) {
              percent += fraction;
            }
          }
          return Math.round(percent) >= 60 ? true : false;
        },
    }
}

//let dnaSample = mockUpStrand();
//console.log(dnaSamples);

const dnaSamples = [];

do {
  let dnaObj = pAequorFactory(0,mockUpStrand());
  if (dnaObj.willLikelySurvive()) {
    dnaSamples.push(dnaObj);
  }
} while (dnaSamples.length <= 30);

dnaSamples.forEach(sample => {
  console.log(sample.willLikelySurvive());
  });

