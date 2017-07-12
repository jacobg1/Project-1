/* global $ */
class SimonModel {
  constructor () {
    // create empty array for generated pattern
    this.simonPattern = []
    // create empty array for user input pattern
    this.userPattern = []
    // set level, this will increase in increments of one
    this.level = 0
    this.clicks = -1
    this.match = false
    // this.lastSimon = this.simonPattern[this.simonPattern.length - 1]
    // this.lastUser = this.userPattern[this.userPattern.length - 1]
  }
  setLevel () {
    // increase level by 1
    this.level += 1
  }
  setSimonPattern () {
    this.text = ''
    this.possibleText = 'bgrp'

    // associate random # with value from initialPattern array
    for (let i = 0; i <= this.level; i++) {
      this.text = this.possibleText.charAt(Math.floor(Math.random() * this.possibleText.length))
    }

    // add random generated letter to simonPattern
    this.simonPattern.push(this.text)
  }
  addToUserPattern (x) {
    // add user choice to user pattern
    this.userPattern.push(x)
  }
  // shiftUserPattern () {
  //    this.userPattern.shift()
  //  }
  // create method to compare simonPattern to userPattern
  comparePattern () {
    // set winning condition
    if (this.userPattern.length === this.simonPattern.length) {
      for (let t = 0; t < this.simonPattern.length; t++) {
        // compare
        if (this.userPattern[t] === this.simonPattern[t]) {
          console.log('level' + this.level)
          console.log('clicks' + this.clicks)
          this.userPattern = []
          this.setSimonPattern()
          console.log('compare check pass')
          console.log('simon patternCP:')
          console.log(this.simonPattern)
          console.log('user patternCP:')
          console.log(this.userPattern)
        }
      }
    }
  }
}
// arr.forEach ((val) => {
// find dom circle for each value and change class
// flashCircle(val)
// }
// check only after lengths are the same dont check until this
