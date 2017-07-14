/* global $ */
class SimonView {
  constructor (model) {
    this.model = model
  }
  init () {
    // select jQuery elements
    this.inputs = {
      b: $('.blue'),
      g: $('.green'),
      r: $('.red'),
      p: $('.purple'),
      startButton: $('.start'),
      sound: $('#sound'),
      title: $('h1')
    }
    // initialze change handle listeners
    this.listen()
    // reset text to game title
    this.inputs.title.text('Simon Says')
  }
  // associate event listeners with inputs
  listen () {
    this.inputs.b.on('click', this.handleBlueChange.bind(this))
    this.inputs.g.on('click', this.handleGreenChange.bind(this))
    this.inputs.r.on('click', this.handleRedChange.bind(this))
    this.inputs.p.on('click', this.handlePurpleChange.bind(this))
    this.inputs.startButton.on('click', this.handleStartGame.bind(this))
  }
  // log click for respective button / color and make button flash
  // on click add coresponding color string  to user pattern array
  // compare user pattern to simon pattern if the three following possibilities: when I click each color I want it to check for equality each time
  // but only move to next round if strings are equal in length as well as value
  handleStartGame () {
    this.model.playGame()
    this.inputs.title.text('Simon Says')
  }
  // handlers will make each tile blink on click, also increase click level, will check for win
  // and add to user pattern AND play sound ;)
  handleBlueChange () {
    this.inputs.sound[0].play()
    this.inputs.b.fadeOut(100).fadeIn(100)
    this.model.clicks += 1
    this.winCheck()
    this.model.addToUserPattern('b')
    // console.log(this.model.userPattern)
    this.model.comparePattern()
  }
  handleRedChange () {
    this.inputs.sound[0].play()
    this.inputs.r.fadeOut(100).fadeIn(100)
    this.model.clicks += 1
    this.winCheck()
    this.model.addToUserPattern('r')
    // console.log(this.model.userPattern)
    this.model.comparePattern()
  }
  handlePurpleChange () {
    this.inputs.sound[0].play()
    this.inputs.p.fadeOut(100).fadeIn(100)
    this.model.clicks += 1
    this.winCheck()
    this.model.addToUserPattern('p')
    // console.log(this.model.userPattern)
    this.model.comparePattern()
  }
  handleGreenChange () {
    this.inputs.sound[0].play()
    this.inputs.g.fadeOut(100).fadeIn(100)
    this.model.clicks += 1
    this.winCheck()
    this.model.addToUserPattern('g')
    // console.log(this.model.userPattern)
    this.model.comparePattern()
  }
  // set winning condition if level is 4 and clicks are also 10
  // this will only check for a win if
  winCheck () {
    if (this.model.level === 7 && this.model.level === this.model.clicks) {
      this.inputs.title.text('YOU WIN')
      throw new Error('win')
    }
  }
}
