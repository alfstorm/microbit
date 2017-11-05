////////////////////////////////////////
//
// Play sound from accelerator input
//
// Button A: X accelerator
// Button B: Y accelerator
//
////////////////////////////////////////

let accelY_on: boolean = false
let accelX_on: boolean = false
let baseFrequency: number = 220
let maxAccelValue: number = 1024
let X: number = 0
let Y: number = 0
let lastX: number = 0
let lastY: number = 0

input.onButtonPressed(Button.A, () => {
    accelX_on = !(accelX_on)
    ledUnplotAll()
})

input.onButtonPressed(Button.B, () => {
    accelY_on = !(accelY_on)
    ledUnplotAll()
})

basic.forever(() => {
    let accelX: number
    let accelY: number

    // Enable and normalize X accelerator value
    if (accelX_on) {
        accelX = input.acceleration(Dimension.X) + maxAccelValue
    } else {
        accelX = 0
    }

    // Enable and normalize Y accelerator value
    if (accelY_on) {
        accelY = input.acceleration(Dimension.Y) + maxAccelValue
    } else {
        accelY = 0
    }

    // Play tone
    if (accelX_on || accelY_on) {
	music.ringTone(accelX + accelY + baseFrequency)
    }
    // stop sound with 1 ms rest
    else {
	music.rest(1)
    }

    // Divide accelerator value in equal bins and traslate to led number.
    // Draw moving vertical line for X accelerator and horizontal line
    // for Y accelerator.

    let ledBin: number = 2 * maxAccelValue / 5
    if (accelX_on) {
        for (X = 0; X < 5; X++) {
            if (accelX > X * ledBin && accelX < (X + 1) * ledBin) {
                if (X != lastX) {
                    deleteVerticalLine(lastX)
                }
                drawVerticalLine(X)
                if (accelY_on) {
                    drawHorizontalLine(Y)
                }
                lastX = X
                break
            }
        }
	// need this to keep index correct for Y part
        if (X == 5) {
            X--
        }
    }

    if (accelY_on) {
        for (Y = 0; Y < 5; Y++) {
            if (accelY > Y * ledBin && accelY < (Y + 1) * ledBin) {
                if (Y != lastY) {
                    deleteHorizontalLine(lastY)
                }
                drawHorizontalLine(Y)
                if (accelX_on) {
                    drawVerticalLine(X)
                }
                lastY = Y
                break
            }
        }
        // need this to keep index correct for X part
	if (Y == 5) {
            Y--
        }
    }
})

function drawHorizontalLine(position: number) {
    for (let i = 0; i < 5; i++) {
        led.plot(i, position)
    }
}

function deleteHorizontalLine(position: number) {
    for (let i = 0; i < 5; i++) {
        led.unplot(i, position)
    }
}

function drawVerticalLine(position: number) {
    for (let i = 0; i < 5; i++) {
        led.plot(position, i)
    }
}

function deleteVerticalLine(position: number) {
    for (let i = 0; i < 5; i++) {
        led.unplot(position, i)
    }
}

function ledUnplotAll() {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
    `, 0)
}
