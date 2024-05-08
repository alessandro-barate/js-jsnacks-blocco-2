"use strict";

const elementi = [1, 2, 3, 4, 5, 6, 7, 8];

let counter = 0;
let string;

while (elementi[counter] !== undefined) {
  string += elementi[counter];
  console.log(elementi[counter]);
  counter++;
  //console.log(string);
}
