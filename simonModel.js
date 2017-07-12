/* global $ */
class SimonModel {
  constructor () {
    this.simonPattern = [] // create empty array for pattern from game
    this.userPattern = []   // create empty array for user input pattern
    this.level = 0          // set level, this
  }
  setSimonPattern () { // associate random # with value from initialPattern array
    this.text = ''
    this.possibleText = 'bgrp'
    // var tempLevel = this.level
    for (let i = 1; i <= this.level; i++) {
      this.text = this.possibleText.charAt(Math.floor(Math.random() * this.possibleText.length))
      console.log(this.text)
    }
    this.level += 1
    this.simonPattern.push(this.text)
  }
}
