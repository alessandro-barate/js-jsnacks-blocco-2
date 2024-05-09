"use strict";

const arrayA = [1, 2, 3, 4, 5, 6];

function rimuoviDallaCoda(array) {
  let arrayB = [];
  let arrayLength = array.length - 1;

  for (let i = 0; i < arrayLength; i++) {
    arrayB[i] = array[i];
  }

  return arrayB;
}

rimuoviDallaCoda(arrayA);

let finalArray = rimuoviDallaCoda(arrayA);

console.log(finalArray);
