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
    this.soundOn = false
  }
  nextRound () {
    // start next round, set user patter to zero and clicks to zero, add one to simon pattern and make it flash
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
    // console.log(this.simonPattern)
  }
  simonPatternFlash () {
    let inputs = {
      b: $('.blue'),
      g: $('.green'),
      r: $('.red'),
      p: $('.purple')
    }
    // loop through simon pattern array and make tiles flash
    for (let i = 0; i < this.simonPattern.length; i++) {
      let char = this.simonPattern[i]
      if (this.soundOn) {
        setTimeout(function () {
          this.sound.play()
          inputs[char].fadeOut(100).fadeIn(100)
          // console.log(char, inputs[char])
        }, (i + 1) * 1000)
      } else {
        setTimeout(function () {
          inputs[char].fadeOut(100).fadeIn(100)
          // console.log(char, inputs[char])
        }, (i + 1) * 1000)
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
    this.nextRound()
  }
  // create method to compare simonPattern to userPattern
  comparePattern () {
    // compare pattern each click and if each succesive click matches the simon pattern
    // AND the length of the two arrays are the same move to next round
    // if any of the above mentioned condition are NOT met user loses the game
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
      // console.log('match')
    } else if (compareCheck(this.userPattern, this.simonPattern.slice(0, this.userPattern.length))) {

    } else {
      // console.log('no match')
      $('h1').text(`lost after ${this.level} round(s)`)
    }
  }
}
