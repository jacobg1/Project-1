/* global $ */
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
