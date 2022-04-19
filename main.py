def on_button_pressed_a():
    basic.show_string("" + str((input.light_level())))
input.on_button_pressed(Button.A, on_button_pressed_a)

finch.start_finch()
basic.pause(1000)
finch.set_beak(0, 100, 0)
music.play_tone(262, music.beat(BeatFraction.WHOLE))
basic.show_icon(IconNames.YES)