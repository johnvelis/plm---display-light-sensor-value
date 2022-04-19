input.onButtonPressed(Button.A, function () {
    RightLineSensorValue = finch.getLine(RLDir.Right)
    basic.showString("" + (RightLineSensorValue))
})
let RightLineSensorValue = 0
finch.startFinch()
basic.pause(1000)
finch.setBeak(0, 100, 0)
music.playTone(262, music.beat(BeatFraction.Whole))
basic.showIcon(IconNames.Yes)
