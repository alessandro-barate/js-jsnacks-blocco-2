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

let string = stampa(array);

function stampa(input) {
  const inputLength = input.length;
  let result = "";

  for (let counter = 0; counter < inputLength; counter++) {
    //console.log(input[counter]);
    result += input[counter];

    if (counter < inputLength - 1) {
      result += ",";
    }
  }

  return result;
}

stampa(array);

let output = stampa(array);

console.log(`${"La stringa è"} ${output}`);
