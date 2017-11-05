////////////////////////////////////////
//
// Basic test of sound and LEDs
//
// Button A: Play upwards scale
// Button B: Play downwards scale
//
////////////////////////////////////////

input.onButtonPressed(Button.A, () => {
    led_play(0, 4, 523, BeatFraction.Half)
    led_play(0, 3, 587, BeatFraction.Half)
    led_play(0, 2, 659, BeatFraction.Half)
    led_play(0, 1, 698, BeatFraction.Half)
    led_play(0, 0, 784, BeatFraction.Whole)
})

input.onButtonPressed(Button.B, () => {
    led_play(4, 0, 784, BeatFraction.Half)
    led_play(4, 1, 698, BeatFraction.Half)
    led_play(4, 2, 659, BeatFraction.Half)
    led_play(4, 3, 587, BeatFraction.Half)
    led_play(4, 4, 523, BeatFraction.Whole)
})

function led_play(x: number, y: number, frequency: number, duration: BeatFraction) {
    led.plot(x, y)
    music.playTone(frequency, music.beat(duration))
    led.unplot(x, y)
}
