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
      title: $('h1'),
      soundButton: $('.beep'),
    }
    // initialze change handle listeners
    this.listen()
    // reset text to game title
    this.inputs.title.text('Simon Says')
  }
  // associate event listeners with inputs
  listen () {
    this.inputs.b.on('click', this.handleButtonChange.bind({view: this, code: 'b'}))
    this.inputs.g.on('click', this.handleButtonChange.bind({view: this, code: 'g'}))
    this.inputs.r.on('click', this.handleButtonChange.bind({view: this, code: 'r'}))
    this.inputs.p.on('click', this.handleButtonChange.bind({view: this, code: 'p'}))
    this.inputs.startButton.on('click', this.handleStartGame.bind(this))
    this.inputs.soundButton.on('click', this.handleSound.bind(this))

    // moved from handleSound
    this.inputs.b.on('click', this.playSound.bind(this))
    this.inputs.g.on('click', this.playSound.bind(this))
    this.inputs.r.on('click', this.playSound.bind(this))
    this.inputs.p.on('click', this.playSound.bind(this))

  }
  handleSound () {
    // button playSound() binding should only happen once.
    // Moved to listen() above

    // When clicked, toggle soundOn
    this.model.soundOn = !this.model.soundOn

    // Change the button text depending on the current state
    if (this.model.soundOn) {
      this.inputs.soundButton.text('Sound On')
    } else {
      this.inputs.soundButton.text('Sound Off')
    }
  }
  playSound () {
    if (this.model.soundOn === true) {
      this.inputs.sound[0].play()

    }
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
  handleButtonChange () {
    // this.inputs.sound[0].play()
    if (this.view.model.input_allowed) {
      this.view.inputs[this.code].fadeOut(100).fadeIn(100)
      this.view.model.clicks += 1
      this.view.winCheck()
      this.view.model.addToUserPattern(this.code)
      // console.log(this.model.userPattern)
      this.view.model.comparePattern()
    }
  }
  // set winning condition if level is 4 and clicks are also 10
  // this will only check for a win if
  winCheck () {
    if (this.model.level === 6 && this.model.level === this.model.clicks) {
      this.inputs.title.text('YOU WIN')
      throw new Error('win')
    }
  }
}
