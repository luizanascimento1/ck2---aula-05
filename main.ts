let Fail = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    Fail += 1
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showNumber(Fail)
})
input.onButtonPressed(Button.A, function () {
    Fail = 0
    basic.showNumber(Fail)
})
basic.forever(function () {
	
})
