// Created By: Jacob Bonner
// Created On: December 2020
// This program prints values that correlate with flight tests for a biplane
//   and a boeing jet.

// Importing the airplane class and jet subclass from another file
const Airplane = require("./airplane.js");
const Jet = require("./jet.js");

// Creating a biplane and setting its speed
let biplane = new Airplane();
biplane.setSpeed(212);
console.log(biplane.getSpeed());

// Creating a boeing jet and setting its speed
let boeing = new Jet();
boeing.setSpeed(422);
console.log(boeing.getSpeed());

// Setting counter variable
let counter = 0;

// Loop that tests acceleration on each aircraft
while (counter < 4) {
  // Accelerating boeing plane
  boeing.accelerate();
  console.log(boeing.getSpeed());
  if (boeing.getSpeed() > 5000) {
    // Accelerating the biplane should the boeing plane speed be over 5000
    biplane.setSpeed(biplane.getSpeed() * 2);
  } else {
    // Accelerating the boeing aircraft
    boeing.accelerate();
  }

  // Increasing the counter by 1
  counter++;
}

// Printing out the final speed of the biplane
console.log(biplane.getSpeed());
