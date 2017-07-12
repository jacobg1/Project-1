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
class SimonView {
  constructor (model) {
    this.model = model
  }
  init () {   // target relevant elements
    this.inputs = {  // inputs here
      b: $('#blue'),
      g: $('#green'),
      r: $('#red'),
      p: $('#purple')
    }
    this.listen()
    this.model.setSimonPattern()
  }
  listen () {     // associate event listeners with inputs
    this.inputs.b.on('click', this.handleBlueChange.bind(this))
    this.inputs.g.on('click', this.handleGreenChange.bind(this))
    this.inputs.r.on('click', this.handleRedChange.bind(this))
    this.inputs.p.on('click', this.handlePurpleChange.bind(this))
  }
  handleBlueChange () {
    console.log('blue clicked')
  }
  handleRedChange () {
    console.log('red clicked')
  }
  handlePurpleChange () {
    console.log('purple clicked')
  }
  handleGreenChange () {
    console.log('green clicked')
  }
  render () {

  }

}
// $(document).ready(function () {
  const game = new SimonModel()  // create game construct
  const newGame = new SimonView(game)  // create new view construct and pass game as argument
  newGame.init()  // call the init method on the newGame construct
// })
console.log(newGame);
console.log(game);
console.log(game.simonPattern);
game.setSimonPattern()
console.log(game.simonPattern);
