class GuessingGame {
  constructor() {
  this.min = null;
  this.max = null;
  this.candidate = null;
  }
  
  setRange(min, max) {
  this.min = min;
  this.max = max;
  }
  
  guess() {
    this.candidate = Math.ceil((this.max+this.min)/2);
    return this.candidate;
  }
  
  lower() {
    this.max = this.candidate;
  }
  
  greater() {
    this.min = this.candidate;
  }
  }
module.exports = GuessingGame;
