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
    this.counter = 0
  }
  nextRound () {
    this.clicks = 0
    this.userPattern = []
    this.setSimonPattern()
    this.simonPatternFlash()
  }
  setSimonPattern () {
    this.text = ''
    this.possibleText = 'bgrp'
    // associate random # with value from initialPattern array // add random generated letter to simonPattern
    for (let i = 0; i < this.level; i++) {
      this.text = this.possibleText.charAt(Math.floor(Math.random() * this.possibleText.length))
    }
    this.simonPattern.push(this.text)
    console.log(this.simonPattern)
  }
  simonPatternFlash () {
    let inputs = {
      b: $('.blue'),
      g: $('.green'),
      r: $('.red'),
      p: $('.purple')
    }
    for (let i = 0; i < this.simonPattern.length; i++) {
      let char = this.simonPattern[i]

      setTimeout(function () {
        inputs[char].addClass('flash')
        console.log(char, inputs[char])
      }, (i + 1) * 1000)
      setTimeout(function () {
        inputs[char].removeClass('flash')
        console.log(char, inputs[char])
      }, (i + 0.7) * 1000)
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
    this.nextRound()
  }
  // create method to compare simonPattern to userPattern
  comparePattern () {
    // compare pattern if match
    // run every click, 2 possibles, if userclicks length is shorter wait if equal length check
    function compareCheck (array1, array2) {
      for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
          return false
        }
      }
      return true
    }
    if (this.simonPattern.length === this.userPattern.length && compareCheck(this.simonPattern, this.userPattern)) {
      this.level += 1
      this.nextRound()
      console.log('match')
    } else if (compareCheck(this.userPattern, this.simonPattern.slice(0, this.userPattern.length))) {

    } else {
      console.log('no match')
      $('h1').text('try again!')
      return false
    }
  }
}
