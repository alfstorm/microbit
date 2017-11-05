////////////////////////////////////////
//
// Play the Imperial March
//
// Button A: Play first part
// Button B: Play second part
//
// Note: That second parameter to basic.showLeds
// is important, as the default is a 400ms wait
//
////////////////////////////////////////

input.onButtonPressed(Button.A, () => {
    music.setTempo(35)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `, 0)
    music.playTone(392, music.beat(BeatFraction.Quarter))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        `, 0)
    music.playTone(392, music.beat(BeatFraction.Quarter))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `, 0)
    music.playTone(392, music.beat(BeatFraction.Quarter))
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        . . . . .
        `, 0)
    music.playTone(311, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `, 0)
    music.playTone(466, music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        . . . . .
        `, 0)
    music.playTone(392, music.beat(BeatFraction.Quarter))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `, 0)
    music.playTone(311, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        `, 0)
    music.playTone(466, music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `, 0)
    music.playTone(392, music.beat(BeatFraction.Half))
})

input.onButtonPressed(Button.B, () => {
    music.setTempo(35)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `, 0)
    music.playTone(587, music.beat(BeatFraction.Quarter))
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `, 0)
    music.playTone(587, music.beat(BeatFraction.Quarter))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `, 0)
    music.playTone(587, music.beat(BeatFraction.Quarter))
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `, 0)
    music.playTone(622, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `, 0)
    music.playTone(466, music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `, 0)
    music.playTone(370, music.beat(BeatFraction.Quarter))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `, 0)
    music.playTone(311, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `, 0)
    music.playTone(466, music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `, 0)
    music.playTone(392, music.beat(BeatFraction.Half))
})
