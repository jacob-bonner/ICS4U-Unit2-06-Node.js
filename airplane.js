// Created By: Jacob Bonner
// Created On: December 2020
// This class creates an airplane.

class Airplane {
  // Constructor that defines fields
  constructor() {
    this.speed = 0;
  }

  // This method gets the speed of the airplane
  getSpeed() {
    return this.speed;
  }

  // This method sets the speed of the airplane
  setSpeed(speed) {
    this.speed = speed;
  }
}

// Exporting the class
module.exports = Airplane;
