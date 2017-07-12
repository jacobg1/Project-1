/* global $ */
class SimonModel {
  constructor () {
    // create empty array for generated pattern
    this.simonPattern = []
    // create empty array for user input pattern
    this.userPattern = ['']
    // set level, this will increase in increments of one
    this.level = 0
  }
  setSimonPattern () {
    this.text = ''
    this.possibleText = 'bgrp'

    // associate random # with value from initialPattern array
    for (let i = 1; i <= this.level; i++) {
      this.text = this.possibleText.charAt(Math.floor(Math.random() * this.possibleText.length))
      console.log(this.text)
    }
    // increase level by 1
    this.level += 1
    // add random generated letter to simonPattern
    this.simonPattern.push(this.text)
  }
  addToUserPattern (x) {
    //add user choice to user pattern
    this.userPattern.push(x)
  }
}
