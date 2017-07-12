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
    this.simonPattern.push(this.text)
    // add random generated letter to simonPattern
  }
  addToUserPattern (x) {
    // add user choice to user pattern
    this.userPattern.push(x)
  }
  playGame () {
    this.clicks = -1
    this.userPattern = []
    this.setSimonPattern()
    console.log(this.simonPattern);
  }
  // create method to compare simonPattern to userPattern
  comparePattern () {
    // set winning condition
    // if (this.userPattern.length === this.simonPattern.length) {
      // for (let t = 0; t < this.simonPattern.length; t++) {
        // compare
    if (this.userPattern[this.clicks] !== this.simonPattern[this.clicks]) {
      console.log('level' + this.level)
      console.log('clicks' + this.clicks)
      console.log('you lose')
      this.simonPattern = []
      this.playGame()
      console.log('simon patternCP:')
      console.log(this.simonPattern)
      console.log('user patternCP:')
      console.log(this.userPattern)
    } else {
      if (this.userPattern.length === this.simonPattern.length) {
        console.log('you win')
        this.level++
        console.log(this.level);
        this.playGame()

      }
    }
  }

    }
  // }
// }
// arr.forEach ((val) => {
// find dom circle for each value and change class
// flashCircle(val)
// }
// check only after lengths are the same dont check until this
