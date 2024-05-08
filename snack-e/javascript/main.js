"use strict";

const arrayA = [1, 2, 3, 4, 5, 6];
const arrayB = [];

function rimuoviDallaCoda(array) {
  let numbers = [];

  for (let i = 1; i < array.length; i++) {
    numbers += array[i];
    //console.log(numbers);
  }
  return numbers;
}

rimuoviDallaCoda(arrayA);

let finalArray = rimuoviDallaCoda(arrayA);
console.log(finalArray);
