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
    this.model.setLevel()
    this.model.setSimonPattern()
  }
  // associate event listeners with inputs
  listen () {
    this.inputs.b.on('click', this.handleBlueChange.bind(this))
    this.inputs.g.on('click', this.handleGreenChange.bind(this))
    this.inputs.r.on('click', this.handleRedChange.bind(this))
    this.inputs.p.on('click', this.handlePurpleChange.bind(this))
  }
  // log click for repective button / color and button flash
  handleBlueChange () {
    this.inputs.b.addClass('animate')
    console.log('blue clicked')
    this.model.clicks += 1
    console.log(this.model.clicks);
    // on click add string b to user pattern array
    this.model.addToUserPattern('b')
    console.log('user patternBC:')
    console.log(this.model.userPattern)
    // compare user pattern to simon pattern
    this.model.comparePattern()
  }
  handleRedChange () {
    this.inputs.r.addClass('animate')
    console.log('red clicked')
    this.model.addToUserPattern('r')
    console.log(this.model.userPattern)
  }
  handlePurpleChange () {
    this.inputs.p.addClass('animate')
    console.log('purple clicked')
    this.model.addToUserPattern('p')
    console.log(this.model.userPattern)
  }
  handleGreenChange () {
    this.model.addToUserPattern('g')
    console.log(this.model.userPattern)
    this.renderGreenBlink()
    console.log('green clicked')
    console.log('user pattern:')
    console.log(this.model.userPattern)
  }
// change the button back to normal to create flash effect

  renderGreenBlink () {
    this.inputs.g.addClass('flash')
    setTimeout(function () {
      $('.green').removeClass('flash')
    }, 200)
  }
  renderRedBlink () {

  }
  renderBlueBlink () {

  }
  renderPurpleBlink () {

  }
}
