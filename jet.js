// Created By: Jacob Bonner
// Created On: December 2020
// This class is a subclass of Airplane called jet.

// Importing the airplane class from another file
const Airplane = require("./airplane.js");

// This airplane subclass is a jet
class Jet extends Airplane {
  // Constructor that defines fields
  constructor() {
    super();
    this.multiplier = 2;
  }

  // This method sets the speed of the jet
  setSpeed(speed) {
    super.setSpeed(speed * this.multiplier);
  }

  // This method accelerates the jet
  accelerate() {
    super.setSpeed(this.getSpeed() * 2);
  }
}

// Exporting the subclass
module.exports = Jet;
