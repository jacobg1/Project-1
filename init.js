$(document).ready(function () {
  const game = new SimonModel()  // create game construct
  const newGame = new SimonView(game)  // create new view construct and pass game as argument
  newGame.init()  // call the init method on the newGame construct
  // console.log('simon pattern:')
  // console.log(game.simonPattern)
  // console.log('user pattern:')
  // console.log(game.userPattern)
})
