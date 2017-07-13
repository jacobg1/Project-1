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
    // this.text
  }
  nextRound () {
    // this.level += 1
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
  // counter () {
  //   if (this.counter < this.level) {
  //     setTimeout(this.simonPatternFlash, 500)
  //   }
  // }
  simonPatternFlash () {
    let inputs = {
      b: $('.blue'),
      g: $('.green'),
      r: $('.red'),
      p: $('.purple')
    }

    for (let i = 0; i < this.simonPattern.length; i++) {
      // if (this.simonPattern[i] === 'g') {
      let char = this.simonPattern[i]

      //let that = this
      setTimeout(function () {
        inputs[char].addClass('flash')
console.log(char, inputs[char]);
      }, (i + 1) * 1000)
      setTimeout(function () {
        inputs[char].removeClass('flash')
        console.log(char, inputs[char]);
      }, (i + 1) * 1300)
    }
  }
      // } else if (this.simonPattern[i] === 'b') {
      //   setTimeout(function () {
      //     $('.blue').addClass('flash')
      //   }, (i + 1) * 1000)
      //   setTimeout(function () {
      //     $('.blue').removeClass('flash')
      //   }, i * 1000)
      // } else if (this.simonPattern[i] === 'r') {
      //   setTimeout(function () {
      //     $('.red').addClass('flash')
      //   }, (i + 1) * 1000)
      //   setTimeout(function () {
      //     $('.red').removeClass('flash')
      //   }, i * 1000)
      // } else if (this.simonPattern[i] === 'p') {
      //   setTimeout(function () {
      //     $('.purple').addClass('flash')
      //   }, (i + 1) * 1000)
      //   setTimeout(function () {
      //     $('.purple').removeClass('flash')
      //   }, i * 1000)

      // this.counter += 1

    // if (this.counter < this.level) {
    //   this.counter += 1
    //   setTimeout(this.simonPatternFlash(), 1200)
    // }


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
      // this.level += 1

    } else {
      console.log('no match')
      this.playGame()
      this.setSimonPattern()
      this.simonPatternFlash()
    }
  }
}
// arr.forEach ((val) => {
// find dom circle for each value and change class
// flashCircle(val)
// }
// check only after lengths are the same dont check until this
