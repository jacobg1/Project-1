/* global $ */
class SimonModel {
  constructor () {
    // create empty array for generated pattern
    this.simonPattern = []
    // create empty array for user input pattern
    this.userPattern = []
    // set level, this will increase in increments of one
    this.level = 0
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
    for (let t = 0; t < this.simonPattern.length; t++) {
    // compare
      if ((this.userPattern[t]) === (this.simonPattern[t])) {
        // this.setSimonPattern()
        console.log('compare check fail')
        console.log('simon patternCP:')
        console.log(this.simonPattern)
        console.log('user patternCP:')
        console.log(this.userPattern)
      } else {
        console.log('compare check fail')
        console.log('simon patternCP:')
        console.log(this.simonPattern)
        console.log('user pattern:')
        console.log(this.userPattern)

      }
    }
  }

}
