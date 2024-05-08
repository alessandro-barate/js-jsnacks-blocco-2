"use strict";

const array = ["pane", "pasta", "acqua", "sale", "pomodoro", "tonno", "pepe"];

const inputElement = "pane";

for (let counter = 0; counter < array.length; counter++) {
  if (array[counter] === inputElement) {
    console.log(counter);
  }
}
