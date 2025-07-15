info.onScore(10, function () {
    game.setGameOverScoringType(game.ScoringType.HighScore)
    game.splash("true ending")
    game.gameOver(true)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
info.onScore(5, function () {
    game.splash("is don't best score")
    game.gameOver(true)
})
info.setScore(0)
info.setLife(4)
scene.setBackgroundColor(4)
game.splash("hello welcome to the game?")
game.splash("Answer the question to win the game")
game.splash("ready")
music.play(music.stringPlayable("A A G F G F A C5 ", 120), music.PlaybackMode.LoopingInBackground)
game.splash(game.askForNumber("12 958 + 2084", 5, true))
if (true) {
    info.startCountdown(10)
    info.changeScoreBy(1)
    game.splash("right or wrong")
    game.splash(game.ask("1083 + 394=1477"))
}
if (false) {
    info.changeLifeBy(-1)
}
if (true) {
    info.changeScoreBy(1)
    game.splash(game.askForNumber("4263+85695", 5, true))
}
if (false) {
    info.changeLifeBy(-1)
}
if (true) {
    info.changeScoreBy(3)
    game.splash(game.ask("what happen"))
}
if (false) {
    info.changeLifeBy(-1)
}
if (true) {
    info.changeScoreBy(5)
}
if (false) {
    info.changeLifeBy(-1)
}
