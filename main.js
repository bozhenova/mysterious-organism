'use strict';

(function () {

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
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
    }
  }
}

const pAequor = pAequorFactory(1, mockUpStrand());
console.log(pAequor);
console.log(pAequor.mutate());





}());







