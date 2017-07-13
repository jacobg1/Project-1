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
      p: $('.purple')
    }
    // initialze change handle listeners
    this.listen()
    // initialze simons pattern
    this.model.setSimonPattern()
    this.model.simonPatternFlash()
    // this.flashCircle()
  }
  // associate event listeners with inputs
  listen () {
    this.inputs.b.on('click', this.handleBlueChange.bind(this))
    this.inputs.g.on('click', this.handleGreenChange.bind(this))
    this.inputs.r.on('click', this.handleRedChange.bind(this))
    this.inputs.p.on('click', this.handlePurpleChange.bind(this))
  }
  // log click for repective button / color and button flash
  // on click add string b to user pattern array
  // compare user pattern to simon pattern
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
    console.log(this.model.clicks)
    console.log(this.model.level)
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
    this.model.comparePattern()
  }
  renderGreenBlink () {
    $('.green').fadeOut(100).fadeIn(100)

    // setTimeout(function () {
    //   $('.green').removeClass('flash')
    // }, 400)
  }
  winCheck () {
    if (this.model.level === 2 && this.model.level === this.model.clicks) {
      $('h1').text('WINNER')
    }
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
