"use strict";

const array = [
  "l",
  "i",
  "v",
  "u",
  "o",
  "i",
  "q",
  "u",
  "e",
  "i",
  "k",
  "i",
  "w",
  "i",
  "?",
];

let string = arrayToString(array);

function arrayToString(input) {
  for (let counter = 0; counter < input.length; counter++) {
    //console.log(input[counter]);
    let characters;
    characters += input[counter];
    return input[counter];
  }
}

arrayToString(array);

console.log(string);
