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
    //initialze change handle listeners
    this.listen()
    //initialze simons pattern
    this.model.setSimonPattern()
  }
  // associate event listeners with inputs
  listen () {
    this.inputs.b.on('click', this.handleBlueChange.bind(this))
    this.inputs.g.on('click', this.handleGreenChange.bind(this))
    this.inputs.r.on('click', this.handleRedChange.bind(this))
    this.inputs.p.on('click', this.handlePurpleChange.bind(this))
  }
  //log click for repective button / color and button flash
  handleBlueChange () {
    this.inputs.b.addClass('animate')
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

}
