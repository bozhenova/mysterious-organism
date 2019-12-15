"use strict";

(function() {
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

  const pAequorFactory = (num, array) => {
    return {
      specimenNum: num,
      dna: array,
      mutate() {
        const randIndex = Math.floor(Math.random() * 15);
        let diffBase = returnRandBase();
        while (this.dna[randIndex] === diffBase) {
          diffBase = returnRandBase();
          continue;
        }
        this.dna[randIndex] = diffBase;
        return this.dna;
      },
      compareDNA(object) {
        let counter = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === object.dna[i]) {
            counter++;
          }
        }
        console.log(
          `Specimen ${this.specimenNum} and specimen ${
            object.specimenNum
          } have ${(
            (counter / this.dna.length) *
            100
          ).toFixed()}% DNA in common.`
        );
      },
      willLikelySurvive() {}
    };
  };

  const pAequor = pAequorFactory(1, mockUpStrand());
  const pAequor2 = pAequorFactory(2, mockUpStrand());
  pAequor.compareDNA(pAequor2);
})();
