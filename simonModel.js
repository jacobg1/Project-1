/* global $ */
class SimonModel {
  constructor () {
    // create empty array for generated pattern
    this.simonPattern = []
    // create empty array for user input pattern
    this.userPattern = []
    // set level, this will increase in increments of one
    this.level = 1
    this.clicks = 0
    //this.text
  }
  nextRound () {
    this.level += 1
    this.clicks = 0
    this.userPattern = []
    this.setSimonPattern()
    this.simonPatternFlash()
  }

  setSimonPattern () {
    // this.text = ''
    this.possibleText = 'bgrp'

    // associate random # with value from initialPattern array // add random generated letter to simonPattern
    for (let i = 0; i < this.level; i++) {
      this.text = this.possibleText.charAt(Math.floor(Math.random() * this.possibleText.length))
    }
    this.simonPattern.push(this.text)
    console.log(this.simonPattern)
  }
  simonPatternFlash () {
    for (let i = 0; i < this.simonPattern.length; i++) {
      if (this.simonPattern[i] === 'g') {
        $('.green').addClass('flash')
      } else if (this.simonPattern[i] === 'b') {
        $('.blue').addClass('flash')
      } else if (this.simonPattern[i] === 'r') {
        $('.red').addClass('flash')
      } else {
        $('.purple').addClass('flash')
      }
    }
  }
  addToUserPattern (x) {
    // add user choice to user pattern
    this.userPattern.push(x)
  }
  playGame () {
    this.level = 1
    this.clicks = 0
    this.userPattern = []
    this.simonPattern = []
  }

  newGame () {
    console.log('new game')
  }
  // create method to compare simonPattern to userPattern
  comparePattern () {
    // compare pattern if match
    for (let i = 0; i < this.level; i++) {
      if (this.userPattern[i] === this.simonPattern[i]) {
        console.log('match')
        this.nextRound()
      } else {
        console.log('no match')
        this.playGame()
      }
    // if (this.userPattern[this.clicks] !== this.simonPattern[this.clicks]) {
    //   this.level = 0
    //   console.log(this.simonPattern)
    //   console.log(this.userPattern)
    // } else {
    //   console.log('you win')
    //   console.log(this.simonPattern)
    //   console.log(this.userPattern)
    //   this.level++
    //   console.log(this.level)
    //   this.playGame()
    // }
    }
  }
}

// arr.forEach ((val) => {
// find dom circle for each value and change class
// flashCircle(val)
// }
// check only after lengths are the same dont check until this
