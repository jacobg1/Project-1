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
      startButton: $('.start')
    }
    // initialze change handle listeners
    this.listen()
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
  //but only move to next round if strings are equal in length as well as value
  handleStartGame () {
    this.model.playGame()
    $('h1').text('Simon Says')
  }
  //handlers will make each tile blink on click, also increase click level, check for win,
  //add to user pattern and check for winnig condition
  handleBlueChange () {
    this.renderBlueBlink()
    this.model.clicks += 1
    this.winCheck()
    this.model.addToUserPattern('b')
    console.log(this.model.userPattern)
    this.model.comparePattern()
  }
  handleRedChange () {
    this.renderRedBlink()
    this.model.clicks += 1
    this.winCheck()
    this.model.addToUserPattern('r')
    console.log(this.model.userPattern)
    this.model.comparePattern()
  }
  handlePurpleChange () {
    this.renderPurpleBlink()
    this.model.clicks += 1
    this.winCheck()
    this.model.addToUserPattern('p')
    console.log(this.model.userPattern)
    this.model.comparePattern()
  }
  handleGreenChange () {
    this.renderGreenBlink()
    this.model.clicks += 1
    this.winCheck()
    this.model.addToUserPattern('g')
    console.log(this.model.userPattern)
  }
  //set winning condition if level is 10 and clicks are also 10
  //this will only check for a win if
  winCheck () {
    if (this.model.level === 10 && this.model.level === this.model.clicks) {
      $('h1').text('WINNER')
    } else {
      this.model.comparePattern()
    }
  }
  //function to call when I want tiles to blink on click
  renderGreenBlink () {
    $('.green').fadeOut(100).fadeIn(100)
  }
  renderRedBlink () {
    $('.red').fadeOut(100).fadeIn(100)
  }
  renderBlueBlink () {
    $('.blue').fadeOut(100).fadeIn(100)
  }
  renderPurpleBlink () {
    $('.purple').fadeOut(100).fadeIn(100)
  }

}
