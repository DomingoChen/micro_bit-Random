let answer = 0
input.onGesture(Gesture.Shake, function () {
    answer = randint(0, 2)
    if (answer == 0) {
        basic.showString("Yes!")
    }
    if (answer == 1) {
        basic.showString("NO!")
    } else {
        basic.showString("Reshake!")
    }
})
