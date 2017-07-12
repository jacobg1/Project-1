/* global $ */
class SimonModel {
  constructor () {
    // create empty array for generated pattern
    this.simonPattern = []
    // create empty array for user input pattern
    this.userPattern = []
    // set level, this will increase in increments of one
    this.level = 1
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
    for (let i = 1; i <= this.level; i++) {
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
    if (this.userPattern.length === this.simonPattern.length && this.userPattern[this.clicks] === this.simonPattern[this.clicks]) {
      this.setSimonPattern()
      this.setLevel()
      this.userPattern = []
      console.log('compare check pass')
      console.log('simon patternCP:')
      console.log(this.simonPattern)
      console.log('user patternCP:')
      console.log(this.userPattern)
    } else if (this.userPattern[this.clicks] === this.simonPattern[this.clicks]) {
      this.comparePattern()
      return
      console.log('compare check fail')
      console.log('simon patternCP:')
      console.log(this.simonPattern)
      console.log('user pattern:')
      console.log(this.userPattern)
    } else {
      console.log('you lose')
    }
  }
}
// arr.forEach ((val) => {
// find dom circle for each value and change class
// flashCircle(val)
// }
//check only after lengths are the same dont check until this
