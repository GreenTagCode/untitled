input.onButtonPressed(Button.A, function () {
    basic.showString("Okay")
    basic.showString("Finding micro-bit...")
    basic.showArrow(ArrowNames.North)
    basic.showString("Micro bit tugep has been connected.")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Entering code.  Is this your code?")
    basic.showLeds(`
        . . . . #
        # . # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(5)
    basic.showNumber(4)
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showNumber(0)
    basic.showIcon(IconNames.Yes)
    basic.showString("Shutting down micro bit.    Good bye")
    basic.showString("Shutting down fake sim")
    basic.showString("" + (images.createBigImage(`
        . . . . . . . . # .
        . . . # # . . # # #
        . . # # # # . . # .
        . # # # # # # . # .
        # # # # # # # # # #
        `)))
    basic.showString("Welcome to home screen. Shake to shut down!")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Finding shut down code.")
    basic.showNumber(86579)
    basic.showString("Shutting down fully. ")
    basic.showString("Bye.")
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.clearScreen()
})
basic.showString("Hello! To pair micro-bit press button A+B")
