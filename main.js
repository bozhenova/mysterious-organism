"use strict";

(function () {
  // Returns a random DNA base
  const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
  };

  // Returns a random strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };

  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum,
      dna,
      mutate() {
        const randIndex = Math.floor(Math.random() * this.dna.length);
        let newBase = returnRandBase();
        while (this.dna[randIndex] === newBase) {
          newBase = returnRandBase();
        }
        this.dna[randIndex] = newBase;
        return this.dna;
      },
      compareDNA(object) {
        let similarities = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === object.dna[i]) {
            similarities++;
          }
        }
        console.log(`Specimen ${this.specimenNum} and specimen 
        ${object.specimenNum} have ${((similarities / this.dna.length) * 100).
            toFixed()}% DNA in common.`);
      },
      willLikelySurvive() {
        const survivalRate = this.dna.filter(base => base === "C" ||
          base === "G");
        return (survivalRate.length / this.dna.length) * 100 >= 60;
      },
      complementStrand() {
        const complStrand = [];
        this.dna.forEach(base => {
          start:
          switch (base) {
            case 'A':
              complStrand.push('T');
              break start;
            case 'T':
              complStrand.push('A');
              break start;
            case 'C':
              complStrand.push('G');
              break start;
            case 'G':
              complStrand.push('C');
              break start;
          }
        });
        return complStrand;
      }
    };
  };

  const createSpecimenArray = () => {
    const specimenArray = [];
    for (let i = 1; i <= 30; i++) {
      let pAequor = pAequorFactory(i, mockUpStrand());
      if (pAequor.willLikelySurvive()) {
        specimenArray.push(pAequor);
      }
    }
    return specimenArray;
  };

  const pAequor = pAequorFactory(1, mockUpStrand());
  createSpecimenArray();
  console.log(pAequor.dna);
  console.log(pAequor.complementStrand());
})();
